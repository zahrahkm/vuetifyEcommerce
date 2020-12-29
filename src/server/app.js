const express = require('express');
const app = express();
require("dotenv").config();
const bcrypt = require('bcrypt');
const bodyParser=require('body-parser');
const cors = require('cors');
const jwt = require('jsonwebtoken');
const crypto = require("crypto");
const low = require('lowdb');
const FileSync = require('lowdb/adapters/FileSync');
const adapter = new FileSync('db.json')
const db = low(adapter);



// Set some defaults (required if your JSON file is empty)
db.defaults( {users: [],allproducts:[]})
     .write()

app.use(bodyParser.json())
app.use(cors())




app.get('/allproducts',(req,res)=>{
    res.json(db.get('allproducts').value())
})


app.get('/allproducts/:id',(req,res)=>{

    const product=db.get('allproducts').find({ id: req.params.id }).value()

    if(product){

        res.json({product: product|| {}})

    }else{
        res.send('این محصول وجود ندارد.')
    }

})


app.put('/allproducts/:id',(req,res)=>{

    const product=db.get('allproducts').find({ id: req.params.id }).value()

    if(product){

        res.json({product: product|| {}})

    }else{
        res.send('این محصول وجود ندارد.')
    }

})




app.post('/register', function(req, res) {
  let user={
      id:crypto.randomBytes(16).toString("hex"),
      username:req.body.username,
      email:req.body.email,
  }
  let password= req.body.password;
  db.get('users')
      .push({ id: user.id, username:user.username, email:user.email, password: password})
      .write()

    res.json(user)

});



app.post('/login', (req, res) => {

    const email = req.body.email;
    const password = req.body.password
    const user =db.get('users').find({ email : email ,password : password}).value();
    if (user) {
        //res.status(200 its ok)
        //jwt.sign({foo} ,private_key)
        const token = jwt.sign({ user }, process.env.JWT_KEY,{ expiresIn: '1h' });

        res.json({
            token:token,
            user:user
        })
    }
    else {
        res.status(403);
        res.json({
            msg:`invalid login information`
        })
    }

})











let port = process.env.PORT || 3000;

let server = app.listen(port, function() {
    console.log('Express server listening on port ' + port)
});
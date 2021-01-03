import axios from "axios";

export function getproducts({commit}){
    commit('LOADING_STATUS',true)
    axios.get('http://localhost:3000/allproducts')
        .then(response=>{
            const allproducts = response.data;
            commit('GET_PRODUCTS',allproducts)
            commit('LOADING_STATUS',false)
        })
}

export function getSingleProduct({commit},productId){
    axios.get(`http://localhost:3000/allproducts/${productId}`)
        .then(response=>{
            commit('GET_SINGLE_PRODUCT',response.data)
        })
        .catch(function (error) {
            console.log(error);
        });
}



export function addProductToCart({commit},{product,quantity}){
    commit('ADD_TO_CART',{product,quantity})
    axios.post('http://localhost:3000/card',{
        product_id :product.id,
        quantity
    })
}

export function getCartItems({commit}){
    axios.get('http://localhost:3000/card')
        .then(resp=>{
            commit('SET_CART',resp.data)
        })
}

export function removeProductFromCart({commit},product){
    commit('REMOVE_PRODUCT_FROM_CART' ,product)
    axios.delete(`http://localhost:3000/card/${product.id}`);

}

export function clearCartItems({commit}){
    commit('CLEAR_CART_ITEMS')
    axios.delete(`http://localhost:3000/card`);

}

export function increaseQuantity({commit},product){
    commit('INCREASE_QUANTITY' ,product)
}

export function decreaseQuantity({commit},product){
    commit('DECREASE_QUANTITY' ,product)
}

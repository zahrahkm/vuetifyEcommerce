import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";

Vue.use(Vuex)


export const store=new Vuex.Store({
    state:{
        allproducts: null ,
        selectCategory:'all',
        status: '',
        token: null ,
        user : null ,
        cart:[],
        loadingStatus:false,
        product:null,
        otherproduct:[]
    },
    getters:{
      allproducts :state => {
          return state.allproducts
      },
      product :state => {
            return state.product
      },
      selectCategory:state => {
          state.selectCategory
      },
      filterCategories:state=>{
          var category= state.selectCategory;
          if(category=== "all"){
              return state.allproducts
          }else{
              return state.allproducts.filter(p=>{
                  return p.category ===category
              })
          }
      },
      otherproduct:state=>{
          var idToRemove = state.allproducts.filter((item) => item.id !== state.product.product.id)
          return state.otherproduct = idToRemove ;
      },

      cart:state=>{
          return state.cart
      },
      cartItemCount:state=>{
          return state.cart.length
      },
      cartTotalPrice:state=>{
          let total=0;
          state.cart.forEach(item=>{
              total += item.product.price * item.quantity
          })
          return total;
      },
      isLoggedIn: state => !!state.token,
      loadingStatus:state => {
          return state.loadingStatus
      }
    },






    actions:{
        auth({commit},{user,token}){
          commit("AUTH",{user,token})
        },
        logout({commit}){
            localStorage.removeItem('token')
            localStorage.removeItem('user')
            commit("LOG_OUT")
        },
        getproducts({commit}){
           commit('LOADING_STATUS',true)
           axios.get('http://localhost:3000/allproducts')
              .then(response=>{
                  const allproducts = response.data;
                  commit('GET_PRODUCTS',allproducts)
                  commit('LOADING_STATUS',false)
              })
        },

        getSingleProduct({commit},productId){
            axios.get(`http://localhost:3000/allproducts/${productId}`)
                .then(response=>{
                    commit('GET_SINGLE_PRODUCT',response.data)
                })
                .catch(function (error) {
                console.log(error);
            });
        },



        addProductToCart({commit},{product,quantity}){
            commit('ADD_TO_CART',{product,quantity})
            axios.post('http://localhost:3000/cart',{
                product_id :product.id,
                quantity
            })
        },

        getCartItems({commit}){
            axios.get('http://localhost:3000/cart')
                .then(resp=>{
                    commit('SET_CART',resp.data)
                })
        },
        removeProductFromCart({commit},product){
           commit('REMOVE_PRODUCT_FROM_CART' ,product)
        },
        clearCartItems({commit}){
           commit('CLEAR_CART_ITEMS')
        },
        increaseQuantity({commit},product){
            commit('INCREASE_QUANTITY' ,product)
        },
        decreaseQuantity({commit},product){
            commit('DECREASE_QUANTITY' ,product)
        },


    },
    mutations: {
        AUTH(state, {user , token}){
            state.token = token
            state.user = user
        },
        LOG_OUT(state){
            state.status = ''
            state.token = ''
        },
        GET_PRODUCTS(state,allproducts){
            state.allproducts=allproducts
        },
        GET_SINGLE_PRODUCT(state,singleproduct){
            state.product= singleproduct
        }
        ,
        ADD_TO_CART(state,{product,quantity}){
            let productInCart=state.cart.find(item=> item.product.id=== product.id);
            if(productInCart){
                productInCart.quantity += quantity
                return;
            }
            state.cart.push({product,quantity})
        },
        SET_CART(state,cartItems){
            state.cart=cartItems;
        },
        REMOVE_PRODUCT_FROM_CART(state,product){
            state.cart = state.cart.filter(item=>item.product.id !== product.id)
        },
        CLEAR_CART_ITEMS(state){
            state.cart= [];
        },
        INCREASE_QUANTITY(state,product){
            let productInCart=state.cart.find(item=> item.product.id=== product.id);
            if(productInCart){
                productInCart.quantity +=1
                return;
            }
        },
        DECREASE_QUANTITY(state,product){
            let productInCart=state.cart.find(item=> item.product.id=== product.id);
            if(productInCart && productInCart.quantity>1){
                productInCart.quantity -=1
                return;
            }
        },
        LOADING_STATUS(state,newLoadingStatus){
            return state.loadingStatus=newLoadingStatus
        }


    },

})




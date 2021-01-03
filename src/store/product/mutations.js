export function GET_PRODUCTS(state,allproducts){
    state.allproducts=allproducts
}


export function GET_SINGLE_PRODUCT(state,singleproduct){
    state.product= singleproduct
}

export function ADD_TO_CART(state,{product,quantity}){
    let productInCart=state.cart.find(item=> item.product.id=== product.id);
    if(productInCart){
        productInCart.quantity += quantity
        return;
    }
    state.cart.push({product,quantity})
}

export function SET_CART(state,cartItems){
    state.cart=cartItems;
}

export function REMOVE_PRODUCT_FROM_CART(state,product){
    state.cart = state.cart.filter(item=>item.product.id !== product.id)
}
export function CLEAR_CART_ITEMS(state){
    state.cart= [];
}

export function INCREASE_QUANTITY(state,product){
    let productInCart=state.cart.find(item=> item.product.id=== product.id);
    if(productInCart){
        productInCart.quantity +=1
        return;
    }
}

export function DECREASE_QUANTITY(state,product){
    let productInCart=state.cart.find(item=> item.product.id=== product.id);
    if(productInCart && productInCart.quantity>1){
        productInCart.quantity -=1
        return;
    }
}

export function LOADING_STATUS(state,newLoadingStatus){
    return state.loadingStatus=newLoadingStatus
}


export function allproducts (state) {
    return state.allproducts

}

export function product (state) {
    return state.product
}


export function selectCategory (state) {
    return state.selectCategory
}

export function otherproduct (state) {
    var idToRemove = state.allproducts.filter((item) => item.id !== state.product.product.id)
    return state.otherproduct = idToRemove ;
}


export function filterCategories (state) {
    var category= state.selectCategory;
    if(category=== "all"){
        return state.allproducts
    }else{
        return state.allproducts.filter(p=>{
            return p.category ===category
        })
    }
}





export function loadingStatus (state) {
    return state.loadingStatus
}


export function cartTotalPrice (state) {
    let total=0;
    state.cart.forEach(item=>{
        total += item.product.price * item.quantity
    })
    return total
}


export function cartItemCount (state) {
    return state.cart.length
}


export function cart (state) {
    return state.cart
}
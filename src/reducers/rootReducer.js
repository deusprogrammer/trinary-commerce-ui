import CartHelper from "../utils/CartHelper"

const initialState = {
    cart: CartHelper.getCart() || []
}

export default (state = initialState, action) => {
    console.log(`STATE:  ${JSON.stringify(state)}`)
    console.log(`ACTION: ${JSON.stringify(action)}`)

    let newState = {...state}
    let cart = []
    switch(action.type) {
        case "ADD_TO_CART":
            CartHelper.addToCart(action.product)
            cart = [...newState.cart]
            cart.push(action.product)
            newState.cart = cart
            return newState
        case "REMOVE_FROM_CART":
            CartHelper.removeFromCart(action.product)
            cart = [...newState.cart]
            var filteredCart = cart.filter((product) => {
                return product.id !== action.product.id
            })
            newState.cart = filteredCart
            return newState
        case "CLEAR_CART":
            CartHelper.clearCart()
            newState.cart = []
            return newState
        default:
            return newState
    }
}
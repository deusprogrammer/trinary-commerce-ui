const initialState = {
    cart: JSON.parse(localStorage.getItem("cart")) || [],
    locations: [],
    currentLocation: {id: ""}
}

export default (state = initialState, action) => {
    console.log(`STATE:  ${JSON.stringify(state)}`)
    console.log(`ACTION: ${JSON.stringify(action)}`)

    let newState = {...state}
    let cart = []
    switch(action.type) {
        case "SET_CURRENT_LOCATION":
            newState.currentLocation = action.location
            return newState
        case "SET_LOCATIONS":
            newState.locations = action.locations
            return newState
        case "ADD_TO_CART":
            cart = [...newState.cart]
            var found = cart.find((cartItem) => cartItem.variant.id === action.cartItem.variant.id)
            if (found) {
                found.quantity = parseInt(found.quantity) + parseInt(action.cartItem.quantity)
                return newState
            }

            cart.push(action.cartItem)
            localStorage.setItem("cart", JSON.stringify(cart))
            newState.cart = cart
            return newState
        case "REMOVE_FROM_CART":
            cart = [...newState.cart]
            var filteredCart = cart.filter((cartItem) => {
                return cartItem.variant.id !== action.cartItem.variant.id
            })
            localStorage.setItem("cart", JSON.stringify(filteredCart))
            newState.cart = filteredCart
            return newState
        case "CLEAR_CART":
            localStorage.setItem("cart", JSON.stringify([]))
            newState.cart = []
            return newState
        default:
            return newState
    }
}
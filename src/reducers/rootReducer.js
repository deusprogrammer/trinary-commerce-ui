const initialState = {
    cart: []
}

export default (state = initialState, action) => {
    console.log(`STATE:  ${JSON.stringify(state)}`)
    console.log(`ACTION: ${JSON.stringify(action)}`)

    let newState = {...state}
    switch(action.type) {
        case "ADD_TO_CART":
        case "REMOVE_FROM_CART":
        case "CLEAR_CART":
        default:
            return newState
    }
}
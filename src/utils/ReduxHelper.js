import {connect} from 'react-redux'

let mapStateToProps = (state) => {
    return {
        cartContents: state.cart,
        locations: state.locations,
        currentLocation: state.currentLocation
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        setCurrentLocation: (location) => {dispatch({type: "SET_CURRENT_LOCATION", location})},
        setLocations: (locations) => {dispatch({type: "SET_LOCATIONS", locations})},
        addToCart: (product, variant, quantity) => {dispatch({type: "ADD_TO_CART", cartItem: {product, variant, quantity}})},
        removeFromCart: (cartItem) => {dispatch({type: "REMOVE_FROM_CART", cartItem})},
        clearCart: () => {dispatch({type: "CLEAR_CART"})}
    }
}

export default (clazz) => {
    return connect(mapStateToProps, mapDispatchToProps)(clazz)
}
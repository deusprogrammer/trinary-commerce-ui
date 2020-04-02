import {connect} from 'react-redux'

let mapStateToProps = (state) => {
    return {
        cartContents: state.cart
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        addToCart: (product, variant, quantity) => {dispatch({type: "ADD_TO_CART", cartItem: {product, variant, quantity}})},
        removeFromCart: (cartItem) => {dispatch({type: "REMOVE_FROM_CART", cartItem})},
        clearCart: () => {dispatch({type: "CLEAR_CART"})}
    }
}

export default (clazz) => {
    return connect(mapStateToProps, mapDispatchToProps)(clazz)
}
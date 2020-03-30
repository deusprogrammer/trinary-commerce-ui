import {connect} from 'react-redux'
import Calls from '../thunks/Calls'

let mapStateToProps = (state) => {
    return {
        cartContents: state.cartContents
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        addToCart: (product) => {dispatch({type: "ADD_TO_CART", product})},
        removeFromCart: (product) => {dispatch({type: "REMOVE_FROM_CART", product})},
        clearCart: () => {dispatch({type: "CLEAR_CART"})}
    }
}

export default (clazz) => {
    return connect(mapStateToProps, mapDispatchToProps)(clazz)
}
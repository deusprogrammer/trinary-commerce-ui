import React from 'react';
import connect from '../utils/ReduxHelper';

class CartSuccess extends React.Component {
    componentDidMount() {
        this.props.clearCart();
    }

    render() {
        return <div>Your order has been received!  Please check your email for order details.</div>
    }
}

export default connect(CartSuccess);
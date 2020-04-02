import React from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';
import {toast} from 'react-toastify';

import connect from '../utils/ReduxHelper';
import config from '../utils/config';

class Cart extends React.Component {
    onCheckout = () => {
        let items = this.props.cartContents.map(cartItem => {
            return {
                id: cartItem.variant.id,
                quantity: cartItem.quantity
            }
        })

        toast("Creating checkout on Square...please wait", {type: "info"});

        axios.post(`${config.baseUrl}/orders`, {
            items,
            redirectUrl: "http://localhost:3000/util/commerce/cart/success"
            //redirectUrl: "https://deusprogrammer.com/util/commerce/cart/success"
        })
            .then((response) => {
                window.location = response.data.checkoutUrl;
            })
            .catch((error) => {
                toast("Failed to create order on square", {type: "error"});
            })
    }

    render() {
        return (
            <div>
                <h3>Cart</h3>
                {this.props.cartContents && this.props.cartContents.length > 0 ?
                    <div>
                        <div style={{display: "table"}} className="cart-product">
                            {this.props.cartContents.map(cartItem => {
                                return (
                                    <div style={{display: "table-row"}}>
                                        <div style={{display: "table-cell", verticalAlign: "middle", paddingRight: "10px"}}>
                                            <img alt="product" style={{width: "100px", height: "100px", objectFit: "contain"}} src={cartItem.product.imageHref} />
                                        </div>
                                        <div style={{display: "table-cell", verticalAlign: "middle", paddingRight: "10px"}}>
                                            <Link to={`${process.env.PUBLIC_URL}/products/${cartItem.product.id}`}><strong>{cartItem.product.name}</strong></Link>
                                        </div>
                                        <div style={{display: "table-cell", verticalAlign: "middle", paddingRight: "10px"}}>
                                            {cartItem.variant.name}
                                        </div>
                                        <div style={{display: "table-cell", verticalAlign: "middle", paddingRight: "10px"}}>
                                            x{cartItem.quantity}
                                        </div>
                                        <div style={{display: "table-cell", verticalAlign: "middle", paddingRight: "10px"}}>
                                            {Number(cartItem.variant.price)
                                                .toLocaleString('en-US',
                                                {
                                                    style: 'currency',
                                                    currency: cartItem.variant.currency
                                                })}
                                        </div>
                                        <div style={{display: "table-cell", verticalAlign: "middle"}}>
                                            <button onClick={() => {this.props.removeFromCart(cartItem)}}>Remove</button>
                                        </div>
                                    </div>
                                )
                            })}
                            <div style={{display: "table-row"}}>
                                <div style={{display: "table-cell", verticalAlign: "middle", paddingRight: "10px"}}>
                                </div>
                                <div style={{display: "table-cell", verticalAlign: "middle", paddingRight: "10px"}}>
                                </div>
                                <div style={{display: "table-cell", verticalAlign: "middle", paddingRight: "10px"}}> 
                                </div>
                                <div style={{display: "table-cell", verticalAlign: "middle", paddingRight: "10px"}}>
                                </div>
                                <div style={{display: "table-cell", verticalAlign: "middle", paddingRight: "10px"}}>
                                    <strong>Total Before Tax:</strong>
                                    {Number(this.props.cartContents.reduce((acc, cartItem) => {
                                        return acc + cartItem.variant.price
                                    }, 0))
                                    .toLocaleString('en-US',
                                    {
                                        style: 'currency',
                                        currency: this.props.cartContents[0].variant.currency
                                    })}
                                </div>
                            </div>
                        </div>
                        <div style={{textAlign: "center"}}>
                            <button onClick={() => {this.props.clearCart()}}>Empty Cart</button><button onClick={() => {this.onCheckout()}}>Checkout</button>
                        </div>
                    </div> : 
                    <div>
                        <p>Cart is empty</p>
                    </div>
                }
            </div>
        )
    }
}

export default connect(Cart)
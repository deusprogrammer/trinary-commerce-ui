import React from 'react';
import {Link} from 'react-router-dom';

import CartHelper from '../utils/CartHelper';

export default class Cart extends React.Component {
    state = {
        products: []
    }

    componentDidMount() {
        this.setState({products: CartHelper.getCart()})
    }

    render() {
        return (
            <div style={{width: "50%", margin: "auto"}}>
                <h3>Cart</h3>
                { this.state.products ?
                    <div style={{display: "table"}} className="cart-product">
                        {this.state.products.map(product => {
                            return (
                                <div style={{display: "table-row"}}>
                                    <div style={{display: "table-cell", verticalAlign: "middle", paddingRight: "10px"}}>
                                        <img style={{width: "100px", height: "100px", objectFit: "contain"}} src={product.imageHref} />
                                    </div>
                                    <div style={{display: "table-cell", verticalAlign: "middle", paddingRight: "10px"}}>
                                        <Link to={`${process.env.PUBLIC_URL}/products/${product.id}`}>{product.name}</Link>
                                    </div>
                                    <div style={{display: "table-cell", verticalAlign: "middle"}}>
                                        <button onClick={() => {CartHelper.removeFromCart(product)}}>Remove</button>
                                    </div>
                                </div>
                            )
                        })}
                    </div> : ""
                }
            </div>
        )
    }
}
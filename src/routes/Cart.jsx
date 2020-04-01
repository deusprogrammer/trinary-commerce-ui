import React from 'react';
import {Link} from 'react-router-dom';

import connect from '../utils/ReduxHelper';

class Cart extends React.Component {
    render() {
        return (
            <div>
                <h3>Cart</h3>
                {this.props.cartContents && this.props.cartContents.length > 0 ?
                    <div>
                        <div style={{display: "table"}} className="cart-product">
                            {this.props.cartContents.map(product => {
                                return (
                                    <div style={{display: "table-row"}}>
                                        <div style={{display: "table-cell", verticalAlign: "middle", paddingRight: "10px"}}>
                                            <img alt="product" style={{width: "100px", height: "100px", objectFit: "contain"}} src={product.imageHref} />
                                        </div>
                                        <div style={{display: "table-cell", verticalAlign: "middle", paddingRight: "10px"}}>
                                            <Link to={`${process.env.PUBLIC_URL}/products/${product.id}`}>{product.name}</Link>
                                        </div>
                                        <div style={{display: "table-cell", verticalAlign: "middle"}}>
                                            <button onClick={() => {this.props.removeFromCart(product)}}>Remove</button>
                                        </div>
                                    </div>
                                )
                            })}
                        </div>
                        <div style={{textAlign: "center"}}>
                            <button onClick={() => {this.props.clearCart()}}>Empty Cart</button><button>Checkout</button>
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
import React from 'react';
import {Link} from 'react-router-dom';
import connect from '../utils/ReduxHelper';
import { FaTimes, FaCarSide } from 'react-icons/fa';
import { MdRemoveShoppingCart } from "react-icons/md";


class Cart extends React.Component {
    render() {
        return (
            <div>
                <h3>Shopping Cart</h3>
                {this.props.cartContents && this.props.cartContents.length > 0 ?
                    <div>
                        <div className="row" style={{paddingBottom:"0.75em"}}>
                           <div className="col-md-8"></div>                           
                                <div className="col align-middle text-right">                            
                                        <button className="btn btn-primary" style={{marginRight:"1em"}} onClick={() => {this.props.clearCart()}}>
                                            <MdRemoveShoppingCart/> Empty Cart
                                        </button>

                                        <button className="btn btn-primary">
                                            <FaCarSide/> Checkout
                                        </button>
                            </div>
                        </div>
                            {this.props.cartContents.map(product => {
                                return (
                                    <div className="row" style={{ paddingBottom:"1em"}}>
                                        <div className="col-md-2">
                                            <img alt="product" style={{width: "100px", height: "100px", objectFit: "contain"}} src={product.imageHref} />
                                        </div>
                                        <div className="col-md-8 align-middle" style={{verticalAlign:"middle"}}>
                                            <Link to={`${process.env.PUBLIC_URL}/products/${product.id}`}>{product.name}</Link>
                                        </div>
                                        <div className="col-md align-middle text-right">
                                            <button className="btn btn-danger" onClick={() => {this.props.removeFromCart(product)}}><FaTimes/> Remove</button>
                                        </div>
                                    </div>
                                )
                            })}
                        
                    </div> : 
                    <div className="col align-middle">
                        <p>Cart is empty</p>
                    </div>
                }
            </div>
        )
    }
}

export default connect(Cart)
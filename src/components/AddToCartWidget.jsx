import React from 'react';
import { toast  } from 'react-toastify'

import connect from '../utils/ReduxHelper';
import 'react-toastify/dist/ReactToastify.css';

class AddToCartWidget extends React.Component  {
    state = {
        variantChosenIndex: 0,
        quantity: 1
    }

    onVariationChange(variantChosenIndex) {
        this.setState({variantChosenIndex});
    }

    onQuantityChange(quantity) {
        this.setState({quantity});
    }

    notify = (product, quantity) => toast(`Added ${product.name} X ${quantity} to cart`, {type: "info"});

    render() {
        let variant = this.props.product.variations[this.state.variantChosenIndex];

        return (
            <div className="product-price">
                { this.props.product.variations.length > 1 ?
                    <span style={{marginRight: "10px"}}>
                        <strong>Variation: </strong>
                        <select 
                            value={this.state.variantChosenIndex}
                            onChange={(e) => {this.onVariationChange(e.target.value)}}>
                            { this.props.product.variations.map((variation, index) => {
                                return <option key={variation.id} value={index}>{variation.name}</option>
                            })}
                        </select>
                    </span> : null
                }
                <span style={{marginRight: "10px"}}>
                    <strong>Quantity: </strong>
                    <input style={{width: "50px"}} type="number" value={this.state.quantity} onChange={(e) => {this.onQuantityChange(e.target.value)}}></input>
                </span>
                <span style={{marginRight: "10px"}}>
                    <strong>Price: </strong> {
                        Number(variant.price)
                            .toLocaleString('en-US',
                            {
                                style: 'currency',
                                currency: variant.currency
                            })
                    }
                </span>
                <button className="btn btn-primary" 
                    onClick={(e) => {
                        this.notify(this.props.product, this.state.quantity);
                        this.setState({quantity: 1, variantChosenIndex: 0})
                        this.props.addToCart(this.props.product, this.props.product.variations[this.state.variantChosenIndex], this.state.quantity);
                    }}>
                    Add to Cart
                </button>
            </div>
        );
    }
}

export default connect(AddToCartWidget);
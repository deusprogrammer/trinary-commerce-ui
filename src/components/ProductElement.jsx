import React from 'react';

import {Link} from 'react-router-dom';

import { useToasts } from 'react-toast-notifications'

import connect from '../utils/ReduxHelper';
import { FaCartPlus } from 'react-icons/fa';

let ProductElement = (props) => {
    let component = null;
    const {addToast} = useToasts()

    if (props.product) {
        component = (
            <div className="product-element row">
                <div className="product-display">
                    <div className="product-image-section">
                        <Link to={`${process.env.PUBLIC_URL}/products/${props.product.id}`}>
                        <img alt="product" className="product-image" src={props.product.imageHref} />
                        </Link>
                    </div>
                </div>
                <div className="product-info col">
                    <div className="product-name">
                        <strong>
                            <Link to={`${process.env.PUBLIC_URL}/products/${props.product.id}`}>
                                {props.product.name}
                            </Link>
                        </strong>
                    </div>
                    {/* <div className="product-description overflow-auto">
                        <div style={{display: "table-cell", verticalAlign: "middle"}}>
                            {props.product.description.split("/\r?\n/").map((paragraph, index) => {
                                return <p key={`p-${index}`}>{paragraph}</p>
                            })}
                        </div>
                    </div> */}
                    <div></div>
                    <div className="product-price">
                        <span style={{marginRight: "10px"}}>
                           <strong>Price : </strong> {
                                Number(props.product.variations[0].price)
                                    .toLocaleString('en-US',
                                    {
                                        style: 'currency',
                                        currency: props.product.variations[0].currency
                                    })
                            }
                        </span>
                        <button className="btn btn-primary" 
                            onClick={(e) => {
                                addToast(`Added ${props.product.name} to cart`, {
                                    appearance: 'info',
                                    autoDismiss: true})
                                props.addToCart(props.product);
                                e.stopPropagation();
                            }}>
                            <FaCartPlus size='1.5em'/> Add to Cart
                        </button>
                    </div>
                </div>
            </div>
        ) 
    }

    return (
        <div>
            {component}
        </div>
    )
}

export default connect(ProductElement)
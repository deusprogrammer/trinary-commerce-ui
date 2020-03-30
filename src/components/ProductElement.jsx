import React from 'react';

import {Link} from 'react-router-dom';

import connect from '../utils/ReduxHelper';

let ProductElement = (props) => {
    let component = null;

    if (props.product) {
        component = (
            <div className="product-element row">
                <div className="product-display">
                    <span className="product-image-section">
                        <Link to={`${process.env.PUBLIC_URL}/products/${props.product.id}`}>
                        <img className="product-image"src={props.product.imageHref} />
                        </Link>
                    </span>
                </div>
                <div className="product-info col">
                    <div className="product-name">
                        <strong>{props.product.name}</strong>
                    </div>
                    <div className="product-description overflow-auto">
                        <div style={{display: "table-cell", verticalAlign: "middle"}}>
                            {props.product.description.split("/\r?\n/").map((paragraph, index) => {
                                return <p key={`p-${index}`}>{paragraph}</p>
                            })}
                        </div>
                    </div>
                    <div className="product-price">
                        <span style={{marginRight: "10px"}}>
                            {
                                Number(props.product.variations[0].price)
                                    .toLocaleString('en-US', { style: 'currency', currency: props.product.variations[0].currency })
                            }
                        </span>
                        <button 
                            onClick={(e) => {
                                props.addToCart(props.product);
                                e.stopPropagation();
                            }}>
                            Add to Cart
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
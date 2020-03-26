import React from 'react';

import {Link} from 'react-router-dom';

export default (props) => {
    let component = null;

    if (props.product) {
        component = (
            <div className="product-element">
                <div className="product-name">
                    <strong>{props.product.name}</strong>
                </div>
                <Link to={`${process.env.PUBLIC_URL}/products/${props.product.id}`}>
                    <span className="product-image-section">
                        <img className="product-image"src={props.product.imageHref} />
                    </span>
                </Link>
                <div className="product-price">
                    <span style={{marginRight: "10px"}}>
                        {
                            Number(props.product.variations[0].price)
                                .toLocaleString('en-US', { style: 'currency', currency: props.product.variations[0].currency })
                        }
                    </span>
                    <button 
                        onClick={(e) => {
                            props.onAddToCart(props.product);
                            e.stopPropagation();
                        }}>
                        Add to Cart
                    </button>
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
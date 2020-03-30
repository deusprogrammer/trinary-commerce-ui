import React from 'react';

import connect from '../utils/ReduxHelper';

let ProductDetails = (props) => {
    let component = null;

    if (props.product) {
        component = (
            <div className="product-element-full">
                <div className="product-image-section-full">
                    <img className="product-image-full"src={props.product.imageHref} />
                </div>
                <div>
                    <p>{props.product.description}</p>
                </div>
                <div className="product-price-full">
                    <div style={{marginRight: "10px"}}>
                        {
                            Number(props.product.variations[0].price)
                                .toLocaleString('en-US', { style: 'currency', currency: props.product.variations[0].currency })
                        }
                    </div>
                    <button 
                        onClick={(e) => {
                            props.addToCart(props.product);
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

export default connect(ProductDetails)
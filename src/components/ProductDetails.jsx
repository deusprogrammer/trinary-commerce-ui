import React from 'react';

export default (props) => {
    let component = null;

    if (props.product) {
        component = (
            <div className="product-element-full">
                <span className="product-image-section-full">
                    <img className="product-image"src={props.product.imageHref} />
                </span>
                <div>
                    <p>{props.product.description}</p>
                </div>
                <div className="product-price-full">
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
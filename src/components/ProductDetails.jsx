import React from 'react';

import connect from '../utils/ReduxHelper';

let ProductDetails = (props) => {
    let component = null;

    if (props.product) {
        component = (
            <div className="product-element-full">
                <div className="row" style={{paddingBottom: "20px"}}>
                    <div className="col-md-8">
                        <img className="w-50"src={props.product.imageHref} />
                    </div>

                    <div className="col-md-4 product-price-full">
                        <div className="row">
                            <div className="col text-left" style={{paddingBottom: "10px"}}>
                                Price : {
                                        Number(props.product.variations[0].price)
                                            .toLocaleString('en-US', { style: 'currency', currency: props.product.variations[0].currency })
                                    }
                            </div>
                        </div>
                        <div className="row">
                            <div className="col text-left">
                                <button className="btn btn-primary"
                                    onClick={(e) => {
                                        props.addToCart(props.product);
                                        e.stopPropagation();
                                    }}>
                                    Add to Cart
                                </button>
                            </div>
                        </div>
                        
                    </div>
                </div>
                <div className="text-left padding-top-20">
                    <p>{props.product.description}</p>
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
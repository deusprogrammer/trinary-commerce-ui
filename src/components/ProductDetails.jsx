import React from 'react';

import connect from '../utils/ReduxHelper';

import AddToCartWidget from '../components/AddToCartWidget';

let ProductDetails = (props) => {
    let component = null;

    if (props.product) {
        component = (
            <div className="product-element-full">
                <div className="row" style={{paddingBottom: "20px"}}>
                    <div className="col-md-4">
                        <img alt="product" className="w-50" src={props.product.imageHref} />
                    </div>

                    <div className="col-md-8">
                        <AddToCartWidget product={props.product} />
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
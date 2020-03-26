import React from 'react';

import ProductElement from './ProductElement';

// TODO Add filters to this element
export default (props) => {
    let component = null;

    if (props.products) {
        component = (
            <div>
                { props.products.map(product => {
                    return (
                        <ProductElement product={product} onAddToCart={(product) => props.onAddToCart(product)} />
                    )
                })}
                <div style={{clear: "both"}}></div>
            </div>
        ) 
    }

    return (
        <div>
            {component}
        </div>
    )
}
import React from 'react';

import ProductElement from './ProductElement';
import Paginator from './Paginator';

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
                <Paginator page={props.page} onPageChange={(page) => {props.onPageChange(page)}} />
            </div>
        ) 
    }

    return (
        <div>
            {component}
        </div>
    )
}
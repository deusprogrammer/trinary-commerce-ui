import React from 'react';

import ProductElement from './ProductElement';
import Paginator from './Paginator';

// TODO Add filters to this element
export default (props) => {
    let component = null;

    if (props.products) {
        component = (
            <div>
                <div className="container">
                    { props.products.map((product, index) => {
                        return (
                            <ProductElement key={`product-${index}-${product.id}`} product={product} />
                        )
                    })}
                </div>
                <Paginator 
                    page={props.page} 
                    hasNext={props.hasNext}
                    onPageChange={(page) => {props.onPageChange(page)}} />
            </div>
        ) 
    }

    return (
        <div>
            {component}
        </div>
    )
}
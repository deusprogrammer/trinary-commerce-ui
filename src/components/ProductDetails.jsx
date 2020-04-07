import React from 'react';
import connect from '../utils/ReduxHelper';
import { useToasts } from 'react-toast-notifications'
import { FaCartPlus } from 'react-icons/fa';

let ProductDetails = (props) => {
    const {addToast} = useToasts()

    let component = null;

    if (props.product) {
        component = (
            <div className="product-element-full">
                <div className="row" style={{paddingBottom: "20px"}}>
                    <div className="col-md-8">
                        <img alt="product" className="w-50" src={props.product.imageHref} />
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
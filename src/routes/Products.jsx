import React from 'react';
import axios from 'axios';

import ProductList from '../components/ProductList';

import config from '../utils/config';

export default class Products extends React.Component {
    state = {
        products: null,
        error: null
    }

    componentDidMount() {
        axios.get(`${config.baseUrl}/products?page=0`)
        .then(response => {
            this.setState({products: response.data})
        })
        .catch(error => {
            this.setState({error: "Something went wrong"});
        })
    }

    render() {
        return (
            <div>
                <h3>Products</h3>
                { this.state.error ?
                    <p>{this.state.error}</p>
                    :
                    <ProductList 
                        products={this.state.products} 
                        onAddToCart={(product) => { 
                            alert(`Added ${product.name} to cart`)
                        }} />
                }
            </div>
        )
    }
}
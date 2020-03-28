import React from 'react';
import axios from 'axios';

import config from '../utils/config';
import CartHelper from '../utils/CartHelper';
import ProductList from '../components/ProductList';

export default class Categories extends React.Component {
    state = {
        page: 0,
        category: null,
        products: null,
        error: null
    }

    componentDidMount() {
        axios.get(`${config.baseUrl}/categories/${this.props.match.params.id}`)
            .then(categoryResponse => {
                this.setState({category: categoryResponse.data.name})
                this.getPage(0)
            }).catch(error => {
                this.setState({error})
            })
    }

    getPage = (page) => {
        console.log("GET PAGE: " + page)

        if (page < 0) {
            return
        }

        axios.get(`${config.baseUrl}/categories/${this.props.match.params.id}/products?page=${page}&pageSize=10`)
            .then(productResponse => {
                this.setState({products: productResponse.data, page})
            })
            .catch(error => {
                this.setState({error})
            })
    }

    render() {
        return (
            <div>
                <h3>{this.state.category ? this.state.category.name : ""}</h3>
                { this.state.error ?
                    <p>{this.state.error}</p>
                    :
                    <ProductList 
                        products={this.state.products}
                        page={this.state.page}
                        onAddToCart={(product) => {
                            CartHelper.addToCart(product)
                        }}
                        onPageChange={(page) => {
                            this.setState({products: null, page})
                            this.getPage(page)
                        }} 
                        />
                }
            </div>
        )
    }
}
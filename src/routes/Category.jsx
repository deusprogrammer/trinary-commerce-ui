import React from 'react';
import axios from 'axios';

import config from '../utils/config';
import ProductList from '../components/ProductList';

export default class Category extends React.Component {
    state = {
        category: null,
        products: null,
        hasNext: false,
        error: null
    }

    componentDidMount() {
        axios.get(`${config.baseUrl}/categories/${this.props.match.params.id}`)
            .then(categoryResponse => {
                this.setState({category: categoryResponse.data.name})
                this.getPage(parseInt(this.props.match.params.page))
            }).catch(error => {
                this.setState({error})
            })
    }

    componentWillReceiveProps() {
        axios.get(`${config.baseUrl}/categories/${this.props.match.params.id}`)
            .then(categoryResponse => {
                this.setState({category: categoryResponse.data.name})
                this.getPage(parseInt(this.props.match.params.page))
            }).catch(error => {
                this.setState({error})
            })
    }

    getPage = (page) => {
        if (page < 0) {
            return
        }

        axios.get(`${config.baseUrl}/categories/${this.props.match.params.id}/products?page=${page - 1}&pageSize=10`)
            .then(productResponse => {
                this.setState({products: productResponse.data, hasNext: productResponse.headers['X-Next-Page'] !== null})
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
                        page={parseInt(this.props.match.params.page)}
                        hasNext={this.state.hasNext}
                        onPageChange={(page) => {
                            this.setState({products: null}, () => {
                                this.props.history.push(`${process.env.PUBLIC_URL}/categories/${this.props.match.params.id}/${page}`)
                            })
                        }} 
                        />
                }
            </div>
        )
    }
}
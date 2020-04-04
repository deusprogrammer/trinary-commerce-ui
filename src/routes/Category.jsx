import React from 'react';
import axios from 'axios';
import ClipLoader from 'react-spinners/ClipLoader';

import config from '../utils/config';
import ProductList from '../components/ProductList';

export default class Category extends React.Component {
    state = {
        category: null,
        loading: true,
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

        this.setState({loading: true, products: null})
        axios.get(`${config.baseUrl}/categories/${this.props.match.params.id}/products?page=${page - 1}&pageSize=10`)
            .then(productResponse => {
                console.log("HEADERS: " + JSON.stringify(productResponse.headers))
                let hasNext = false
                if (productResponse.headers['x-next-page']) {
                    hasNext = true
                }
                this.setState({products: productResponse.data, hasNext, loading: false})
            })
            .catch(error => {
                this.setState({error, loading: false})
            })
    }

    render() {
        return (
            <div>
                <ClipLoader 
                    size="300px"
                    loading={this.state.loading}
                />
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
import React from 'react';
import axios from 'axios';

import ProductList from '../components/ProductList'

import config from '../utils/config'

class ResultDisplay extends React.Component {
    state = {
        products: null,
        hasNext: false,
        error: null
    }

    componentDidMount() {
        this.getPage(parseInt(this.props.match.params.page))
    }

    componentWillReceiveProps() {
        this.getPage(parseInt(this.props.match.params.page))
    }

    getPage = (page) => {
        if (page < 0) {
            return
        }

        axios.get(`${config.baseUrl}/products?page=${page - 1}&pageSize=10&search=${atob(this.props.match.params.search)}`)
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
                <h3>Search Results</h3>
                { this.state.error ?
                    <p>{this.state.error}</p>
                    :
                    <ProductList 
                        products={this.state.products}
                        page={parseInt(this.props.match.params.page)}
                        hasNext={this.state.hasNext}
                        onPageChange={(page) => {
                            this.setState({products: null}, () => {
                                this.props.history.push(`${process.env.PUBLIC_URL}/results/${this.props.match.params.search}/${page}`)
                            })
                        }} 
                        />
                }
            </div>
        )
    }
}

export default ResultDisplay
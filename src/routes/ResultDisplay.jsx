import React from 'react';
import axios from 'axios';
import ClipLoader from 'react-spinners/ClipLoader';

import ProductList from '../components/ProductList';

import config from '../utils/config';

class ResultDisplay extends React.Component {
    state = {
        products: null,
        hasNext: false,
        error: null,
        loading: true
    }

    componentDidMount() {
        this.getPage(this.props.match.params.search, parseInt(this.props.match.params.page))
    }

    componentWillReceiveProps(newProps) {
        if (newProps.match.params.id === this.props.match.params.id && newProps.match.params.page === this.props.match.params.id) {
            return
        }

        this.getPage(newProps.match.params.search, parseInt(newProps.match.params.page))
    }

    getPage = (search, page) => {
        if (page < 0) {
            return
        }

        this.setState({loading: true, products: null})
        axios.get(`${config.baseUrl}/products?page=${page - 1}&pageSize=10&search=${atob(search)}`)
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
                <h3>Search Results</h3>
                <ClipLoader 
                    size="300px"
                    loading={this.state.loading}
                />
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
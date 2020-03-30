import React from 'react';
import axios from 'axios';

import ProductList from '../components/ProductList'

import config from '../utils/config'

class ResultDisplay extends React.Component {
    state = {
        page: 0,
        products: null
    }

    componentDidMount() {
        console.log("SEARCH: " + atob(this.props.match.params.search))
        this.getPage(0)
    }

    componentWillReceiveProps() {
        this.getPage(0)
    }

    getPage = (page) => {
        if (page < 0) {
            return
        }

        axios.get(`${config.baseUrl}/products?page=${page}&pageSize=10&search=${atob(this.props.match.params.search)}`)
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
                <ProductList 
                    products={this.state.products} 
                    onPageChange={(page) => {this.getPage(page)}} 
                    page={this.state.page}
                />
            </div>
        )
    }
}

export default ResultDisplay
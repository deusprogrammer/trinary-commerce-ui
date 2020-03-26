import React from 'react';
import axios from 'axios';

import ProductDetails from '../components/ProductDetails';

import config from '../utils/config';

export default class Products extends React.Component {
    state = {
        product: null,
        error: null
    }

    componentDidMount() {
        axios.get(`${config.baseUrl}/products/${this.props.match.params.id}`)
        .then(response => {
            this.setState({product: response.data})
        })
        .catch(error => {
            this.setState({error: "Something went wrong"});
        })
    }

    render() {
        return (
            <div>
                <h3>{this.state.product ? this.state.product.name : ""}</h3>
                { this.state.error ?
                    <p>{this.state.error}</p>
                    :
                    <ProductDetails product={this.state.product} />
                }
            </div>
        )
    }
}
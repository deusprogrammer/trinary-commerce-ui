import React from 'react';
import axios from 'axios';

import config from '../utils/config';
import CategoryList from '../components/CategoryList';

export default class Categories extends React.Component {
    state = {
        categories: null,
        error: null
    }

    componentDidMount() {
        axios.get(`${config.baseUrl}/categories?page=0`)
            .then(response => {
                this.setState({categories: response.data})
            })
            .catch(error => {
                this.setState({error})
            })
    }

    render() {
        return (
            <div>
                <h3>Categories</h3>
                { this.state.error ?
                    <p>{this.state.error}</p>
                    :
                    <CategoryList categories={this.state.categories} />
                }
            </div>
        )
    }
}
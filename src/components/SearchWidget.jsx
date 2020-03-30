import React from 'react';
import {withRouter} from 'react-router';

class SearchWidget extends React.Component {
    state = {
        searchString: null
    }

    searchBarChange = (searchString) => {
        this.setState({searchString})
    }

    search = () => {
        let base64Search = btoa(this.state.searchString.replace(/\s+/g, ","))
        this.props.history.push(`${process.env.PUBLIC_URL}/results/${base64Search}/1`)
    }

    render() {
        return (
            <div>
                <input onChange={(e) => this.searchBarChange(e.target.value)} type="text" placeholder="Search" />
                <button onClick={() => {this.search()}}>Search</button>
            </div>
        )
    }
}

export default withRouter(SearchWidget)
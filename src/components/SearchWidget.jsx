import React from 'react';

export default class SearchWidget extends React.Component {
    render() {
        return (
            <div>
                <input type="text" placeholder="Search" /><button>Search</button>
            </div>
        )
    }
}
import React from 'react';

import {Link} from 'react-router-dom';

export default (props) => {
    return (
        <div>
            { props.categories ?
                <ul className="category-list">
                    {props.categories.map((category, index) => {
                        return (
                            <li key={`category-${index}-${category.id}`} className="category-list-item"><Link to={`${process.env.PUBLIC_URL}/categories/${category.id}`}>{category.name}</Link></li>
                        )
                    })}
                </ul> : null
            }
        </div>
    )
}
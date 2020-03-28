import React from 'react';

import {Link} from 'react-router-dom';

export default (props) => {
    return (
        <span>
            <Link to={`${process.env.PUBLIC_URL}/cart`}>Cart {props.contents.length > 0 ? `(${props.contents.length})` : "empty"}</Link>
        </span>
    )
}
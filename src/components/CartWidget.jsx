import React from 'react';

import {Link} from 'react-router-dom';
import { FaShoppingCart } from 'react-icons/fa';

export default (props) => {
    return (
        <span>
            <Link to={`${process.env.PUBLIC_URL}/cart`}>
                <FaShoppingCart size='1.5em'/> {props.contents.length > 0 ? `(${props.contents.length})` : "empty"}</Link>
        </span>
    )
}
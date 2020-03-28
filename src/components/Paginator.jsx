import React from 'react';

export default (props) => {
    return (
        <div>
            <button onClick={() => {props.onPageChange(props.page - 1)}}>Prev</button>{props.page}<button onClick={() => {props.onPageChange(props.page + 1)}}>Next</button>
        </div>
    )
}
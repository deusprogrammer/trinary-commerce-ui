import React from 'react';

export default (props) => {
    return (
        <div>
            <button 
                style={{marginRight: "5px"}}
                onClick={() => {props.onPageChange(props.page - 1)}}>
                    Prev
            </button>
                {props.page + 1}
            <button 
                style={{marginLeft: "5px"}}
                onClick={() => {props.onPageChange(props.page + 1)}}>
                    Next
            </button>
        </div>
    )
}
import React from 'react';

export default (props) => {
    return (
        <div style={{textAlign: "center"}}>
            { props.page > 1 ?
            <button 
                style={{marginRight: "5px"}}
                onClick={() => {props.onPageChange(props.page - 1)}}>
                    Prev
            </button> : null
            }
                {props.page}
            { props.hasNext ?
            <button 
                style={{marginLeft: "5px"}}
                onClick={() => {props.onPageChange(props.page + 1)}}>
                    Next
            </button> : null
            }
        </div>
    )
}
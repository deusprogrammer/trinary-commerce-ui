import React from 'react';
export default (props) => {
    return (
        <div className="row justify-content-center">
            <div className="col-4">            
                <ul className="pagination">
                    { props.page > 1 ?
                    <li className="page-item"> 
                        <span className="page-link"                
                            onClick={() => {props.onPageChange(props.page - 1)}}>
                            Previous
                        </span>
                    </li> : null
                    }
                    <li className="page-item">
                        <span className="page-link">{props.page}</span>
                    </li>
                    <li className="page-item">{ props.hasNext ?
                        <span className="page-link"
                            onClick={() => {props.onPageChange(props.page + 1)}}>
                                Next
                        </span> : null
                    }</li>
                </ul>
            </div>
        </div>
    )
}
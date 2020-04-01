import React from 'react';
import { Link } from 'react-router-dom';

export default (props) => {
    return (
        <div className="row justify-content-center">
            <div className="col-4">            
                <ul className="pagination">
                    { props.page > 1 ?
                    <li className="page-item"> 
                        <Link className="page-link"                
                            onClick={() => {props.onPageChange(props.page - 1)}}>
                            Previous
                        </Link>
                    </li> : null
                    }
                    <li className="page-item">
                        <span className="page-link">{props.page}</span>
                    </li>
                    <li className="page-item">{ props.hasNext ?
                        <Link className="page-link"
                            onClick={() => {props.onPageChange(props.page + 1)}}>
                                Next
                        </Link> : null
                    }</li>
                </ul>
            </div>
        </div>
    )
}
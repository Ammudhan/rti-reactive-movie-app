import React from 'react'
import icon from '../../assets/images/not-found.png'

const NotFound = () => {
    return (
        <span className="row">
            <span className="col-12 d-flex align-items-center justify-content-center">
                <img className="img-fluid" src={icon} alt={"Page Not Found Image"}/>
            </span>
        </span>
    );
};
export default NotFound
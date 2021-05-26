import React from 'react';
import './Circle.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart, faStar } from "@fortawesome/free-regular-svg-icons";

const Circle = () => {
    return (
        <div className="flex-box mt-5 pt-5">
        <div className='container mt-5 text-center mt-5'>
            <div className="row mt-5">
               
                <div className="col-lg-3 need-customize mt-4">
                    <div className="border-example extra-border-color">
                        <div className="position-changing">
                        <span className='color-need'><FontAwesomeIcon icon={faHeart} /></span>
                        <h2>0</h2>
                        <p>Label</p>
                        </div>
                    </div>
                </div>
                <div className="col-lg-3 mt-4">
                    <div className="border-example">
                    <div className="position-changing">
                    <span ><FontAwesomeIcon icon={faStar} /></span>
                    <h2>0</h2>
                        <p>Label</p>
                    </div>
                    </div>
                </div>
                <div className="col-lg-3 mt-4">
                    <div className="border-example">
                    <div className="position-changing">
                    <span ><FontAwesomeIcon icon={faStar} /></span>
                    <h2>0</h2>
                        <p>Label</p>
                    </div>
                    </div>
                </div>
                <div className="col-lg-3 mt-4">
                    <div className="border-example">
                    <div className="position-changing">
                    <span ><FontAwesomeIcon icon={faStar} /></span>
                    <h2>0</h2>
                        <p>Label</p>
                    </div>
                    </div>
                </div>
               
                </div>
            </div>
            
        </div>
    );
};

export default Circle;
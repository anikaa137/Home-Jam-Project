import React from 'react';
import './Review.css'
import { faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import flagOne from '../../img/1200px-Flag_of_the_United_States.png'
import flagTwo from '../../img/flag.png'
import man from '../../img/man.png'
import man2 from '../../img/man2.png'
import man3 from '../../img/man3.png'

const Review = () => {
    return (
        <div className='review'>
            <div className="container">
                <div className="row">
                <div className="col-lg-12">
                      <div className="review-caption">
                      <div className="review-left-caption">
                          <h1>Reviews</h1>
                      </div>
                      <div className="review-right-caption">
                          <div className="page">
                        <span>1 <span className='opacity-need'>/ 12</span></span>
                          </div>
                          <div className="arrow-location">
                          <ul>
                              
                              <li> <span className='space-between-them'><FontAwesomeIcon icon={faArrowLeft} /></span>
                        <span className='space-between-them'><FontAwesomeIcon icon={faArrowRight} /></span></li>
                          </ul>
                          </div>
                      </div>
                  </div>
                </div>
                <div className="row py-5">
                    <div className="col-lg-4">
                        <div className="overly-card-outside">
                            <div className="main-card mt-3 mt-4">
                                <div className="people-img">
                                  <img src={man} alt="" />
                                </div>
                                <div className="user-country-flag-and-user-introduce d-flex mt-3">
                                  
                                    <div className="user-name">
                                       <h6>Hellen Jummy</h6> 
                                   <div className="flex-items">
                                   <div className="img">
                                   <img src={flagOne} alt="" />
                                   </div>
                                   <div className="location">
                                       <span>PALO ALTO CA</span>
                                   </div>
                                   </div>

                                    </div>
                                </div>
                                <div className="post">
                                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Assumenda tempore,<br /> nihil magnam voluptatem numquam consequatur .</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4">
                        <div className="overly-card-outside">
                            <div className="main-card mt-3 mt-4">
                                <div className="people-img">
                                  <img src={man2} alt="" />
                                </div>
                                <div className="user-country-flag-and-user-introduce d-flex mt-3">
                                  
                                    <div className="user-name">
                                       <h6>Isaac Oluwatemilorun</h6> 
                                   <div className="flex-items">
                                   <div className="img">
                                   <img src={flagTwo} alt="" />
                                   </div>
                                   <div className="location">
                                       <span>PALO ALTO CA</span>
                                   </div>
                                   </div>

                                    </div>
                                </div>
                                <div className="post">
                                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Assumenda tempore,<br /> nihil magnam voluptatem numquam consequatur .</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4">
                        <div className="overly-card-outside">
                            <div className="main-card mt-3 mt-4">
                                <div className="people-img">
                                  <img src={man3} alt="" />
                                </div>
                                <div className="user-country-flag-and-user-introduce d-flex mt-3">
                                  
                                    <div className="user-name">
                                       <h6>Hellen Jummy</h6> 
                                   <div className="flex-items">
                                   <div className="img">
                                   <img src={flagOne} alt="" />
                                   </div>
                                   <div className="location">
                                       <span>PALO ALTO CA</span>
                                   </div>
                                   </div>

                                    </div>
                                </div>
                                <div className="post">
                                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Assumenda tempore,<br /> nihil magnam voluptatem numquam consequatur .</p>
                                </div>
                            </div>
                        </div>
                    </div>




                </div>
                </div>
            </div>
        </div>
    );
};

export default Review;
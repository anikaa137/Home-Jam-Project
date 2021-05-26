import React from 'react';
import './ShowPeople.css'
import image1 from '../../img/123.png'
import image2 from '../../img/2.png'
import image3 from '../../img/3.png'
import image4 from '../../img/unnamed.png'
import { faArrowRight, faVrCardboard } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const SHowPeople = () => {
   
    return (
        <div className='card-background'>
        <div className="container">
            <div className="row">
              <div className="content-flex">
             <div className="upcoming-show">
                 <h1>Upcoming Show</h1>
             </div>
             <div className="view-all">
                 <p>View All</p>
             </div>
            </div>
            <div className="row ">
            </div>
            
                

                
            <div className="col-lg-3 mt-5">
            
                    <div className="people-card">
                    <div class="card" >
  <img src={image1} class="card-img-top" alt="#"/>
  <div class="card-body">
      <span className='title'>Flock</span>
    <h5 class="card-title">Benny Deyal</h5>
    <div className="need-space">
        <div className="more-info">
            <a href="">More Info <span className='right-arrow'><FontAwesomeIcon icon={faArrowRight} /></span></a> 
        </div>
        <div className="sticker">
            <span><FontAwesomeIcon icon={faVrCardboard} /></span>
        </div>
        </div>
 
  </div>
</div>
                    </div>
                </div>
            <div className="col-lg-3 mt-5">
            
                    <div className="people-card">
                    <div class="card" >
  <img src={image2} class="card-img-top" alt="#"/>
  <div class="card-body">
      <span className='title'>Bollywood</span>
    <h5 class="card-title">Vijay Yesudas</h5>
    <div className="need-space">
        <div className="more-info">
            <a href="">More Info <span className='right-arrow'><FontAwesomeIcon icon={faArrowRight} /></span></a> 
        </div>
        <div className="sticker">
            <span><FontAwesomeIcon icon={faVrCardboard} /></span>
        </div>
    </div>
  </div>
</div>
                    </div>
                </div>
            <div className="col-lg-3 mt-5">
            
                    <div className="people-card">
                    <div class="card" >
  <img src={image3} class="card-img-top" alt="#"/>
  <div class="card-body">
      <span className='title'>Flock</span>
    <h5 class="card-title">Andrea Jeremiah</h5>
    <div className="need-space">
        <div className="more-info">
            <a href="">More Info <span className='right-arrow'><FontAwesomeIcon icon={faArrowRight} /></span></a> 
        </div>
        <div className="sticker">
            <span><FontAwesomeIcon icon={faVrCardboard} /></span>
        </div>
    </div>
  </div>
</div>
                    </div>
                </div>
            <div className="col-lg-3 mt-5">
            
                    <div className="people-card">
                    <div class="card" >
  <img src={image4} class="card-img-top" alt="#"/>
  <div class="card-body">
      <span className='title'>Flock</span>
    <h5 class="card-title">Shilpa Rao</h5>
    <div className="need-space">
        <div className="more-info">
            <a href="">More Info <span className='right-arrow'><FontAwesomeIcon icon={faArrowRight} /></span></a> 
        </div>
        <div className="sticker">
            <span><FontAwesomeIcon icon={faVrCardboard} /></span>
        </div>
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

export default SHowPeople;
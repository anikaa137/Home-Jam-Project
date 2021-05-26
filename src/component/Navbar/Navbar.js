import React, { useContext, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch, faShoppingBag } from '@fortawesome/free-solid-svg-icons';
import img from '../../img/logo.png'


const Navbar = () => {
    
   
    return (
        
<nav class='navbar navbar-expand-lg navbar-light sticky '>
  <div class="container">
    <a class="navbar-brand" href="#">
        <span className='mr-4'>
          <img src={img} alt="" />
        </span>
        
    </a>
  
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
  
    <div class="collapse navbar-collapse" id="navbarNav">
      
      <ul class="navbar-nav navbar-customize navItem">
         <li>
             <Link to='/home'><span><FontAwesomeIcon icon={faSearch} /></span>Search</Link>
         </li>
         <li>
             <Link to='/about'>Help</Link>
         </li>
         <li> 
             <Link to='/dashboard'>Account</Link>  
         </li>
         <li>
             <Link to='/contact'><span><FontAwesomeIcon icon={faShoppingBag} /></span></Link>
         </li>
         
      </ul>
    </div>
  </div>
</nav>
       
    );
};

export default Navbar;
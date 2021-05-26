import React from 'react';
import Circle from '../Circle/Circle';
import Navbar from '../Navbar/Navbar';
import Post from '../Post/Post';
import Review from '../Review/Review';
import SHowPeople from '../ShowPeople/SHowPeople';
import './Header.css'

const Header = () => {
    return (
        <div>
             <section className='banner'>
              <Navbar></Navbar>
              <Post></Post>
              <Circle></Circle>
            </section>
            <SHowPeople></SHowPeople>
            <Review></Review>
        </div>
    );
};

export default Header;
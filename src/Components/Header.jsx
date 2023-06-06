import React from 'react';
import '../index.css';
import Data from '../Components/Data';
import { Link } from 'react-router-dom';

const Header = ({totalItems}) => {
  return (
    <>
            <header>
                    <Link to='/'><img src="Images/logo.webp" className='logo' /></Link>
                    <nav>
                        <a href="#">Home</a>
                        <a href="#">Products</a>
                        <a href="#">Shop</a>
                        <a href="#">Blog</a>
                        <a href="#">Contact</a>
                    </nav>

                    <div className='icons'>
                        <img src="Images/search.png" />
                        <img src="Images/user.png" />
                        <img src="Images/heart.png" />
                        <div style={{position:'relative'}}>
                          <Link to='/cart'><img src="Images/cart.png" /></Link>
                          <div style={{position:'absolute',top:'-15px', right:'-15px', background:'green', textAlign:'center', color:'white', padding:'3px 10px', borderRadius:'50%' }}>{totalItems}</div>
                        </div>
                    </div>
            </header>
    </>
  )
}

export default Header

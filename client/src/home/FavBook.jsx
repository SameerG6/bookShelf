import React from 'react'
import "../App.css";
import { Link } from "react-router-dom";
import Fav from '../assets/favoritebook.jpg';
const FavBook = () => {
  return (
    <div className='fav'>
        <div className='favimg'>
            <img src={Fav}></img>
        </div>
        <div className='favfav'>
            <h2>Find Your Favorite<span> Book Here!</span></h2>
            <Link to="/shop"><button>Explore More</button></Link>
        </div>
    </div>
  )
}

export default FavBook;
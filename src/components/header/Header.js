import React from "react";
import "./Header.css"
import {Link} from "react-router-dom"

const Header = () => {
  return(
    <div>
      <div>
        <Link to="/"><img className="header__icon" src=""/></Link>
        <Link to="/movies/popular">Popular</Link>
        <Link to="/movies/top_rated">Top Rated</Link>
        <Link to="/movies/upcoming">Upcoming</Link>
      </div>
    </div>
  )
}

export default Header
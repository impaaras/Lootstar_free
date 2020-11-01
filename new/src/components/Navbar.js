import React from 'react';
import {
    Link
  } from "react-router-dom";

function Navbar() {
    return (
        <div className="search">
        <Link to="/" className="link">
             <h2>Lootstar <span> <i className="fa fa-play-circle" aria-hidden="true"></i></span></h2>
        </Link>
         <div className="nav_bt">
           <form>
               <input type="text" placeholder="search..."/>
               <i className="fa fa-search" aria-hidden="true"></i>
           </form>
            <Link to="/login">
              <button>Login</button>
           </Link>
           <Link to="/signup">
              <button>Signup</button>
           </Link>
           </div>
        </div>
    )
}

export default Navbar;

import React from 'react';
import { ReactComponent as Logo } from '../../static/shopping-bag.svg';

const Nav = () => {
  return ( 
    <nav className="nav grid">
      <div className="col-1">
        <h3>Bin<span>Go</span> </h3>
      </div>
      <div className="col-2">
      </div>
      <div className="col-3"></div>
      <div className="col-4">
        <div className="nav-menu">
          <div className="nav-menu--item"> <a className="active" href="/home">Home</a> </div>
          <div className="nav-menu--item"> <a href="/home">Strategy</a></div>
          <div className="nav-menu--item"> <a href="/home">About</a></div>
          <div className="nav-menu--item"> <a href="/home">Clients</a></div>
          <div className="nav-menu--item"> <a href="/home">Sign up</a></div>
        </div>
      </div>
      <div className="col-5">
        <Logo className="shooping-cart" />
      </div>
    </nav>
  );
}
 
export default Nav;

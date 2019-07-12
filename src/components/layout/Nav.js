import React, { useState } from 'react';
import { ReactComponent as Logo } from '../../static/shopping-bag.svg';
import { ReactComponent as MenuButtonOpen } from '../../static/menu.svg';
import { ReactComponent as MenuButtonClose } from '../../static/close.svg';

const Nav = () => {
  const [showNav, setShowNav] = useState(false);

  const handleNav = () => {
    if(!showNav) {
      setShowNav(true)
    } else {
      setShowNav(false);
    }
  }

  return ( 
    <nav className={ !showNav ? "nav grid" : "nav grid nav-toggled"} >
      <div className="col-1">
        <h3 className="logo-text">Bin<span>Go</span> </h3>
        <button className="nav-toggle--btn">
          { !showNav && <MenuButtonOpen onClick={handleNav} />}
          { showNav && <MenuButtonClose onClick={handleNav} />}
        </button>
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

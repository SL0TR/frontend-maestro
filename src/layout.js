import React from 'react';

const Layout = ( { children } ) => 
  <div className="layout-container"> 
    <div className="main">
      { children }
    </div>
  </div>


export default Layout;
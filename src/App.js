import React from 'react';
import Layout from './layout';
import './App.scss';
import Home from './components/Home/Home.js';
import Nav from './components/layout/Nav.js';


function App() {
  return (
   <Layout>
    <Nav />
    <Home />
   </Layout>
  );
}

export default App;

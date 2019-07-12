import React from 'react';
import Layout from './layout';
import './App.scss';
import Home from './components/Home/Home.js';
import Nav from './components/layout/Nav.js';
import Footer from './components/layout/Footer';


function App() {
  return (
   <Layout>
    <Nav />
    <Home />
    <Footer />
   </Layout>
  );
}

export default App;

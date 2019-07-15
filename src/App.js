import React, { useEffect } from 'react';
import Layout from './layout';
import "animate.css/animate.min.css";
import './App.scss';
import Home from './components/Home/Home.js';
import Nav from './components/layout/Nav.js';
import Footer from './components/layout/Footer';


function App() {

  useEffect(() => {
    document.title = 'Bingo';
  })

  return (
   <Layout>
    <Nav />
    <Home />
    <Footer />
   </Layout>
  );
}

export default App;

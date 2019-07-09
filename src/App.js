import React from 'react';
import Layout from './layout';
import './App.scss';
import Home from './components/Home.js';
import Nav from './components/Nav';


function App() {
  return (
   <Layout>
    <Nav />
    <Home />
   </Layout>
  );
}

export default App;

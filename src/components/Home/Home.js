import React from 'react';
import Header from './sections/header';
import Sponsors from './sections/sponsors';
import EmptyColumn from './sections/empty-column';


const Home = () => {
  return (
    <>
      <Header />
      <Sponsors />
      <EmptyColumn />
    </>
  );
}
 
export default Home;

import React from 'react';
import Header from './sections/header';
import Sponsors from './sections/sponsors';
import EmptyColumn from './sections/empty-column';
import PastSection from './sections/past';


const Home = () => {
  return (
    <>
      <Header />
      <Sponsors />
      <EmptyColumn />
      <PastSection />
    </>
  );
}
 
export default Home;

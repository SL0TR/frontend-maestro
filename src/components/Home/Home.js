import React from 'react';
import Header from './sections/header';
import Sponsors from './sections/sponsors';
import EmptyColumn from './sections/empty-column';
import PastSection from './sections/past';
import NewSection from './sections/new';
import NextSection from './sections/next';
import OurPrograms from './sections/programs';


const Home = () => {
  return (
    <>
      <Header />
      <Sponsors />
      <EmptyColumn />
      <PastSection />
      <NewSection />
      <NextSection />
      <OurPrograms />
    </>
  );
}
 
export default Home;

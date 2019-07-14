import React from 'react';
import ScrollAnimation from 'react-animate-on-scroll';

const OurPrograms = () => {
  return (
    <section className="programs-container grid">
      <div className="col-1"></div>
      <div className="col-2"></div>
      <div className="col-3"></div>
      <div className="col-4"></div>
      <div className="col-5"></div>
      <ScrollAnimation animateIn="slideInDownPrograms" animateOnce className="our-programs">
        <ScrollAnimation animateIn="fadeIn" animateOnce delay={1000} className="our-programs--left">
          <h2>Our Programs</h2>
          <div className="thumb"></div>
        </ScrollAnimation>
        <ScrollAnimation  className="our-programs--right" animateIn="fadeIn" animateOnce delay={1000}>
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iste a dolor dolorem sit amet consectetu.</p>
          <div className="btn">Subscribe</div>
        </ScrollAnimation>
        
      </ScrollAnimation>
    </section>
   );
}
 
export default OurPrograms;
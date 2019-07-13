import React from 'react';
import ScrollAnimation from 'react-animate-on-scroll';

const PastSection = () => {
  return (
    <section className="grid past-section">
      <div className="col-1"></div>
      <div className="col-2">
        <div className="box">
        </div>
        <ScrollAnimation className="box" animateIn="slideInRight" animateOnce>
          <h2>past</h2>
          <span className="no">01</span>
        </ScrollAnimation>
        <ScrollAnimation  animateIn="slideInLeft" animateOnce className="box">
          <h2>present</h2>
          <span className="no">02</span>
        </ScrollAnimation>
        <ScrollAnimation duration={.8} animateIn="slideInRight" animateOnce className="box">
          <h2>feature</h2>
          <span className="no">03</span>
        </ScrollAnimation>
      </div>
      <div className="col-3"></div>
      <div className="col-4">
        <ScrollAnimation  animateIn="slideInLeft" animateOnce>
          <h1>past
            <p>
              <ScrollAnimation delay={500} animateIn="fadeInDown" animateOnce>
                branding projects 
              </ScrollAnimation>
            </p>
             </h1>
          <p className="past-text">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsum placeat amet magni assumenda consequatur repellat</p>
          <div className="btn">More</div>
        </ScrollAnimation>
      </div>
      <div className="col-5"></div>
    </section>
   );
}
 
export default PastSection;
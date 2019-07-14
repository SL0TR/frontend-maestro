import React,{ useEffect, useRef } from 'react';
import { ReactComponent as SliderArrow } from '../../../static/right-arrow.svg';
import ScrollAnimation from 'react-animate-on-scroll';

function handleScroll ( ) {
  console.log('worked');
}

const Header = () => {
  const headerRef = useRef(null);

  useEffect(() => {
    setTimeout(() => {
      headerRef.current.classList.add('c-fadeIn');
    }, 1500)
  })


  return (
    <section className="header grid" onScroll={handleScroll}>
      <div className="col-1"></div>
      <ScrollAnimation className="col-2" animateIn="fadeInRight" delay={1000} animateOnce>
        <h1>Identic</h1>
        <p>Dolore aute cupidatat nisi et ad enim adipisicing et.</p>
      </ScrollAnimation>
      <ScrollAnimation className="col-4" animateIn="slideInRight" animateOnce>
          <ScrollAnimation  animateIn="fadeInRight" delay={1000} animateOnce>
            <p>New</p>
            <h2>Marketing Agency</h2>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Reprehenderit odio tempora quo officia neque qui, tene io temp.</p>
            <div className="slider-arrow">
              <SliderArrow className="slider-arrow--left" />
              <SliderArrow className="slider-arrow--right" />
            </div>
          </ScrollAnimation>
          <div className="header-cta"  ref={headerRef} >
            <div className="control-btn"></div>
            <div className="cta-btn">Start Now</div>
          </div>
      </ScrollAnimation>
      
    </section>
   );
}
 
export default Header;
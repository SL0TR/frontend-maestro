import React from 'react';
import { ReactComponent as SliderArrow } from '../../../static/right-arrow.svg';
import ScrollAnimation from 'react-animate-on-scroll';

const NextSection = () => {

  return (
      <section className="grid next-section">
        <div className="col-1"></div>
        <div className="col-2">
          <div className="next-bg">
            <ScrollAnimation animateIn="next-bg-animation"  animateOnce delay={200} className="next-bg--thumb"></ScrollAnimation>
            <h2>Next generation</h2>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
            <div className="play-btn"></div>
            <div className="slider-arrow">
              <SliderArrow className="slider-arrow--left" />
              <SliderArrow className="slider-arrow--right" />
            </div>
            <div className="float-thumb">
            <ScrollAnimation animateIn="slideInLeft" animateOnce delay={50} className="thumb"></ScrollAnimation>
            <ScrollAnimation delay={1000} animateIn="fadeIn" animateOnce>
              <h5>Minima veniam</h5>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing .</p>
            </ScrollAnimation>
              
            </div>
          </div>
          <div className="next-left">
            <h5>Dolores et quas</h5>
            <p>Ut enim ad minima</p>
            <h2>7 327 000 pt</h2>
            <p>nisi ut alquid ex ea</p>
          </div>
        </div>
        <div className="col-3"></div>
        <div className="col-4">
          <ScrollAnimation delay={500} animateIn="fadeInDown" animateOnce>
            <h1>next</h1>
          </ScrollAnimation>
          <div className="next-main">
            <ScrollAnimation animateIn="slideInLeft" animateOnce className="next-main--thumb"></ScrollAnimation>
            <ScrollAnimation delay={1000} animateIn="fadeIn" animateOnce>
              <h5>Expecdjasd ullam</h5>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing .</p>
            </ScrollAnimation>
          </div>
          <div className="next-right">
            <h2>Susicipt laborasdsm</h2>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sit sed deserunt totam error laboriosam eaque! Eos iure excepturi.</p>
            <a href="/">LEARN MORE</a>
          </div>
        </div>
        <div className="col-5 relative">
        <ScrollAnimation animateIn="slideInRight" delay={500} animateOnce className="black-bar" />
        </div>
      </section>
   );
}
 
export default NextSection;
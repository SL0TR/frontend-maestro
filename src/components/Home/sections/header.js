import React from 'react';
import { ReactComponent as SliderArrow } from '../../../static/right-arrow.svg';

const Header = () => {
  return (
    <section className="header grid">
      <div className="col-1"></div>
      <div className="col-2">
        <h1>Identic</h1>
        <p>Dolore aute cupidatat nisi et ad enim adipisicing et.</p>
        </div>
      <div className="col-4">
        <p>New</p>
        <h2>Marketing Agency</h2>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Reprehenderit odio tempora quo officia neque qui, tene io temp.</p>
        <div className="slider-arrow">
          <SliderArrow className="slider-arrow--left" />
          <SliderArrow className="slider-arrow--right" />
        </div>
        <div className="header-cta">
          <div className="control-btn"></div>
          <div className="cta-btn">Start Now</div>
        </div>
      </div>
    </section>
   );
}
 
export default Header;
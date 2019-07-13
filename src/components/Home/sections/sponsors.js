import React from 'react';
import sponsorLogoOne from '../../../static/sponsor-1.png';
import sponsorLogoTwo from '../../../static/sponsor-2.png';
import sponsorLogoThree from '../../../static/sponsor-3.png';
import sponsorLogoFour from '../../../static/sponsor-4.png';
import ScrollAnimation from 'react-animate-on-scroll';

const Sponsors = () => {
  return (
    <section className="grid sponsor">
      <div className="col-1"></div>
      <div className="col-2"></div>
      <div className="col-3"></div>
      <div className="col-4"></div>
      <div className="col-5"></div>
      <ScrollAnimation className="sponsor-gallery"   animateIn="fadeInUp" duration={.5} animateOnce>
        <img src={sponsorLogoOne} alt="sponsor-gallery--logo" className="sponsor-gallery--logo"/>
        <img src={sponsorLogoTwo} alt="sponsor-gallery--log" className="sponsor-gallery--logo"/>
        <img src={sponsorLogoThree} alt="sponsor-gallery--log" className="sponsor-gallery--logo"/>
        <img src={sponsorLogoFour} alt="sponsor-gallery--logo" className="sponsor-gallery--logo"/>
      </ScrollAnimation>
    </section>
    
   );
}
 
export default Sponsors;
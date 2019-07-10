import React from 'react';

const PastSection = () => {
  return (
    <section className="grid past-section">
      <div className="col-1"></div>
      <div className="col-2">
        <div className="box">
        </div>
        <div className="box">
          <h2>past</h2>
          <span className="no">01</span>
        </div>
        <div className="box">
          <h2>present</h2>
          <span className="no">02</span>
        </div>
        <div className="box">
          <h2>feature</h2>
          <span className="no">03</span>
        </div>
      </div>
      <div className="col-3"></div>
      <div className="col-4">
        <h1>past <p>branding projects</p> </h1>
        <p className="past-text">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsum placeat amet magni assumenda consequatur repellat</p>
        <div className="btn">More</div>
      </div>
      <div className="col-5"></div>
    </section>
   );
}
 
export default PastSection;
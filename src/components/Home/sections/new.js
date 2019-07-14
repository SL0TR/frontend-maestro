import React from 'react';
import ScrollAnimation from 'react-animate-on-scroll';

const NewSection = () => {

  const chart = [4, 8, 5, 1, 7, 5, 3, 6, 5, 7, 4, 3, 10, 4, 3, 5, 3, 1, 4, 5];

  return (
    <div className="new-container">
      <section className="new-empty grid">
        <div className="col-1"></div>
        <div className="col-2"></div>
        <div className="col-3"></div>
        <div className="col-4"></div>
        <div className="col-5"></div>
      </section>
      <section className="grid new-section">
        <div className="col-1"></div>
        <div className="col-2">
          <div className="animation-wrapper">
            <ScrollAnimation  animateIn="slideInLeft" animateOnce className="new-art">
              <ScrollAnimation  animateIn="slideInDown" delay={1000} animateOnce className="stats">
                <h3>Statistic</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam quos eum nam optio ratione.</p>
                <div className="money">
                  <div className="income">
                    <h4>214</h4>
                    <p>Income</p>
                  </div>
                  <div className="expense">
                    <h4>647</h4>
                    <p>Expense</p>
                  </div>
                </div>
                <div className="chart">
                  { chart.map((el, i) => (
                    <div key={i} className="chart-bar" style={ {height: `${el+3}rem`}}></div>
                  ))}
                </div>
              </ScrollAnimation>
            </ScrollAnimation>
          </div>
          
        </div>
        <div className="col-3"></div>
        <div className="col-4">
          <ScrollAnimation delay={1000} animateIn="slideInLeft" animateOnce>
            <h1>new <p>branding projects</p> </h1>
            <p className="past-text">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsum placeat amet magni assumenda consequatur repellat</p>
            <p className="past-text">Lorem ipsum dolor, sit amet consectetur adipisici.</p>
            <div className="btn">More</div>
          </ScrollAnimation>
          
        </div>
        <div className="col-5"></div>
      </section>
      <section className="new-empty grid">
        <div className="col-1"></div>
        <div className="col-2"></div>
        <div className="col-3"></div>
        <div className="col-4"></div>
        <div className="col-5"></div>
      </section>
    </div>
   );
}
 
export default NewSection;
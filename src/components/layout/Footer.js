import React from 'react';

const Footer = () => {

  const footerLinks = [
    {
      title: 'Company',
      links: ['News', 'Technology', 'Hiring', 'Promotion']
    },
    {
      title: 'Expand',
      links: ['Partners', 'Enterprise Service', 'Developer', 'Documentation']
    },
    {
      title: 'Help',
      links: ['Help Centre', 'Product', 'Tool']
    }
  ]
  

  return (
    <footer className="footer">
      <div className="footer-left">
        <h3 className="logo-text">Bin<span>Go</span> </h3>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
      </div>
      {footerLinks.map( el => (
        <div className={`footer-${el.title.toLocaleLowerCase()}`}>
          <h5>{el.title}</h5>
          {el.links.map(el => (
            <a href="/">{el}</a>
          ))}
        </div>
      ))}
    </footer>
   );
}
 
export default Footer;
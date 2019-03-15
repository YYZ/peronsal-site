import React from 'react';
import { Link } from 'react-router-dom';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


import data from '../../data/contact';

const Nav = () => (
  <section id="sidebar">
    <section id="intro">
      <Link to="/" className="logo">
        <img src={`${BASE_PATH}/images/me_icon.jpg`} alt="" />
      </Link>
      <header>
        <h2>Sam Halligan</h2>
        <p><a href="mailto:sam@samhalligan.com">sam@samhalligan.com</a></p>
      </header>
    </section>

    <section className="blurb">
      <h2>About</h2>
      <p>Hi, I'm Sam! I like to build things! I'm Irish, currently living in Amsterdam. 
            I am a <a href="https://www.dcu.ie//">DCU</a> Alumni and
            the CTO of <a href="https://isvworld.com">ISVWorld</a>. Before ISVWorld I worked
            at <a href="http://wizenoze.com">Wizenoze</a>. 
      </p>
      <ul className="actions">
        <li>
          {window.location.pathname !== `${BASE_PATH}/resume` ? <Link to="/resume" className="button">Learn More</Link> : <Link to="/about" className="button">About Me</Link>}
        </li>
      </ul>
    </section>

    <section id="footer">
      <ul className="icons">
        {data.map(s => (
          <li key={s.label}><a href={s.link}><FontAwesomeIcon icon={s.icon} /></a></li>
        ))}
      </ul>
      <p className="copyright">&copy;Sam Halligan<Link to="/">samhalligan.com</Link>.</p>
    </section>
  </section>
);

export default Nav;

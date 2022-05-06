import React from 'react';
import { Link } from 'react-router-dom';

import ContactIcons from '../Contact/ContactIcons';

const { PUBLIC_URL } = process.env; // set automatically from package.json:homepage

const Nav = () => (
  <section id="sidebar">
    <section id="intro">
      <Link to="/" className="logo">
        <img src={`${PUBLIC_URL}/images/me_icon.jpeg`} alt="" />
      </Link>
      <header>
        <h2>Somnath Sarkar</h2>
        <p><a href="mailto:somnath.iitkgp@gmail.com">somnath.iitkgp@gmail.com</a></p>
      </header>
    </section>

    <section className="blurb">
      <h2>About</h2>
      <p>I&apos;m a Software Engineer at Amazon. Currently I work on ML Infrastructure for a research team within
          <a href={"https://advertising.amazon.com/"} target="_blank"> Advertising</a>. In my former capacity I worked on
          <a href={"https://aws.amazon.com/sagemaker"} target="_blank"> Amazon SageMaker</a> within AWS.
          Prior to Amazon I was at <a href={"https://www.goldmansachs.com/"} target="_blank">Goldman Sachs </a>
          and <a href={"https://www.credit-suisse.com/"} target="_blank">Credit Suisse</a>.</p>

        <p>Regarding my academic background I have degrees from
            <a href={"https://www.columbia.edu/"} target="_blank"> Columbia University </a>and
            <a href={"http://www.iitkgp.ac.in/"}> IIT Kharagpur</a>.
      </p>
      <ul className="actions">
        <li>
          {window.location.pathname !== `${PUBLIC_URL}/resume` ? <Link to="/resume" className="button">Learn More</Link> : <Link to="/about" className="button">About Me</Link>}
        </li>
      </ul>
    </section>

    <section id="footer">
      <ContactIcons />
      <p className="copyright">&copy; Somnath Sarkar <Link to="/">@somnathsarkar.com</Link>.</p>
    </section>
  </section>
);

export default Nav;

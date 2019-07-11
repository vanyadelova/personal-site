import React from 'react';
import { Link } from 'react-router-dom';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


import data from '../../data/contact';

const Nav = () => (
  <section id="sidebar">
    <section id="intro">
      <Link to="/" className="logo">
        <img src={`${BASE_PATH}/images/loveee.jpg`} alt="" />
      </Link>
      <header>
        <h2>Vanya Delova</h2>
        <p><a href="mailto:happy.vanya.delova@gmail.com">happy.vanya.delova@gmail.com</a></p>
      </header>
    </section>

    <section className="blurb">
      <h2>About</h2>
      <p>Hi, I&apos;m Vanya. I like building things.
            I am a <a href="https://www.unibo.it/en">Bologna University</a> graduate, and
            successfully completed <a href="https://codaisseur.com/">Codaisseur Code Academy</a>. Before Codaisseur I was
            at <a href="ùhttps://ubiqum.com/">Ubiqum</a>, <a href="https://www.microsoft.com/cs-cz/">Microsoft</a>, <a href="https://www.webhelp.com/it-it/">Webhelp</a>, <a href="https://www.concentrix.com/">Concentrix</a>, and <a href="https://www.deltaproto.com/">DeltaProto</a>.
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
      <p className="copyright">&copy; Vanya Delova <Link to="/"></Link>.</p>
    </section>
  </section>
);

export default Nav;

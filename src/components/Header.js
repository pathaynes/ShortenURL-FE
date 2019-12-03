import React from 'react';
import { Link } from 'react-router-dom';
import styles from '../components/Header.css';

const Header = () => (
  <section className={styles.Header}>
    <h1>SHORTEN YOUR URL</h1>
    <ul>
      <li><Link to='/'>Login</Link></li>
      <li><Link to='/ShortenUrl'>ShortenUrl</Link></li>
      <li><Link to='/Details'>Details</Link></li>
    </ul>
  </section>
);

export default Header;

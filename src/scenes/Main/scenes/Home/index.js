import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import logo from './images/logo.svg';
import style from './style.css';

class Home extends Component {
  render() {
    return (
      <section className={style.hero}>
        <div className={style.app}>
          <header className={style.appHeader}>
            <img src={logo} className={style.appLogo} alt="logo" />
            <h1 className={style.appTitle}>Welcome to React</h1>
          </header>
          <p className={style.appIntro}>
            To get started, edit <code>src/App.js</code> and save to reload.
          </p>
          <Link to="/about">
            <button>About Page</button>
          </Link>
        </div>
      </section>
    );
  }
}

Home.contextTypes = {
  router: PropTypes.object.isRequired
};

export default Home;

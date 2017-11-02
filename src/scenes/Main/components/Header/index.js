/**
 * This is the Header layout component
 */
import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

import style from './style.css';

/**
 * @todo Add toggleMenu(false) to all outgoing links
 */
class Header extends Component {
  constructor(props) {
    super(props);

    this.state = {
      menuOpen: props.menuOpen
    };

    this.toggleMenu = this.toggleMenu.bind(this);
  }

  toggleMenu(value) {
    this.setState({ menuOpen: value });
  }

  render() {
    const { menuOpen } = this.state;

    return (
      <header>
          <p className={style.mainTop}>Header</p>
      </header>
    );
  }
}

export default Header;

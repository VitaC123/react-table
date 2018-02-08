import React, { Component } from 'react';
import './Nav.css';

export default class Nav extends Component {
  render() {
    const pages = ['nav item 1', 'nav item 2', 'nav item 3'];
    const navItems = pages.map(page => (
      <li key={page}>
        <a className='nav-item-link' href={'#'}>
          <div className='nav-item-text'>
            {page}
          </div>
        </a>
      </li>
    ));

    return (
      <nav className='nav'>
        <ul className='list-unstyled nav-items-list'>
          {navItems}
        </ul>
      </nav>
    );
  }
}

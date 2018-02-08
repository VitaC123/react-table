import React from 'react';
import { Link } from 'react-router-dom';
import './Nav.css';


const Nav = props => {
  const { pages, activePage } = props;
  const navItems = pages.map(page => {
    const path = `/${page.replace(/\s/g, '-')}`;
    const linkClasses = path === activePage ? 'nav-item-link active-page' : 'nav-item-link';
    return (
      <li key={page}>
        <Link className={linkClasses} to={path}>
          <div className='nav-item-text'>
            {page}
          </div>
        </Link>
      </li>
    );
  });

  return (
    <nav className='nav'>
      <ul className='list-unstyled nav-items-list'>
        {navItems}
      </ul>
    </nav>
  );
};

export default Nav;

import React from 'react';
import { NavLink } from 'react-router-dom';

function Header(props) {
  return (
    <header className='header'>
      <div className='header__left'>
        <NavLink to="/" className="header__left__logo"><h1>HRnet</h1></NavLink>
        
      </div>
      <div className='header__right'>
        <NavLink className="header__right__link" to="/employee-list">View Current Employees</NavLink>
        <NavLink className="header__right__link" to="/">Add New Employees</NavLink>
      </div>
    </header>
  );
}

export default Header;
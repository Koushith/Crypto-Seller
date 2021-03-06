import React, { Component } from 'react';
//import Identicon from 'identicon';

const Navbar = ({ account }) => {
  return (
    <nav className='navbar navbar-dark fixed-top bg-dark flex-md-nowrap p-0 shadow'>
      <a className='navbar-brand col-sm-3 col-md-2 mr-0 text-white'>EthSwap</a>

      <ul className='navbar-nav px-3'>
        <li className='nav-item text-nowrap d-none d-sm-none d-sm-block'>
          <small className='text-white'>
            <small id='account'>{account}</small>
          </small>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;

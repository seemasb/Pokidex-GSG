import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import './NavBar.css';
import logo from '../imgs/pokiLogo.png';

export default function NavBar() {
  return (
    <div className="header_container">
      <img src={logo} className="logo"></img>
      <div className="Nav">
        <ul>
          <li>
            <NavLink
              to="/Home"
              className="naving"
              id="home"
              activeStyle={{
                borderBottom: 'solid 2px black',
                paddingBottom: '9px',
              }}
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/Pokidex"
              className="naving"
              activeStyle={{
                borderBottom: 'solid 2px black',
                paddingBottom: '9px',
              }}
            >
              Pokidex
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/Legendaries"
              className="naving"
              activeStyle={{
                borderBottom: 'solid 2px black',
                paddingBottom: '9px',
              }}
            >
              Legendaries
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/Documentation"
              className="naving"
              activeStyle={{
                borderBottom: 'solid 2px black',
                paddingBottom: '9px',
              }}
            >
              Documentation
            </NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
}

{
  /* <NavLink
  to="/Home"
  className="naving"
  id="home"
  activeStyle={{
    borderBottom: 'solid 1px #fff',
    fontWeight: 'bold',
  }}
>
  Home
</NavLink>; */
}

import React from 'react'
import classes from './Header.module.scss'
import Logo from './Logo/Logo'
import { NavLink } from 'react-router-dom'

const header = props => {
    return (
      <div className={classes.HeaderNav}>
        <Logo />
        <nav className={classes.Nav}>
            <ul>
              <li><NavLink to="/detail-view/1">Detail View</NavLink></li>
              <li><NavLink to="/my-team">My Team</NavLink></li>
            </ul>
        </nav>
      </div>
    );
}

export default header
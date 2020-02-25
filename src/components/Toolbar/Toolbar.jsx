import React from 'react'
import DrawerToggleButton from '../SideDrawer/DrawerToggleButton'
import classes from './Toolbar.module.css'
import { NavLink } from 'react-router-dom'

const toolbar = props => (
  <header className={classes.Toolbar}>
    <nav className={classes.ToolbarNav}>
      <div>
        <DrawerToggleButton clicked={props.drawerClickHandler}/>
      </div>
      <div className={classes.ToolbarLogo}>
        <NavLink to="/" exact activeClassName={classes.active}>
          Pokedex v1.0.0
        </NavLink>
      </div>
      <div className={classes.Spacer}></div>
      <div className={classes.ToolbarNavItems}>
        <ul>
          <li>
            <NavLink to="/my-team" activeClassName={classes.active}>
              My Team
            </NavLink>
          </li>
          <li>
            <NavLink to="/detail-view/1" activeClassName={classes.active}>
              Detail View
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  </header>
);

export default toolbar
import React from 'react'
import DrawerToggleButton from './DrawerToggleButton'
import {NavLink} from 'react-router-dom'
import './SideDrawer.css'


const sideDrawer = props => {

    let drawerClasses = 'SideDrawer'
    if (props.show) {
        drawerClasses = 'SideDrawer Open'
    }
    return (
      <nav className={drawerClasses}>
        <div className="SideDrawerNavTop">
          <DrawerToggleButton clicked={props.backClicked} />
          <p>Pokedex v1.0.0</p>
        </div>
        <ul>
          <li>
            <NavLink to="/" onClick={props.backClicked}>
              Pokedex
            </NavLink>
          </li>
          <li>
            <NavLink to="/my-team" onClick={props.backClicked}>
              {" "}
              My Team{" "}
            </NavLink>
          </li>
          <li>
            <NavLink to="/detail-view/1" onClick={props.backClicked}>
              Detail View
            </NavLink>
          </li>
        </ul>
      </nav>
    );
}

export default sideDrawer
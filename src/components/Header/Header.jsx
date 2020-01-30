import React from 'react'
import classes from './Header.module.css'
import Logo from './Logo/Logo'
import SearchField from './SearchField/SearchField'

const header = props => {
    return (
      <div className={classes.HeaderNav}>
        <Logo />
        <SearchField changed={props.typingChange} entered={props.searched}/>
      </div>
    );
}

export default header
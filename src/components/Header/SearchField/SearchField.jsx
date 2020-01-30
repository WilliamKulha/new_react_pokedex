import React from 'react'
import classes from './SearchField.module.css'

const searchField = (props) => (
    <input className={classes.SearchField}type="text" onChange={props.changed} value={props.entered} placeholder="Search for a Pokemon"/>
)

export default searchField
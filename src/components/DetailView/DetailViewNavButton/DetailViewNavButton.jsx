import React from 'react'
import classes from './DetailViewNavButton.module.css'

const detailViewNavButton = props => (
    <button onClick={props.clicked} className={classes.NavButton}>{props.children}</button>
)

export default detailViewNavButton
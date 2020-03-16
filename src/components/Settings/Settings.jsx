import React from 'react'
import classes from './Settings.module.css'
import Slider from './slider/slider'

const settings = props => (
    <div className={classes.SettingsWrapper}>
        <section className={classes.SettingsControl}>
            <p>Number of Pokemon</p>
            <Slider />
        </section>
    </div>
)

export default settings
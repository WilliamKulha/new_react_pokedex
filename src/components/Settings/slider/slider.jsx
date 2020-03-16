import React, { Component } from 'react'
import { connect } from 'react-redux'
import * as settingsActions from '../../../store/actions/settingsActions'
import classes from './slider.module.css'

const slider = props => (
<div className={classes.StyledDiv}>
    <input type="range" min={150} max={650} value={props.value} className={classes.slider} onChange={props.handleOnChange} />
    <div className={classes.value}>{props.value}</div>
</div>

)
    
const mapStateToProps = state => {
    return {
        value: state.numOfPokemon
    }
}

const mapDispatchToProps = dispatch => {
    return {
        handleOnChange: (e) =>
            dispatch(settingsActions.changePokemonNumber(e.target.value))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(slider)
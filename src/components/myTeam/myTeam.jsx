import React from 'react'
import { connect } from 'react-redux'
import * as myTeamActions from '../../store/actions/myTeamActions.js'
import classes from './MyTeam.module.css'
import PokemonCard from '../PokemonCard/PokemonCard'

const myTeam = props => {

    return (
        <section className={classes.TeamContainer}>
            {
                props.team.map((pokemon) => (
                    <PokemonCard
                        key={pokemon.name}
                        id={pokemon.game_indices[0].game_index}
                        pokemon={pokemon} />
                ))
            }
        </section>
    )
}

const mapStateToProps = state => {
    return {
        team: state.myTeam
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onRemovePokemonFromTeam: id => 
            dispatch(myTeamActions.removePokemonFromTeam(id))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(myTeam)
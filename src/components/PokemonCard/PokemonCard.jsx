import React from 'react'
import './PokemonCard.scss'
import { Link } from 'react-router-dom'

const PokemonCard = (props) =>{
    const prettyName = props.pokemon.name[0].toUpperCase() + props.pokemon.name.substring(1)
    return(
        <div className="card_wrapper" onClick={()=> props.click(props.pokemon.id)}>

            <div className="card_header">
                <Link to={'/detail-view/' + props.pokemon.id}> <h3>{prettyName}</h3></Link>
                <h3>#{props.pokemon.id}</h3>
            </div>
            <img src={props.pokemon.sprites.front_default} alt={props.pokemon.name}/>       
        
        </div>
    )
}
export default PokemonCard

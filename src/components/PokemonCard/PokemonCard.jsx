import React from 'react'
import './PokemonCard.scss'

const PokemonCard = (props) =>{
    const prettyName = props.pokemon.name[0].toUpperCase() + props.pokemon.name.substring(1)
    return(
        <div className="card_wrapper" onClick={()=> props.click(props.pokemon.id)}>

            <div className="card_header">
                <h3>{prettyName}</h3>
                <h3>#{props.pokemon.id}</h3>
            </div>
            <img src={props.pokemon.sprites.front_default} alt={props.pokemon.name}/>       
        
        </div>
    )
}
export default PokemonCard

import React, { Component } from 'react'
import classes from './DetailView.module.css'
import LoadingSpinner from '../LoadingSpinner/LoadingSpinner'
import DetailViewNavButton from './DetailViewNavButton/DetailViewNavButton'
import axios from '../../axios'

const stylesForProperty = {
  'normal': classes['Normal'],
  'grass': classes['Grass'],
  'poison': classes['Poison'],
  'fire': classes['Fire'],
  'water': classes['Water'],
  'electric': classes['Electric'],
  'ice': classes['Ice'],
  'fighting': classes['Fighting'],
  'ground': classes['Ground'],
  'flying': classes['Flying'],
  'psychic': classes['Psychic'],
  'bug': classes['Bug'],
  'rock': classes['Rock'],
  'ghost': classes['Ghost'],
  'dragon': classes["Dragon"],
  'dark': classes["Dark"],
  'steel': classes['Steel'],
  'fairy': classes['Fairy']
}

class DetailView extends Component {
    state = {
        loading: true,
        error: null,
        pokemon: null,
        nextNumber: null,
        prevNumber: null,
        isFirst: null,
        isLast: null
    }



    componentDidMount(){
        axios
            .get('pokemon/' + this.props.match.params.id)
            .then(res => {
                let leftNumber = null
                let rightNumber = null
                if(res.data.id != 1) {
                  leftNumber = +res.data.id - 1
                }
                if(res.data.id != 250) {
                  rightNumber = +res.data.id + 1
                }
                this.setState({
                    loading: false,
                    error: false,
                    pokemon: res.data,
                    nextNumber: rightNumber,
                    prevNumber: leftNumber
                })
            })
    }

    getBaseStatTotal = () => {
        let acc = 0
        this.state.pokemon.stats.forEach(stat => {
            acc += stat.base_stat
        });
        return acc
    }

    getTypes = () => {
        let types = []
        this.state.pokemon.types.forEach(pokeType => {
            types.push(pokeType.type.name)
        })
        return types
    }

    goLeft = () => {
      if (this.state.prevNumber) {
        axios
          .get("pokemon/" + this.state.prevNumber)
          .then(res => {
            this.setState((prevState) => ({
              pokemon: res.data,
              prevNumber: prevState.prevNumber - 1,
              nextNumber: prevState.pokemon.id
            }))
          })
      }
    }

    goRight = () => {
      if (this.state.nextNumber) {
        axios.get("pokemon/" + this.state.nextNumber).then(res => {
          this.setState(prevState => ({
            pokemon: res.data,
            prevNumber: prevState.pokemon.id,
            nextNumber: res.data.id + 1
          }));
        });
      }
    }

    render() {
        let loadingSpinner = null
        if (this.state.loading) {
            loadingSpinner = <LoadingSpinner/>
        }
        let pokemon = null
        if (!this.state.loading && this.state.pokemon) {
            pokemon = (
              <>
                <section className={classes.LeftSide}>
                  <div
                    className={[classes.SectionHeader, classes.PokeName].join(
                      " "
                    )}
                  >
                    <h1 className={classes.Title}>{this.state.pokemon.name}</h1>
                    <DetailViewNavButton clicked={this.goLeft}>
                      <span role="img" aria-label="Go left button">⬅️</span>
                    </DetailViewNavButton>
                    <DetailViewNavButton clicked={this.goRight}>
                      <span role="img" aria-label="Go right button">➡️</span>
                    </DetailViewNavButton>
                    <h2>#{this.state.pokemon.id}</h2>
                  </div>
                  <div className={classes.PokeImage}>
                    <img
                      src={this.state.pokemon.sprites.front_default}
                      alt={this.state.pokemon.name}
                    />
                  </div>
                  <div className={classes.Stats}>
                    <div className={classes.SectionHeader}>
                      <h3>Base Stats</h3>
                    </div>
                    <div className={classes.BaseStats}>
                      <p>HP : {this.state.pokemon.stats[5].base_stat}</p>
                      <p>Attack : {this.state.pokemon.stats[3].base_stat}</p>
                      <p>Defense : {this.state.pokemon.stats[4].base_stat}</p>
                      <p>
                        Special Attack : {this.state.pokemon.stats[2].base_stat}
                      </p>
                      <p>
                        Special Defense :{" "}
                        {this.state.pokemon.stats[1].base_stat}
                      </p>
                      <p>Speed : {this.state.pokemon.stats[0].base_stat}</p>
                      <p>
                        <strong>Total : {this.getBaseStatTotal()}</strong>
                      </p>
                    </div>
                  </div>
                </section>
                <section className={classes.RightSide}>
                  <div className={classes.Types}>
                    <div className={classes.SectionHeader}>
                      <h3>Types</h3>
                    </div>
                    <div className={classes.TypesArea}>
                      {this.getTypes().map(type => {
                        const style = stylesForProperty[type]
                        return (
                          <p className={style} key={type}>
                            {type}
                          </p>
                        );
                      })}
                    </div>
                  </div>
                </section>
              </>
            );
        }
        return(
            <article className={classes.DetailWrapper}>
                {loadingSpinner}
                {pokemon}
            </article>
        )
    }
}

export default DetailView
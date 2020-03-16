import React, { Component } from 'react';
import { connect } from 'react-redux'
import Layout from './components/Layout/Layout'
import Pokedex from './components/Pokedex/Pokedex'
import SideDrawer from './components/SideDrawer/SideDrawer'
import Backdrop from './components/UI/Modal/Backdrop/Backdrop'
import ToolBar from './components/Toolbar/Toolbar'
import DetailView from './components/DetailView/DetailView'
import ScrollToTop from './hoc/ScrollToTop/ScrollToTop'
import MyTeam from './components/myTeam/myTeam'
import Settings from './components/Settings/Settings'
import {BrowserRouter, Route} from 'react-router-dom'
import * as pokedexActions from './store/actions/pokedexActions'
import './App.scss';

class App extends Component{
    state = {
      sideDrawerOpen: false
    }

    componentDidMount() {
      this.props.onFetchPokedex(this.props.pokeNum)
    }

    componentDidUpdate(prevProps){
        if (this.props.pokeNum === prevProps.pokeNum){
          return false
        } else {
          console.log('[app.js] ShouldComponentUpdate returns true')
          this.props.onFetchPokedex(this.props.pokeNum);
          return true
        }
    }


    drawerToggleClickHandler = () => {
      this.setState((prevState) => {
        return {sideDrawerOpen: !prevState.sideDrawerOpen}
      })
    }

    toggleClickHandler = () => {
      this.setState({sideDrawerOpen:false})
    }

    render(){
    
      return (
        <BrowserRouter>
          <ScrollToTop>
            <Layout>
              <ToolBar drawerClickHandler={this.drawerToggleClickHandler}/>
              <SideDrawer show={this.state.sideDrawerOpen} backClicked={this.toggleClickHandler}/>
              <Backdrop show={this.state.sideDrawerOpen} clicked={this.toggleClickHandler}/>
              <Route path="/detail-view/:id" render={(props) => <DetailView {...props}/>} />
              <Route exact path="/" component={Pokedex} />
              <Route exact path="/my-team" component={MyTeam} />
              <Route exact path="/settings" component={Settings} />
            </Layout>
          </ScrollToTop>
        </BrowserRouter>   
      )
    }
}

const mapStateToProps = state => {
  return {
    pokedex: state.pokedex,
    error: state.error,
    errorType: state.errorType,
    pokeNum: state.numOfPokemon
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onFetchPokedex : (number) => 
      dispatch(pokedexActions.pokedexTryFetch(number))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);

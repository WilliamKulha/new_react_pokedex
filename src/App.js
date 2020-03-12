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
import {BrowserRouter, Route} from 'react-router-dom'
import * as pokedexActions from './store/actions/pokedexActions'
import './App.scss';

class App extends Component{
    state = {
      sideDrawerOpen: false
    }

    componentWillMount() {
      this.props.onFetchPokedex()
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
    errorType: state.errorType
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onFetchPokedex : () => 
      dispatch(pokedexActions.pokedexTryFetch())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);

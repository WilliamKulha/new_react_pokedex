import React, { Component } from 'react';
import Layout from './components/Layout/Layout'
import Pokedex from './components/Pokedex/Pokedex'
import SideDrawer from './components/SideDrawer/SideDrawer'
import Backdrop from './components/UI/Modal/Backdrop/Backdrop'
import ToolBar from './components/Toolbar/Toolbar'
import DetailView from './components/DetailView/DetailView'
import ScrollToTop from './hoc/ScrollToTop/ScrollToTop'
import {BrowserRouter, Route} from 'react-router-dom'
import './App.scss';

class App extends Component{
    state = {
      sideDrawerOpen: false
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
            
            </Layout>
          </ScrollToTop>
        </BrowserRouter>   
      )
    }
}

export default App;

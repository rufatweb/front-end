import React, { Component } from 'react';
import NavBar from './components/NavBar'
import './App.css';
import Home from './components/Home'
import ItemListContainer from './containers/ItemListContainer'
import {Route, Switch} from 'react-router-dom'
class App extends Component {
  render() {
    return (
      <div className="App">
      <NavBar />
      <Switch>
      <Route path="/collection" component={ItemListContainer} />
      <Route path="/" component={Home} />
      </Switch>


      </div>
    );
  }
}

export default App;

import React, { Component } from 'react';
import NavBar from './components/NavBar'
import './App.css';
import Home from './components/Home'
import ItemListContainer from './containers/ItemListContainer'
import {Route, Switch} from 'react-router-dom'
class App extends Component {

  state = {
    searchTerm: ''
  }


  handleSearch = (e) => {
    this.setState({searchTerm: e.target.value})
  }

  render() {
    return (
      <div className="App">
      <NavBar value={this.state.searchTerm} handleSearch={this.handleSearch} />
      <Switch>
      <Route path="/collection" render={() => <ItemListContainer searchTerm={this.state.searchTerm}/>} />
      <Route path="/" component={Home} />
      </Switch>


      </div>
    );
  }
}

export default App;

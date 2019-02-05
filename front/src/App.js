import React, { Component } from 'react';
import NavBar from './components/NavBar'
import './App.css';
import Home from './components/Home'
import ItemListContainer from './containers/ItemListContainer'
import {Route, Switch} from 'react-router-dom'
import LogIn from './components/LogIn'
import SignUp from './components/SignUp'
class App extends Component {

  state = {
    searchTerm: '',
    user: null
  }


  handleSearch = (e) => {
    this.setState({searchTerm: e.target.value})
  }

 handleSignUpSubmit = (userData) => {
   this.createUser(userData);

 }

 createUser = userData => {
    fetch('http://localhost:3000/api/v1/users', {
      method: 'POST',
      headers: {
       'Content-Type': 'application/json',
          "Accepts": "application/json"
   },
   body: JSON.stringify({user: userData})
    }).then(r => r.json())
    .then(json => {
      localStorage.setItem("token", json.jwt)
      this.setState({user: json.user})
    })
 }
handleLogIn = (loginData) => {
  this.getUser(loginData)
}


getUser = (loginData) => {
  fetch('http://localhost:3000/api/v1/login', {
    method: 'POST',
    headers: {
     'Content-Type': 'application/json',
        "Accepts": "application/json"
 },
 body: JSON.stringify({user: loginData})
  }).then(r => r.json())
  .then(json => {
    localStorage.setItem("token", json.jwt)
    this.setState({user: json.user})
  })
}
  render() {

    return (
      <div className="App">
      <NavBar value={this.state.searchTerm} handleSearch={this.handleSearch} />
      <Switch>
      <Route path="/collection" render={() => <ItemListContainer searchTerm={this.state.searchTerm}/>} />
      <Route path="/log_in" render={() => <LogIn handleLogIn={this.handleLogIn}/>}/>
      <Route path="/sign_up" render={() => <SignUp handleSignUpSubmit={this.handleSignUpSubmit} />}/>
      <Route path="/" component={Home} />

      </Switch>


      </div>
    );
  }
}

export default App;

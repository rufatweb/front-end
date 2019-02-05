import React, { Component } from 'react';
import NavBar from './components/NavBar'
import './App.css';
import Home from './components/Home'
import ItemListContainer from './containers/ItemListContainer'
import {Route, Switch, withRouter, Redirect} from 'react-router-dom'
import LogIn from './components/LogIn'
import SignUp from './components/SignUp'
class App extends Component {

  state = {
    searchTerm: '',
    newUser: null,
    user: null
  }

  componentDidMount() {
    let token= localStorage.getItem("token")
    if (token) {
      fetch('http://localhost:3000/api/v1/current_user', {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Action: "application/json",
          Authorization: `${token}`
        }
      })
        .then(r => r.json())
        .then(({user}) => this.setState({ user }))
    } else {
      this.props.history.push('/login');
    }
  }

  handleSearch = (e) => {
    this.setState({searchTerm: e.target.value})
  }

 handleSignUpSubmit = (userData) => {
   this.createUser(userData);
   this.props.history.push('/');
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
      this.setState({newUser: json.user})
    })
 }
handleLogIn = (loginData) => {
  this.getUser(loginData)
  this.props.history.push('/');
}


getUser = (loginData) => {
  console.log("login data", loginData)
  fetch('http://localhost:3000/api/v1/login', {
    method: 'POST',
    headers: {
     'Content-Type': 'application/json',
        "Accepts": "application/json"
 },
 body: JSON.stringify({user: {
   username: loginData.username,
   password: loginData.password
 }
 })
}).then(r => {
  console.log(r)
  return r.json()
} )
  .then(json => {
    localStorage.setItem("token", json.jwt)
    this.setState({user: json.user})
  })
}

logout = () => {
  localStorage.clear()
  this.setState({user: null, newUser: null})
  this.props.history.push('/');
}
  render() {
    return (
      <div className="App">
      <NavBar logout={this.logout} user={this.state.user} newUser={this.state.newUser} value={this.state.searchTerm} handleSearch={this.handleSearch} />
      <Switch>
      <Route path="/collection" render={() => <ItemListContainer newUser={this.state.newUser} user={this.state.user} searchTerm={this.state.searchTerm}/>} />
      <Route path="/log_in" render={() => <LogIn handleLogIn={this.handleLogIn}/>}/>
      <Route path="/sign_up" render={() => <SignUp handleSignUpSubmit={this.handleSignUpSubmit} />}/>
      <Route path="/" render={() => <Home newUser={this.state.user}/>} />

      </Switch>


      </div>
    );
  }
}

export default withRouter(App);

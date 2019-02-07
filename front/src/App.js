import React, { Component } from 'react';
import NavBar from './components/NavBar'
import './App.css';
import Home from './components/Home'
import ItemListContainer from './containers/ItemListContainer'
import {Route, Switch, withRouter} from 'react-router-dom'
import LogIn from './components/LogIn'
import SignUp from './components/SignUp'
import Cart from './components/Cart'
class App extends Component {

  state = {
    searchTerm: '',
    user: null,
    cart: []
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
        .then(json => this.setState({ user: json.user, cart: json.user.items}))
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
      this.setState({user: json.user})
    })
 }
handleLogIn = (loginData) => {
  this.getUser(loginData)
  this.props.history.push('/');
}


getUser = (loginData) => {
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
  return r.json()
} )
  .then(json => {
    localStorage.setItem("token", json.jwt)
    this.setState({user: json.user})
  })
}

logout = () => {
  localStorage.clear()
  this.setState({user: null, cart: []})
  this.props.history.push('/');
}

handleCart = (item) => {
  // debugger
  console.log(item);
  fetch('http://localhost:3000/api/v1/user_items', {
    method: 'POST',
    headers: {
     'Content-Type': 'application/json',
        "Accepts": "application/json"
      },
      body: JSON.stringify({
        user_id: this.state.user.id,
        item_id: item.id,
        quantity: 1
      })})
      .then(r => r.json())
      .then(data => {
        console.log(data.user_item)
        let newArr = [...this.state.cart, data.user_item]
        console.log(newArr)
        this.setState({cart: newArr})
      }
      )
    }


  render() {
    console.log(this.state.cart)
    return (
      <div className="App">
      <NavBar logout={this.logout} user={this.state.user}  value={this.state.searchTerm} handleSearch={this.handleSearch} />
      <Switch>
      <Route path="/collection" render={() => <ItemListContainer handleCart={this.handleCart} user={this.state.user} searchTerm={this.state.searchTerm}/>} />
      <Route path="/cart" render={() => <Cart cart={this.state.cart}/>} />
      <Route path="/log_in" render={() => <LogIn handleLogIn={this.handleLogIn}/>}/>
      <Route path="/sign_up" render={() => <SignUp handleSignUpSubmit={this.handleSignUpSubmit} />}/>
      <Route path="/" render={() => <Home user={this.state.user}/>} />

      </Switch>


      </div>
    );
  }
}

export default withRouter(App);

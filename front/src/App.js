import React, { Component } from 'react';
import NavBar from './components/NavBar'
import './App.css';
import Home from './components/Home'
import ItemListContainer from './containers/ItemListContainer'
import {Route, Switch, withRouter} from 'react-router-dom'
import LogIn from './components/LogIn'
import SignUp from './components/SignUp'
import Cart from './containers/Cart'
import Checkout from './components/Checkout'




class App extends Component {

  state = {
    searchTerm: '',
    user: '',
    cart: [],
    orderSubTotal: '',
    orderItems: []

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
        .then(json => {
          this.setState({ user: json.user, cart: json.user.user_items})
        })
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
      this.setState({user: json.user, cart: json.user.user_items})
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
    this.setState({user: json.user, cart: json.user.user_items})
  })
}

logout = () => {
  localStorage.clear()
  this.setState({user: '', cart: []})
  this.props.history.push('/');
}

handleCart = (item) => {
  let token= localStorage.getItem("token")
  fetch('http://localhost:3000/api/v1/user_items', {
    method: 'POST',
    headers: {
     'Content-Type': 'application/json',
        "Accepts": "application/json",
        "Authorization": `${token}`
      },
      body: JSON.stringify({
        user_id: this.state.user.id,
        item_id: item.id
      })})
      .then(r => r.json())
      .then(res => {
        let obj = res.data.attributes
        obj.id = res.data.id.toString()
        let newArr = [...this.state.cart, obj]
        this.setState({cart: newArr})
      })
    }

    handlePlus = (item, minus) => {
      let token= localStorage.getItem("token")
      let newQuantity;
      (minus) ? newQuantity = item.quantity - 1 : newQuantity = item.quantity + 1
      return fetch(`http://localhost:3000/api/v1/user_items/${item.id}`, {
  method: 'PATCH',
  body: JSON.stringify({quantity: newQuantity}),
  headers:{
    'Accepts': 'application/json',
    'Content-Type': 'application/json',
    'Authorization': `${token}`
  }
}).then(res => res.json())
.then(r => {
  let newItem = r.data.attributes
  newItem.id = r.data.id.toString()
  let newArr = [...this.state.cart]
  let oldItem = newArr.find(item => item.id.toString() === r.data.id.toString())
  let idx = [...this.state.cart].indexOf(oldItem)
  newArr[idx]=newItem
  this.setState({cart: newArr})
})
}

handleDelete = (item) => {
  let token = localStorage.getItem("token")
  fetch(`http://localhost:3000/api/v1/user_items/${item.id}`, {
     method: 'DELETE',
    headers: {
     'Authorization': `${token}`
   }
 })
 .then(r => {

   let newArr = [...this.state.cart]
   let oldItem = newArr.find(user_item => user_item.id.toString() === item.id.toString())
   let idx = [...this.state.cart].indexOf(oldItem)
   newArr.splice(idx, 1)
   this.setState({cart: newArr})
 })
}

handleCheckout = (subTotal) => {
  let token= localStorage.getItem("token")

  fetch('http://localhost:3000/api/v1/orders', {
    method: 'POST',
    headers: {
     'Content-Type': 'application/json',
        "Accepts": "application/json",
        "Authorization": `${token}`
      },
      body: JSON.stringify({
        user_id: this.state.user.id,
        subtotal: subTotal
      })})
      .then(r => r.json())
      .then(data => this.setState({orderSubTotal: data.order.subtotal, orderItems: data.order_items}))
}
reset = () => {
  let token = localStorage.getItem("token")
  this.state.cart.map(user_item => {
  fetch(`http://localhost:3000/api/v1/user_items/${user_item.id}`, {
     method: 'DELETE',
    headers: {
     'Authorization': `${token}`
   }
 })
})
this.setState({cart: [],
orderSubTotal: '',
orderItems: []})
}
  render() {
    return (
      <div className="App">
      <NavBar cart={this.state.cart} logout={this.logout} user={this.state.user}  value={this.state.searchTerm} handleSearch={this.handleSearch} />

      <Switch>
      <Route path="/cart" render={() => <Cart handleCheckout={this.handleCheckout} handleDelete={this.handleDelete} handlePlus={this.handlePlus} cart={this.state.cart}/>} />
      <Route path="/collection" render={() => <ItemListContainer cart={this.state.cart} handleCart={this.handleCart} user={this.state.user} searchTerm={this.state.searchTerm}/>} />
      <Route path="/checkout" render={() => <Checkout orderItems={this.state.orderItems} reset={this.reset} orderSubTotal={this.state.orderSubTotal}/>} />
      <Route path="/log_in" render={() => <LogIn handleLogIn={this.handleLogIn}/>}/>
      <Route path="/sign_up" render={() => <SignUp handleSignUpSubmit={this.handleSignUpSubmit} />}/>
      <Route path="/" render={() => <Home user={this.state.user}/>} />

      </Switch>


      </div>
    );
  }
}

export default withRouter(App);

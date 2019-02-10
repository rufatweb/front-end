import React from 'react'
import { Button, Header, Modal, Icon, Image } from 'semantic-ui-react'
import Detail from '../components/Detail'


class Cart extends React.Component {

listItems = () => this.props.cart.map(user_item => <Detail handleDelete={this.props.handleDelete} handlePlus={this.props.handlePlus} key={user_item.id} user_item={user_item}/>)

subTotal = () => this.props.cart.map(user_item => parseFloat(user_item.item.price * user_item.quantity)).reduce((a, b) => a + b, 0).toPrecision(4)


render() {
  // let listItems = this.props.cart.map(user_item => <Detail handlePlus={this.props.handlePlus} key={user_item.id} user_item={user_item}/>)
    return (
      <div className="cart">
      <div className="ui four column grid">
   {this.listItems()}
   </div>
   <p></p>
   <p></p>
     {(this.props.cart.length !== 0)? <span>Subtotal: {this.subTotal()} <p></p><Button color="orange">PLACE YOUR ORDER</Button> </span>: <h1>YOUR CART IS EMPTY</h1>}
   </div>
 )
  }
}

export default Cart;

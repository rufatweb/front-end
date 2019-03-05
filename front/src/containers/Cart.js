import React from 'react'
import { Button, Icon } from 'semantic-ui-react'
import Detail from '../components/Detail'
import { Link } from 'react-router-dom';

class Cart extends React.Component {



listItems = () => this.props.cart.map(user_item => <Detail handleDelete={this.props.handleDelete} handlePlus={this.props.handlePlus} key={user_item.id} user_item={user_item}/>)




render() {
  let subTotal = this.props.cart.map(user_item => parseFloat(user_item.item.price * user_item.quantity)/100).reduce((a, b) => a + b, 0).toFixed(2)

    return (
      <div className="cart">
      <div className="ui column grid">
   {this.listItems()}
   <p></p>
   <p></p>

   {(this.props.cart.length !== 0)? <div className="checkout-btn"><h2>total: $ {subTotal} </h2><p></p><Link to="/checkout">
   <Button onClick={() => this.props.handleCheckout(subTotal)} color="orange" animated='vertical'>
   <Button.Content visible>CHECKOUT</Button.Content>
   <Button.Content hidden>
    <Icon name='dollar' />
  </Button.Content>
 </Button></Link></div>
    : <div className="empty"><h1>YOUR SHOPPING CART IS EMPTY<p></p> <Icon name='frown outline' /></h1></div>}
   </div>
   </div>
 )
  }
}

export default Cart;

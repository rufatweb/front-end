import React from 'react'
import { Button, Header, Modal, Icon, Image } from 'semantic-ui-react'
import Detail from '../components/Detail'


class Cart extends React.Component {

listItems = () => this.props.cart.map(user_item => <Detail handleDelete={this.props.handleDelete} handlePlus={this.props.handlePlus} key={user_item.id} user_item={user_item}/>)

render() {

  // let listItems = this.props.cart.map(user_item => <Detail handlePlus={this.props.handlePlus} key={user_item.id} user_item={user_item}/>)
    return (
      <div className="cart">
      <div className="ui four column grid">
   {this.listItems()}
   </div>
   <p></p>
   <p></p>
     <Button color="orange">PLACE YOUR ORDER</Button>
   </div>
 )
  }
}

export default Cart;

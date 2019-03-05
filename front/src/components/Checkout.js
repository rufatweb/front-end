import React from 'react'
import {Elements, StripeProvider} from 'react-stripe-elements';
import CheckoutForm from '../CheckoutForm'
import { Button, Icon, Image } from 'semantic-ui-react'
import { Link, Redirect } from 'react-router-dom';

class Checkout extends React.Component {

state = {
  complete: false
}

clear = () => {
  this.setState({complete: true})
}

render() {
if (this.state.complete) return (

  <div className="final">

  <h1>Purchase Complete, Thanks!</h1>
   <p></p>
   <Link to="/">
   <Button color="black" animated>
   <Button.Content visible>CONTUNE SHOPPING</Button.Content>
   <Button.Content hidden>
   <Icon name='arrow right' />
   </Button.Content>
   </Button>
   </Link>
  </div>
)
  let numbers = this.props.orderItems.map(item => item.quantity).reduce((a, b) => a + b, 0)

  return (
    <div >
   <p></p>
    <h1>YOUR ORDER</h1>

    number of items: {numbers}
    <p></p>
    shipping: Free
    <p></p>
    total: ${this.props.orderSubTotal}0
    <p></p>
   <StripeProvider apiKey="pk_test_CDMbf0VuaIEAUVyLmStQbZ9x">
   <Elements>
   <CheckoutForm reset={this.props.reset} clear={this.clear} amount={this.props.orderSubTotal}/>
   </Elements>
   </StripeProvider>
    </div>
  )
}

}

  export default Checkout;

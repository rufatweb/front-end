import React from 'react'
import { Button, Form, Icon} from 'semantic-ui-react'
import { Link } from 'react-router-dom';
class Checkout extends React.Component {


render() {
  let numbers = this.props.orderItems.map(item => item.quantity).reduce((a, b) => a + b, 0)
  console.log(this.props)
  return (
    <div >
   <p></p>
    <h1>YOUR ORDER</h1>

    number of items: {numbers}
    <p></p>
    total: ${this.props.orderSubTotal}
    <p></p>
    shipping: Free
    <p></p>
     <h1>PAYMENT DETAILS</h1>
   <p></p>
   <div className="payment">
   </div>
   <p></p>
    <Link to="/ordered">
    <Button color="black" animated='vertical'>
<Button.Content visible>PLACE YOUR ORDER</Button.Content>
<Button.Content hidden>
 <Icon name='dollar' />
</Button.Content>
</Button>
</Link>

    </div>
  )
}

}

  export default Checkout;

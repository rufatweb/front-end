import React, {Component} from 'react';
import {CardElement, injectStripe} from 'react-stripe-elements';
import { Button, Form, Input} from 'semantic-ui-react'
class CheckoutForm extends Component {

  state = {
    fullName: '',
    email: '',
    amount: '',
    loading: false
  }

handleChange = (e) => {
  this.setState({amount: (this.props.amount)})
  this.setState({[e.target.name]: e.target.value})
}

handleSubmit = async (e) => {
  e.preventDefault();
  let tokenAuth= localStorage.getItem("token")
  let {token} = await this.props.stripe.createToken({name: this.state.fullName});
  let email = this.state.email
  let amount = (parseFloat(this.state.amount))*100

  fetch('http://localhost:3000/api/v1/charges', {
    method: "POST",
    headers: {
      'Content-type': 'application/json',
      "Authorization": `${tokenAuth}`
    },
    body: JSON.stringify({ token, amount, email })
  })
  .then(response => {
    if (response.ok) {
      this.setState({fullName: '', email: '', amount: ''})
      this.props.reset()
      this.props.clear()
    }
  })

}

  render() {

    return (

      <div className="checkout-form">

        <Form onSubmit={this.handleSubmit}>
        <label className="payment-details">Payment Details</label> <p></p>
        <Input className="full-name" type="text" name="fullName" value={this.state.fullName} placeholder="Full Name" onChange={this.handleChange}/><p></p>
       <Input className="email" type="email" name="email" value={this.state.email} placeholder="email" onChange={this.handleChange}/><p></p>
       <p></p>
       <CardElement />
        <Button>Complete</Button>
        </Form>

      </div>

    );
  }
}

export default injectStripe(CheckoutForm);

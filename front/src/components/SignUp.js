import React from 'react'
import ReactDOM from 'react-dom'
import { Button, Form } from 'semantic-ui-react'

class SignUp extends React.Component {


state = {
  username: '',
  email: '',
  name: '',
  password: ''
}

handleSubmit = (e) => {
e.preventDefault()
this.props.handleSignUpSubmit(this.state)
this.setState({
  username: '',
  email: '',
  name: '',
  password: ''
})
}

handleChange = (e) => {
  this.setState({[e.target.name]: e.target.value})
}

render () {
  return (
    <div className="sign-in">
    <Form onSubmit={this.handleSubmit}>
    <Form.Field>
      <label>name</label>
      <input type='text' value={this.state.name} name='name' placeholder='name' onChange={this.handleChange} />
    </Form.Field>
     <Form.Field>
       <label>user name</label>
       <input type='text' value={this.state.username} name='username' placeholder='username' onChange={this.handleChange} />
     </Form.Field>
     <Form.Field>
       <label>email address</label>
       <input type='email' value={this.state.email} name='email' placeholder='email' onChange={this.handleChange}/>
     </Form.Field>
     <Form.Field>
     <label>password</label>
     <input type='password' value={this.state.password} name='password' placeholder='password' onChange={this.handleChange}/>
     </Form.Field>
     <Button type='submit'>Sign Up</Button>
   </Form>
    </div>
  )
}



}

export default SignUp;

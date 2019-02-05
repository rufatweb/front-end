import React from 'react'
import ReactDOM from 'react-dom'
import { Button, Form } from 'semantic-ui-react'

class LogIn extends React.Component {


state = {
  username: '',
  password: ''
}

handleSubmit = (e) => {
e.preventDefault()
this.props.handleLogIn(this.state)

}

handleChange = (e) => {
  this.setState({[e.target.name]: e.target.value})
}

render () {
  return (
    <div className="sign-in">
    <Form onSubmit={this.handleSubmit}>
     <Form.Field>
       <label>user name</label>
       <input type='text' name='username' value={this.state.username} placeholder='username' onChange={this.handleChange} />
     </Form.Field>
     <Form.Field>
     <label>password</label>
     <input type='password' name='password' value={this.state.password} placeholder='password' onChange={this.handleChange} />
     </Form.Field>
     <Button type='submit'>Log In</Button>
   </Form>
    </div>
  )
}



}

export default LogIn;

import React from 'react'
import ReactDOM from 'react-dom'
import { Button, Form } from 'semantic-ui-react'

class SignIn extends React.Component {


state = {
  username: '',
  password: ''
}

handleSubmit = (e) => {
e.preventDefault()
console.log(e.target)
}

render () {
  return (
    <div className="sign-in">
    <Form onSubmit={this.handleSubmit}>
     <Form.Field>
       <label>user name</label>
       <input type='text' name='username' placeholder='username' />
     </Form.Field>
     <Form.Field>
     <label>password</label>
     <input type='password' name='password' placeholder='password' />
     </Form.Field>
     <Button type='submit'>Sign In</Button>
   </Form>
    </div>
  )
}



}

export default SignIn;

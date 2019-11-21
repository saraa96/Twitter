import React, { Component } from 'react'
import axios from 'axios'
import { Form,Button,Col} from 'react-bootstrap'
export default class register extends Component {
  state ={
    user:{
      email :'',
      password :'',
      username :''
    }
  }

    submit= (e)=>{  
      this.setState(
        {user:{
        email: e.email.value,
        username: e.username.value,
        password: e.password.value
      }
      })
      axios.post('http://localhost:3002/create',this.state.user)
    }
  
    render() {
        return (
            <div className='Register'>
                <Form>
                <Form.Group controlId="formBasicEmail" method="post" action="http://localhost:3002/create">
    <Form.Label>Email address</Form.Label>
    <Form.Control type="email" placeholder="Enter email"  value={this.state.user.email} />
  </Form.Group>
  <Form.Group controlId="formBasicPassword">
    <Form.Label>Password</Form.Label>
    <Form.Control type="password" placeholder="Password"   value={this.state.user.password} />
    {/* <Form.Label>reapet password</Form.Label>
    <Form.Control type="password" placeholder="Password" value="password" /> */}
  </Form.Group>
  <Form.Row>
    <Col>
      <Form.Control placeholder="Username"  value={this.state.user.username} />
    </Col>
    <Col>
    
    </Col>
  </Form.Row>
  <Button variant="primary" type="submit" onclick='submit' >
    Submit
  </Button>
</Form>
            </div>
        )
    }
}


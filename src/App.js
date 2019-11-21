import React, { Component } from 'react'
import Login from './logIn'
import axios from 'axios'
import { Form,Button,Navbar,Nav, Image ,Col,Row} from 'react-bootstrap'
import './App.css'
import {
  BrowserRouter, Switch,
  Route, Link
} from 'react-router-dom';
import Register from './register'





export default class App extends Component {
  componentDidMount(){
axios.get('http://localhost:3002/show')
.then(data => console.log(data)
)
.catch(err => console.log(err)
)
axios.post('http://localhost:3002/create',
{
  // username :'username form'
  // description :'sup'
  // description :'sup'
  // description :'sup'
}
)
.then(data => console.log(data)
)
.catch(err => console.log(err)
)
  }
  render() {
    return (
      <div>
    
 <BrowserRouter>
 <Switch>
 <Route exact path='/login' component = {Login} />
 <Route exact path='/register' component = {Register} />

    <Row> 
    <Col xs={6} md={4}>
      <Image style={{marginLeft:"0"}} src="https://i.ibb.co/8DVKX6F/t.png" rounded />
      </Col>
      <Col xs={6} lg={4}>
<div className ='LRbutton' >
<Image style={{marginLeft:"-20%" , widtht:"30px",height:"30px"}} src="http://pngimg.com/uploads/twitter/twitter_PNG9.png" rounded />
<h1  style={{width:"130%" , marginLeft:"-20%"}}>
See what’s happening in the world right now
</h1>
<h2 style={{ marginLeft:"-20%"}} >
Join Twitter today.
</h2>
      <Row>
      <Link style={{  marginTop: "5px",
  textAlign:" center",
}} to="/login" >  <Button variant="outline-primary" size="xl"> Login </Button> </Link>  
      </Row>
      <Row style={{marginTop:"20px"}} >
      <Link style={{  marginTop: "5px",
  textAlign:" center",
}} to="/register" >  <Button variant="outline-primary" size="xl"   >SingUp </Button> </Link>  
      </Row>
      
      </div>
    </Col>
    </Row>
    </Switch>
    </BrowserRouter>
      </div>
    )
  }
}

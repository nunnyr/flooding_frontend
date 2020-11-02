import React from 'react'
import './App.css';
import Home from './components/Home'
// import NavBar from './components/NavBar'
// import loginForm from './components/loginForm'
// import { Container, Button} from 'semantic-ui-react'

import {Switch, Route, withRouter, Redirect} from 'react-router-dom'

class App extends React.Component {

  state = {
    id: 0,
    username: "",
    password: "",
    avatar: "",
    bio: "",
    city: "",
    state: "",
    zipcode: 10028,
    memories: [],
    token: ""
  }

  componentDidMount(){
    if(localStorage.token){
      fetch("http://localhost:3000/users/keep_logged_in", {
        method: "GET",
        headers: {
          "Authorization": localStorage.token
        }
      })
      .then(res => res.json())
      .then(this.helpHandleResponse) 

    }

  }

  helpHandleResponse = (res) => {
    // console.log("first res", res)
    if(res.error){
      console.error(res.error)
    } else {
      localStorage.token = res.token 
      this.setState({
        id: res.user.id,
        username: res.user.username,
        password: res.user.password,
        avatar: res.user.avatar,
        bio: res.user.bio,
        city: res.user.city,
        state: res.user.state,
        zipcode: res.user.zipcode,
        memories: res.user.memories,
       
        token: res.token
      })
      this.props.history.push("/profile")
    }
  }


  render() {
    return(
    <div >
        {/* <NavBar token={this.state.token} handleLogout={this.handleLogout}/> */}
        <Switch>
          <Route path="/" exact component={Home}></Route>
          <Route path="/login" render={this.renderLoginForm}></Route>
          <Route path="/register" render={this.renderRegisterForm}></Route>
          <Route path="/profile" render={this.renderProfile}></Route>
         
          <Route render={ () => <p>Page not Found</p>}></Route>
        </Switch>

      </div>
    )
  }
  
  
}

export default App 

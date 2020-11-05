import React from 'react'
import {Link, Switch, Route} from 'react-router-dom'
import './App.css';
import Home from './components/Home'
import {connect} from 'react-redux'
// import LoginForm from './components/LoginForm'
// import Map from './components/Map'
import NavBar from './components/NavBar'
import NeighborhoodContainer from './components/NeighborhoodContainer'
import './index.css'
// import { Container, Button} from 'semantic-ui-react'

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
    // if(localStorage.token){
    //   fetch("http://localhost:3000/users/keep_logged_in", {
    //     method: "GET",
    //     headers: {
    //       "Authorization": localStorage.token
    //     }
    //   })
    //   .then(res => res.json())
    //   .then(this.helpHandleResponse) 

    // }
    fetch("http://localhost:3000/neighborhoods")
        .then(res => res.json())
        .then((neighborhoodsArray) => {
          this.props.setNeighborhoods(neighborhoodsArray)
        })
    
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
    
       
        token: res.token
      })
      this.props.history.push("/profile")
    }
  }


  handleLoginSubmit = (userInfo) => {
    // console.log("we are inside of the handle login submit", userInfo)
    fetch("http://localhost:3000/users/login", {
      method: "POST",
      headers: {
        "Content-type": "Application/json"
      },
      body: JSON.stringify({
        username: userInfo.username,
        password: userInfo.password
      })
    })
    .then(res => res.json())
    .then(this.helpHandleResponse)
  }


  renderNeighborhoodContainer = () => {
    return <NeighborhoodContainer/>
  }


  render() {
    console.log(this.props, "APP");
    return(
    <div >
        <NavBar token={this.state.token} handleLogout={this.handleLogout}/>
        {/* <NeighborhoodContainer></NeighborhoodContainer> */}
        {/* <img className="homepage"text-align='center' src='https://images.unsplash.com/photo-1599667083758-ba06e45c6d00?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80' alt='view of the rockaways'></img> */}
        {/* <LoginForm detail={this.state}></LoginForm> */}

        {/* <Link to="/neighborhoods">Neighborhoods</Link> */}


        <Switch>
          <Route path="/" exact component={Home}></Route>
          <Route path="/neighborhoods" exact render={this.renderNeighborhoodContainer}></Route>
          <Route path="/login" render={this.renderLoginForm}></Route>
          <Route render={ () => <p>Page not Found</p>}></Route>
          {/* <Route path="/map" render={this.renderMap}></Route> */}
          {/* <Route path="/register" render={this.renderRegisterForm}></Route> */}
          {/* <Route path="/profile" render={this.renderProfile}></Route>  */}
        </Switch>

      </div>
    )
  }
  
  
}


//first argument of the first ()
    //mapStateToProps (or Get Information). This is a callback
        //mapStateToProp's first        argumens the    gloalStateObj
        //mapStateToProps returns a POO that will be merged into the prps of the compnent 


//second argument of the first ()
  //mapDispatchToProps(Sending information )
   //mapDispatchToProps is a POJO that will be merged into the props
    //components

let setNeighborhoods = (array) => {
  return {
    type: "SET_NEIGHBORHOODS_PLEASE",
    payload: array
  }
}


let mapDispatchToProps = {
  setNeighborhoods: setNeighborhoods
   
}


export default connect(null, mapDispatchToProps)(App);

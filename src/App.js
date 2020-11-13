import React from 'react'
import {Switch, Route} from 'react-router-dom'
import './App.css';
import Home from './components/Home'
import {connect} from 'react-redux'
import LoginForm from './components/LoginForm'
import Profile from './components/Profile'
import Map from './components/Map'
import NavBar from './components/NavBar'
import NeighborhoodContainer from './components/NeighborhoodContainer'
import FavoriteContainer from './components/FavoriteContainer'
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
 
    fetch("http://localhost:3000/neighborhoods")
        .then(res => res.json())
        .then((neighborhoodsArray) => {
          this.props.setNeighborhoods(neighborhoodsArray)
        })

    if(localStorage.token) {
      fetch("http://localhost:3000/keep_logged_in", {
        method: "GET" ,
        headers: {
          "Authorization": localStorage.token
        }
      })
      .then(res => res.json())
      .then(resp => {
        if(resp.token) {
          // console.log("a response", resp)
          this.props.setUserInfo(resp)
        }
      })

    }
    
  }





  renderNeighborhoodContainer = () => {
    return <NeighborhoodContainer/>
  }

  renderProfile = () => {
    return <Profile/>
  }

  // showSingleFavorite = (routerProps) => {
  //   let id = routerProps.match.params.id
  //   let num_id = parseInt(id)
  //   // let foundFavorite = this.props.allFavorites.find(neighborhood_id => neighborhood_id === num_id)
  //   if(foundFavorite){
  //     return <Favorite {...routerProps} foundFavorite={foundFavorite}/>
  //   } else {
  //     return <p>404 page</p>
  //   }

  // }

  render() {
    console.log(this.state.token, "APP");
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
          <Route path="/login" component={LoginForm} render={this.renderLoginForm}></Route>
          <Route path="/profile" render={this.renderProfile}></Route> 
          <Route path="/favorites" exact component={FavoriteContainer}></Route>
          <Route path="/neighborhoods/:id" exact render={this.showSingleFavorite}></Route> 
          <Route path="/map" exact component={Map}></Route>
          <Route render={ () => <p>Page not Found</p>}></Route>
          {/* <Route path="/map" render={this.renderMap}></Route> */}
          {/* <Route path="/register" render={this.renderRegisterForm}></Route> */}
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

let setUserInfo = (userInfo) => {
  console.log("this is userInfo", userInfo)
  return {
    type: "SET_USER_INFO",
    payload: userInfo
  }
}


// let setFavorite = (array) => {
//   return {
//     type: "SET_FAVORITE_NEIGHBORHOOD",
//     payload: userInfo
//   }
// }


let mapDispatchToProps = {
  setNeighborhoods: setNeighborhoods,
  setUserInfo: setUserInfo
   
}

// let mapStateToProps = (globalState) => {
//   return {
//     allFavorites: globalState.userInformation.neighborhood_id
//   }

// }

export default connect(null, mapDispatchToProps)(App);

import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom' ;
import './index.css'
import App from './App';
import 'semantic-ui-css/semantic.min.css'
import 'bootstrap/dist/css/bootstrap.min.css';


//REDUX 
import {createStore, combineReducers} from 'redux'
import {Provider} from 'react-redux'


//this is a reducer (func. definition)
  //the return value of our reducer BECOMES our global state

//################ Neighborhood reducer #######################
let initialStateofNeighborhoodReducer = {
  neighborhoods: [],
  username: "",
}

let neighborhoodReducer = (state = initialStateofNeighborhoodReducer, action) => {
  switch(action.type) {
    case "SET_NEIGHBORHOODS_PLEASE":
      let theInfoFromComponent = action.payload;
      return {
        ...state,
        neighborhoods: theInfoFromComponent
      }
    default: 
      return state
  }
 
} 

//############ User reducer #################################

let initialStateofUserReducer = {
  username: "",
  id: "",
  avatar: "",
  bio: "",
  city: "",
  state: "",
  zipcode: "",
  favorites: [],
  //point favorites to array
  token: "",

}


let userReducer = (state = initialStateofUserReducer, action) => {
  switch(action.type) {
    case "SET_USER_INFO":
      return {
        //the return value becomes the state
        
        ...state,
        // username: action.payload.user.username,
        ...action.payload.user,
        token: action.payload.token
      }
      case "SET_FAVORITE":
        let copyOfFavorites = [...state.favorites, action.payload]
      return {
        ...state,
        favorites: copyOfFavorites
      }
      // case "DELETE_FAVORITE":
      //   let copyAllFavorites = [...state.favorites]
    default: 
      return state
  }
}

//combineReducers takes in a POJO
  //the keys become the highest level keyys of a global state
  //the values are the reducers

  let storingAll = {
    neighborhoodInformation: neighborhoodReducer,
    userInformation: userReducer
  }

  let rootReducer = combineReducers(storingAll)


let storeObj = createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )


ReactDOM.render(
  <Router>
    <Provider store={storeObj}> 
      <App />
    </Provider>
  </Router>,
    document.getElementById('root')
);



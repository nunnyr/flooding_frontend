import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom' ;
import './index.css'
import App from './App';
import 'semantic-ui-css/semantic.min.css'

//REDUX 
import {createStore} from 'redux'
import {Provider} from 'react-redux'


//this is a reducer (func. definition)
  //the return value of our reducer BECOMES our global state

let initialStateofNeighborhoodReducer = {
  neighborhoods: []
}

let storeReducer = (state = initialStateofNeighborhoodReducer, action) => {
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

let storeObj = createStore(
  storeReducer,
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



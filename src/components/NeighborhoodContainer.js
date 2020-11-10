import React from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import Neighborhood from './Neighborhood'


// import { FormTextArea } from 'semantic-ui-react';
// import map 
// import {NavLink} from 'react-router-dom'
import { Card, Image, Button} from 'semantic-ui-react'

class NeighborhoodContainer extends React.Component{


    // addToFavorites = (evt) => {
    //     console.log("adding to favorites")
    //     console.log(this.props.neighborhoods)
        //do I need the preventdefault

        

        
        // fetch("http/localhost:3000/favorites", {
        //     method: "POST",
        //     headers: {
        //         "Content-type": "application/json"
        //     },
        //         body: JSON.stringify({
        //          //I don't know which neighborhood to add
        //          title: this., 
        //          //my ID needs to come from globalState

        //          user_id:user_1.id,
        //          neighborhood_id:neigh_1.id

        //         })
        // })


    //}

    render(){
        // console.log("flatiron", this.props)
        let arrayOfNeighborhoods = this.props.neighborhoods.map(neighborhood => {
            console.log("testing", neighborhood)
            
            // <img key={neighborhood.id} src={neighborhood.image}/>
            return (
                <Neighborhood key={neighborhood.id} neighborhood={neighborhood}/>
            )
           
        })
        return(
            <div>
                <h1>Neighborhoods</h1>
                <ul>
                    {arrayOfNeighborhoods}
                </ul>
                </div>
        )
    }
}


//first argument of the first ()
    //mapStateToProps (or Get Information). This is a callback
        //mapStateToProp's first        argumens the    gloalStateObj
        //mapStateToProps returns a POJO that will be merged into the prps of the compnent 

let mapStateToProps = (globalState) => {
    return {
        neighborhoods: globalState.neighborhoodInformation.neighborhoods
    }
    }
    



export default connect(mapStateToProps)(NeighborhoodContainer)
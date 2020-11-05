import React from 'react';
///any component that needs to get/set information from our global state needs the line below
import {connect} from 'react-redux';
// import { FormTextArea } from 'semantic-ui-react';
// import map 
// import {NavLink} from 'react-router-dom'
// import { Header, Icon, Menu, Segment, Sidebar} from 'semantic-ui-react'

class NeighborhoodContainer extends React.Component{

    render(){
        console.log(this.props.neighborhoods)
        let arrayOfNeighborhoods = this.props.neighborhoods.map(neighborhood => {
            
            // <img key={neighborhood.id} src={neighborhood.image}/>
            return <li key={neighborhood.id}>{neighborhood.neighborhood_name} </li>
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
        //mapStateToProps returns a POO that will be merged into the prps of the compnent 

let mapStateToProps = (globalState) => {
    return {
        neighborhoods: globalState.neighborhoods
    }
    }
    



export default connect(mapStateToProps)(NeighborhoodContainer)
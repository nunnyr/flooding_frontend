import React from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';

// import { FormTextArea } from 'semantic-ui-react';
// import map 
// import {NavLink} from 'react-router-dom'
import { Card, Image, Button} from 'semantic-ui-react'

class NeighborhoodContainer extends React.Component{


    removeClick = () => {
        console.log("Remove me")

    }

    render(){
        let arrayOfNeighborhoods = this.props.neighborhoods.map(neighborhood => {
            console.log("testing", neighborhood)
            
            // <img key={neighborhood.id} src={neighborhood.image}/>
            return (
                <div>
                    <Card>
                     <Link to={`neighborhoods/${neighborhood.id}`}>{neighborhood.neighborhood_name}</Link>
                     <Card.Header key={neighborhood.id}> </Card.Header>
                      <Image src={neighborhood.image}></Image> 
                     <Card.Description> {neighborhood.about} </Card.Description>
                     <Button onClick={this.removeClick}>Remove</Button>
                     </Card>
            </div>
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
        //mapStateToProps returns a POO that will be merged into the prps of the compnent 

let mapStateToProps = (globalState) => {
    return {
        neighborhoods: globalState.neighborhoodInformation.neighborhoods
    }
    }
    



export default connect(mapStateToProps)(NeighborhoodContainer)
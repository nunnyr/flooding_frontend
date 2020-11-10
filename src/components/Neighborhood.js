import React from 'react'
import {Link} from 'react-router-dom'
import { Card, Image, Button} from 'semantic-ui-react'
import {connect} from 'react-redux';


class Neighborhood extends React.Component {


    addToFavorites = (evt) => {
        // evt.preventDefault()
        console.log("neighborhood", this.props)
        // console.log("token", this.props.token)
        console.log("userInformation", localStorage.token)

        fetch("http://localhost:3000/favorites", {
            method: "POST",
            headers: {
                "Content-type": "application/json",
                "Authorization": localStorage.token
            },
            body: JSON.stringify({
                title: this.props.neighborhood.neighborhood_name,
                image: this.props.neighborhood.image,
                about:this.props.neighborhood.about,
                neighborhood_id: this.props.neighborhood.id
          
            })
        })
        .then(res => res.json())
        .then((newFavorite) => {
            console.log("in the body of the promise")
            this.props.setFavorite(newFavorite)
            //this event is dispatching an action
            //then changing my state
            //then bringing that global state up
        })
        
    }

    render(){
        let {neighborhood} = this.props
        return(
            <Card>
                     <Link to={`neighborhoods/${neighborhood.id}`}>{neighborhood.neighborhood_name}</Link>
                     <Card.Header key={neighborhood.id}> </Card.Header>
                    <Image src={neighborhood.image}></Image> 
                     <Card.Description> {neighborhood.about} </Card.Description>
                     <Button onClick={this.addToFavorites} >Add To Favorites</Button>
            </Card>
        )
    }


}


//add a favote action + delete action 

let setFavorite = (setFave) => {
    return {
        type: "SET_FAVORITE",
        payload: setFave
    }
}

let deleteFavorite = (deleteFave) => {
    return {
        type: "DELETE_FAVORITE",
        payload: deleteFave
    }
}

//mapDispatchToProps
//connect(null, mapDispatchToProps)

// let mapStateToProps = (globalState) => {
//     return {
//         token: globalState.userInformation.token
//     }
// }

//definition down, invocation up

// let mapStateToProps = (globalState) => {
//     return {
//         username: globalState.userInformation,
//         neighborhoods: globalState.neighborhoodInformation.neighborhoods

//     }
// }

let mapDispatchToProps = {
    setFavorite: setFavorite,
    deleteFavorite: deleteFavorite
}

export default connect(null, mapDispatchToProps)(Neighborhood);
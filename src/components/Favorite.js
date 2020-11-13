import React from 'react'
import {connect} from 'react-redux'
import { Card, Image, Button} from 'semantic-ui-react'
import {Link} from 'react-router-dom'

class Favorite extends React.Component{

    deleteFavorites = (evt) => {
        // evt.preventDefault()
        console.log("favorites", this.props.favorites)
        // console.log("token", this.props.token)
        console.log("userInformation", localStorage.token)

        fetch(`http://localhost:3000/favorites/${this.props.favoriteObject.id}`, {
            method: "DELETE",
            headers: {
                "Content-type": "application/json",
                "Authorization": localStorage.token
            },
        })
        .then(res => res.json())
        .then((deletingFavorite) => {
            console.log("in the body of the delete promise")
            this.props.deleteFavorite(deletingFavorite)
            
        })
        
    }


    render() {
        let {favoriteObject} = this.props
        
        
       
        return(
            <div>
                <ul>
                    <div>
                     <Card>
                     <Link to={`favorites/${favoriteObject.id}`}>{favoriteObject.title}</Link>
                      <Card.Header key={favoriteObject.id}>{favoriteObject.title} </Card.Header>
                       <Image src={favoriteObject.image}></Image>
                      <Card.Description> {favoriteObject.about} </Card.Description>
                      <Button onClick={this.deleteFavorites}>Remove</Button>
                      
                      </Card>
                </div>
                </ul>
                </div>
        )}
}


let deleteFavorite = (deleteFave) => {
    return {
        type: "DELETE_FAVORITE",
        payload: deleteFave
    }
}

let mapDispatchToProps = {
    deleteFavorite: deleteFavorite
}


let mapStateToProps = (globalState) => {
    return {
        neighborhoods: globalState.userInformation
    }
    }
export default connect(mapStateToProps, mapDispatchToProps)(Favorite);
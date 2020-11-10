import React from 'react'
import {connect} from 'react-redux'
import Favorite from './Favorite'


class FavoriteContainer extends React.Component{
    render(){
        let arrayOfComponents = this.props.favorites.map(favorite => {
            return <Favorite></Favorite>
        })
        return(
            <ul>
                <h1>here</h1>
            </ul>
        )
    }
}

let mapStateToProps = (something) => {
    return {
        favorites: something.userInformation.favorites
    }
}

export default connect(mapStateToProps)(FavoriteContainer)
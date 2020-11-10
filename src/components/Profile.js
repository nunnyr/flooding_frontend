import React from 'react';
import {connect} from 'react-redux'
import {withRouter} from 'react-router-dom'
import { Card, Icon, Image, Segment} from 'semantic-ui-react'
// import Accordion from 'react-bootstrap/Accordion'
// import NeighborhoodContainer from './NeighborhoodContainer';
import Favorite from './Favorite'

class Profile extends React.Component {

    render() {
        // console.log("testing1", this.props.favorites)
        //create a separate function that will map through favorites
        //create a show page for favorites

        let arrayOfFavorites = this.props.favorites.map(favorite => {
            console.log("testing", favorite.id)
            return <Favorite key={favorite.id} favoriteObject={favorite}/>
        })
       
        let {username, avatar, bio, city, state, zipcode}=this.props.username
       
        return (
            <div>
                <h1>Profile page</h1>
                
                <Segment>
                 <Card>
                    <Image src={"https://i.imgur.com/IE1BMvY.jpg"} wrapped ui={false} />
                    
                    <Card.Content>
                    <Card.Header>{username}</Card.Header>
                    <Card.Meta>
                        <span className='city'>{city}</span>
                        <span className='state'>{state}</span>
                        <span className='zipcode'>{zipcode}</span>
                    </Card.Meta>
                    <Card.Description>
                        {bio}
                    </Card.Description>
                    </Card.Content>
                    <Card.Content extra>
                        <Icon name='user' />
                    </Card.Content>
                 </Card>
             </Segment>

             <Segment>
                 <h1>Favorites</h1>
                    {arrayOfFavorites}
                  
                  {/* <NeighborhoodContainer/> */}

             </Segment>


            </div>
        )
    }


}

let mapStateToProps = (globalState) => {
    console.log("this is gState", globalState)
    return {
        username: globalState.userInformation,
        favorites: globalState.userInformation.favorites
    }
}

export default connect(mapStateToProps)(Profile)
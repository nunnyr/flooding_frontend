import React from 'react'
import {connect} from 'react-redux'
import { Card, Image, Button} from 'semantic-ui-react'
import {Link} from 'react-router-dom'

class Favorite extends React.Component{



    render() {

        // console.log("displaying showFave", this.props.userInformation.favorites)
        let {favoriteObject} = this.props

        
        // let arrayOfFavorites = this.props.userInformation.favorites.map(favorite => {
        //     // console.log("testing", favorite)
            
            
            // return (
            //     <div>
            //         <Card>
            //          <Card.Header key={favoriteObject.id}> </Card.Header>
            //           <Image src={favoriteObject.image}></Image> 
            //          <Card.Description> {favoriteObject.about} </Card.Description>
            //          {/* <Button onClick={this.removeClick}>Remove</Button> */}
            //          </Card>
            // </div>
            // )
           
       
        return(
            <div>
                {/* <h1>Neighborhoods</h1> */}
               
                <ul>
                    <div>
                     <Card>
                     <Link to={`favorites/${favoriteObject.id}`}>{favoriteObject.title}</Link>
                      <Card.Header key={favoriteObject.id}>{favoriteObject.title} </Card.Header>
                       <Image src={favoriteObject.image}></Image>
                      <Card.Description> {favoriteObject.about} </Card.Description>
                      <Button>Remove</Button>
                      {/* <Button onClick={this.removeFavorite}>Remove Favorite</Button> */}
                      
                      </Card>
                </div>
                </ul>
                </div>
        )}
}





let mapStateToProps = (globalState) => {
    return {
        neighborhoods: globalState.userInformation
    }
    }
export default connect(mapStateToProps)(Favorite);
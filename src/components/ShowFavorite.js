import React from 'react'
import {connect} from 'react-redux'

class ShowFavorite extends React.Component{

    render() {
        let {foundFavorite} = props
    return(
        <>
        <div>
            <h2>New page</h2>
           {/* <h2>{foundFavorite.neighborhood_id}</h2>
           <img src={foundFavorite.image} ></img> */}
        </div>
        </>
        )
    }
}


let mapStateToProps = (globalState, ownProps) => {
    // let id = ownProps.match.params.id
    // let num_id = parseInt(id)

    // let foundFavorite = globalState.userInformation.users.find(neighborhood =>  neighborhood.id === num_id)
    // return {
    //     singleFavorite: foundFavorite 
    // }
    console.log(id)
    console.log("MSTP", mapStateToProps)
    console.log("2nd", ownProps)
}
export default connect(mapStateToProps)(ShowFavorite)
import React from 'react';
import {connect} from 'react-redux'
import {withRouter} from 'react-router-dom'
import { Card, Icon, Image, Segment} from 'semantic-ui-react'

class Profile extends React.Component {

    render() {
        // let {username, avatar, bio, city, state, zipcode}=this.props.username
        console.log("lol what is this", this.props.username)
        return (
            <div>
                <h1>Profile page</h1>
                {/* <Segment>
                 <Card>
                    <Image src={avatar} wrapped ui={false} />
                    
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
             </Segment> */}
            </div>
        )
    }


}

let mapStateToProps = (globalState) => {
    return {
        username: globalState.userInformation.users
    }
}

export default connect(mapStateToProps)(Profile)
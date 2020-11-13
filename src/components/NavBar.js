import React from 'react';

import {NavLink} from 'react-router-dom'
import { Header, Icon, Image, Menu, Segment, Sidebar} from 'semantic-ui-react'


const NavBar = (props) => {

    return(
        <div>
            
            <Segment basic inverted>
            <Header className="title" size='huge'>Hurricane Sandy App</Header>
            </Segment>
             <Sidebar.Pushable as={Segment}>
                <Sidebar
                as={Menu}
                animation='overlay'
                icon='labeled'
                inverted
                vertical
                visible
                width='thin'
                direction="right"
                >
                <Menu.Item>
                    <Icon name='home' />
                    <NavLink to="/">Home</NavLink>
                </Menu.Item>
                <Menu.Item>
                    <Icon name='key' />
                    <NavLink to="/login">Login</NavLink>
                </Menu.Item>
                <Menu.Item >
                    <Icon name='search' />
                    <NavLink to="/neighborhoods">Neighborhoods</NavLink>
                </Menu.Item>
                <Menu.Item>
                    <Icon name='user' />
                    <NavLink to="/profile">Profile</NavLink>
                </Menu.Item>
                <Menu.Item>
                    <Icon name='map' />
                    <NavLink to="/map">Map</NavLink>
                </Menu.Item>
                </Sidebar>
                <Sidebar.Pusher>
                <Segment basic>
                    <Image src='https://images.unsplash.com/photo-1599667083758-ba06e45c6d00?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80' />
                </Segment>
                </Sidebar.Pusher>
            </Sidebar.Pushable>
    
           
        </div>
    )
}

export default NavBar;
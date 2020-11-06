import React from 'react'
import {connect} from 'react-redux'
import {withRouter} from 'react-router-dom'
// import { Button, Form, Segment } from 'semantic-ui-react'


class LoginForm extends React.Component{

    state={
      username:"",
      password: ""
    }

  handleSubmit=(evt)=>{
      evt.preventDefault()
      fetch("http://localhost:3000/login", {
        method: "POST",
        headers: {
          "Content-type": "Application/json"
        },
        body: JSON.stringify({
          username: this.state.username,
          password: this.state.password
        })
      })
      .then(res => res.json())
      .then(resp => {
        if(resp.error) {
          this.setState({
            error_message: resp.error
          })
        } else {
          this.props.setUserInfo(resp)
          localStorage.token = resp.token
          //clear out my form but not neccesary
          // this.setState({
          //   username: "",
          //   password: ""
          // })
          this.props.history.push("/profile")
        }
      })


  }
  
  handleChange=(evt)=>{
    // console.log("this is evt", evt.target.value)
    // console.log("this is evt.name", evt.target.name)
    this.setState({
      [evt.target.name]:evt.target.value
    })
  }


  
    render(){
    
      console.log(this.props, "FORM")
        
      return(

        <>
        <h2>Login Form</h2>
        <form onSubmit={this.handleSubmit}>
          <label htmlFor="username">Username</label>
          <input type="text" id="username" name="username" onChange={this.handleChange} value={this.state.username}/>
          <label htmlFor="password">Password</label>
          <input type="password" id="password" name="password" onChange={this.handleChange} value={this.state.password}/>
          <input type="Submit" value="Login"/>
        </form>
        </>
        
        
        // <Segment inverted>
        //   <Form inverted onSubmit={this.handleSubmit}>
        //     <Form.Group widths='equal'>
        //       <Form.Input fluid label='Username'
        //         value={this.state.username} 
        //         name="username"
        //         placeholder='Username'
        //         onChange={this.handleChange}/>
        //       <Form.Input fluid label='Password' 
        //         value={this.state.password}  
        //         type= "password"
        //         name="password"
        //         placeholder='Password' 
        //         onChange={this.handleChange}/>
        //     </Form.Group>
        //     <Button type='submit'>Submit</Button>
        //   </Form>
        // </Segment>
      )
    }
}

//I need to send information out
//ACTION CREATOR

let setUserInfo = (userInfo) => {
  return {
    type: "SET_USER_INFO",
    payload: userInfo
  }
}

let mapDispatch = {
    setUserInfo: setUserInfo



}


export default connect(null, mapDispatch)(withRouter(LoginForm))
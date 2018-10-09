import React, {Component} from 'react';
import Helmet from 'react-helmet';
import axios from 'axios';
// import {
//   BrowserRouter// as
//   // Router,
//   // Route,
//   // Link,
//   // Redirect,
//   // withRouter
// } from "react-router-dom";
import './Signup.css';
const hip = require('../../images/hip.jpg');
const signlogo = require('../../images/OnTapLogoUpdated.png');
class Signup extends Component {

    state = {
        startTime: +Date.now(),
        email: "",
        password: ""
      }
      componentDidMount(){

        // setInterval(() => {
        //   const timeSince = (+Date.now() - this.state.startTime)/1000;
        //   this.setState({title: `Are you still there? It's been ${timeSince} seconds`}, function(){
        //     console.log("I set the state!");
        //   })
        // }, 1000)
      }

      handleInputChange = event => {
        const { name, value } = event.target;
        this.setState({
          [name]: value
        });
      }

      handleLoginButton = event => {
        event.preventDefault();
        //console.log(event.target);
        axios.post("/api/registers/signup", {email: this.state.email, password: this.state.password}).then(function(response){
            console.log("test1")

        })
        this.setState({ email: "", password: ""});
        // Route to homepage

      }

      componentDidUpdate(){
        console.log();
      }


    render() {
        return (
            <div>
               <Helmet bodyAttributes={{style: 'background: #eee'}}/>
              <div id="content">
                <img id="hip" alt="hip" src={ hip } />
                    <center>
                    <p id= "hello"> HELLO. </p>
                    <p id= "seat"> come on in and take a seat. </p>

                    </center>
              </div>
              <div id="sidebar">
              <img id= "signuplogo" src={ signlogo } />
              <br/>
                <p id="what"> what can we get for you to drink?</p>
                <br/>

                    <form>
                    <center>
                    <div class="form-group">
                        <label for="exampleInputEmail1" id="formquestion">email address</label>
                        <input name="email" onChange={this.handleInputChange} type="email" value={this.state.email} class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="enter email" />
                        <small id="emailHelp" class="form-text text-muted">we'll never share your email with anyone else.</small>
                    </div>
                    <div class="form-group">
                        <label for="exampleInputPassword1" id="formquestion">password</label>
                        <input name="password" type="password" onChange={this.handleInputChange}  class="form-control" value={this.state.password} id="exampleInputPassword1" placeholder="password" />
                    </div>
                    <button type="submit" href="/home" class="btn btn-primary">sign up</button>
                    <p id= "log"> already have an account? </p>
                    <button type="submit" href="/home" class="btn btn-primary">log in</button>

                    </center>
                    </form>

                </div>

            </div>
        )
    }
}
export default Signup;
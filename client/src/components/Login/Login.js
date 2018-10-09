import React, {Component} from 'react';
import axios from 'axios';
import {
  BrowserRouter as
  // Router,
  // Route,
  Link
  // Redirect,
  // withRouter
} from "react-router-dom";
// import logo from "../../images/OnTapLogoUpdated.png";
import Helmet from 'react-helmet';
import './Login.css';
const cheers = require('../../images/cheers.jpg');
const loglogo = require('../../images/OnTapLogoUpdated.png');
class Login extends Component {

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
        axios.get("/api/logins/login", {email: this.state.email, password: this.state.password}).then(function(response){

        })
        this.setState({ email: "", password: ""});
        // Route to homepage
        <Link to="/home" />
      }

      componentDidUpdate(){
        console.log();
      }

      // const AuthExample = () => (
      //   <Router>
      //     <div>
      //       <AuthButton />
      //       <ul>
      //         <li>
      //           <Link to="/public">Public Page</Link>
      //         </li>
      //         <li>
      //           <Link to="/protected">Protected Page</Link>
      //         </li>
      //       </ul>
      //       <Route path="/public" component={Public} />
      //       <Route path="/login" component={Login} />
      //       <PrivateRoute path="/protected" component={Protected} />
      //     </div>
      //   </Router>
      // );

    render() {
        return (
            <div>
              <Helmet bodyAttributes={{style: 'background: #eee'}}/>
              <div id="content">
                <img id="cheers" alt="cheers" src={ cheers } />
                    <center>
                    <p id= "welcome"> WELCOME BACK. </p>
                    <p id= "waiting"> we've been waiting for you. </p>

                    </center>
              </div>
              <div id="sidebar">
              <img id= "loglogo" src={ loglogo } />
              <br/>
                <p id="usual"> the usual for you?</p>
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
                    <button type="submit" onClick={this.handleLoginButton} class="btn btn-primary">log in</button>
                    <p id= "dont"> don't have an account? </p>
                    <button type="submit" onClick={this.handleLoginButton} class="btn btn-primary">sign up</button>
                    </center>
                    </form>

                </div>

            </div>
        )
    }
}

export default Login;




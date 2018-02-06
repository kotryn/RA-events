import React from 'react';
import FacebookLogin from 'react-facebook-login';
import {initAccessToken} from "./../initAccessToken"
import { Link } from 'react-router-dom'

class Login extends React.Component{

    constructor(props, context) {
        super(props, context);
        this.state = {
            login: false
        }
        this.responseFacebook = this.responseFacebook.bind(this);
    }

    responseFacebook(response) {
        console.log(response.status);
        initAccessToken(response.accessToken);
        //if()
        this.setState({login: true});
        //anything else you want to do(save to localStorage)...
    }

    componentWillMount(){

    }

    render () {
        return (
            <div>
                <FacebookLogin
                    appId="190009001737616"
                    autoLoad={false}
                    fields="name"
                    /*scope="public_profile,email,rsvp_event"*/
                    callback={this.responseFacebook}
                />
                <p>
                    <Link to={'/test'}>{this.state.login && 'LOGIN'}</Link>
                </p>

            </div>
        );
    }

}

export default Login;
/*<FacebookLogin socialId="190009001737616"
                               language="pl_PL"
                               scope="public_profile,email,rsvp_event"
                               responseHandler={this.responseFacebook}
                               xfbml={true}
                               fields="id,email,name"
                               version="v2.5"
                               className="facebook-login"
                               buttonText="Login With Facebook"/>*/
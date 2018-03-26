import React from 'react';
import FacebookLogin from 'react-facebook-login';

import {initAccessToken} from "./../initAccessToken"
import {appConfig} from "../appconfig";
import Main from "./Main"

class Login extends React.Component{

    constructor(props, context) {
        super(props, context);
        this.state = {
            login: false
        }
        this.responseFacebook = this.responseFacebook.bind(this);
    }

    responseFacebook(response) {
        initAccessToken(response.accessToken, true, response.id, response.signedRequest, response.userID);
        this.setState({login: true});
    }

    componentWillMount(){
        if(appConfig.isLogin){
            this.setState({login: true});
        }
    }

    render () {
        const component = this.state.login ? <Main /> : <FacebookLogin
                                                            appId="190009001737616"
                                                            autoLoad={false}
                                                            fields="name"
                                                            /*scope="public_profile,email,rsvp_event"*/
                                                            callback={this.responseFacebook}
                                                        />;

        return (
            <div>
                {component}
            </div>
        );
    }

}

export default Login;
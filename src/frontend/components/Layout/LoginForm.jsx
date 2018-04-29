import React from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import { inject, observer } from 'mobx-react';
import Paper from 'material-ui/Paper';
import { Redirect } from 'react-router-dom';

const style = {
    margin: 15,
};


const LoginForm = ({ rootStore: { domainStore: { userStore } } }) => (
    userStore.loggedInUser ?
        (userStore.loggedInUser.role === 'admin' ?
            <Redirect to="/dashboard" /> :
            <Redirect to={`/profile/${userStore.loggedInUser._id}`} />) :
        <div>
            <center>
                <TextField
                    hintText="Enter your Username"
                    floatingLabelText="Username"
                    name="username"
                    onChange={(e, value) => userStore.onSigninChange(e, value)}
                />
                <br />
                <TextField
                    type="password"
                    hintText="Enter your Password"
                    floatingLabelText="Password"
                    name="password"
                    onChange={(e, value) => userStore.onSigninChange(e, value)}
                />

                <br />
                <RaisedButton label="Log In" primary={true} style={style} onClick={userStore.handleSignin} />
                <br />
                <a href="#/register">
                <RaisedButton label="Register" secondary={true} style={style} />
                </a>
            </center>

        </div>
)
export default inject('rootStore')(observer(LoginForm));



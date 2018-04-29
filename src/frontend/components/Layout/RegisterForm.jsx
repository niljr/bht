import React from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import { inject, observer } from 'mobx-react';
import Paper from 'material-ui/Paper';
import { Link } from 'react-router-dom';
const style = {
    margin: 15,
};


const RegisterForm = ({ rootStore: { domainStore: { userStore } } }) => (

    <center>
        <div>
            <TextField
                hintText="First Name"
                floatingLabelText="First Name"
                name="firstName"
                onChange={(e, value) => userStore.onChange(e, value)}
            />
            <br />
            <TextField
                hintText="Middle Name"
                floatingLabelText="Middle Name"
                name="middleName"
                onChange={(e, value) => userStore.onChange(e, value)}
            />
            <br />
            <TextField
                hintText="Last Name"
                floatingLabelText="Last Name"
                name="lastName"
                onChange={(e, value) => userStore.onChange(e, value)}

            />
            <br />
            <TextField
                hintText=" Username"
                floatingLabelText="Username"
                name="username"
                onChange={(e, value) => userStore.onChange(e, value)}

            />
            <br />
            <TextField
                name="password"
                type="password"
                hintText="Password"
                floatingLabelText="Password"
                onChange={(e, value) => userStore.onChange(e, value)}

            />
            <br />
            <TextField
                hintText="Email Address"
                floatingLabelText="Email Address"
                name="emailAddress"
                onChange={(e, value) => userStore.onChange(e, value)}
            />
            <TextField
                hintText="Contact Number"
                floatingLabelText="Contact Number"
                name="contactNumber"
                onChange={(e, value) => userStore.onChange(e, value)}
            />
            <br />
            <TextField
                name="key"
                hintText="Enter Your Account Key"
                floatingLabelText="Account Key"
                onChange={(e, value) => userStore.onChange(e, value)}
            />
            <br />
            <Link to="/login">
                <RaisedButton label="Register" secondary={true} style={style} onClick={userStore.registerUser} />
            </Link>
        </div>
    </center>
)
export default inject('rootStore')(observer(RegisterForm));



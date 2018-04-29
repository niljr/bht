import { inject, observer } from 'mobx-react';
import React, { Component } from 'react';
import Paper from 'material-ui/Paper';
import TextField from 'material-ui/TextField';
import { List, ListItem } from 'material-ui/List';
import { orange500, blue500 } from 'material-ui/styles/colors';
import Divider from 'material-ui/Divider';

const textFieldStyle = {
    underlineFocusStyle: {
        borderColor: orange500,
    },
    underlineStyle: {
        borderColor: blue500
    },
    floatingLabelStyle: {
        color: orange500,
    },
    floatingLabelFocusStyle: {
        color: blue500,
    },
}
const formTitleStyle = {
    margin: {
        marginLeft: 10,
        color: '#FF9800',
        fontSize: 20,
        marginTop: 20,
        display: 'block'
    }
}

const Something2 = ({ rootStore: { domainStore: { boardingHouseStore } }, match }) => {
    const def = Object.keys(match.params).length !== 0 ? boardingHouseStore.selectedBh : boardingHouseStore.bhInfo



    return <div>
        <Paper zDepth={2}>

            <List>
                <label style={formTitleStyle.margin}>Owner Information</label>

                <TextField
                    hintText="Last Name"
                    floatingLabelText="Last Name"
                    name="lastName"
                    onChange={(e, value, param) => boardingHouseStore.change(e, value, "ownerInfo")}
                    underlineFocusStyle={textFieldStyle.underlineFocusStyle}
                    underlineStyle={textFieldStyle.underlineStyle}
                    floatingLabelStyle={textFieldStyle.floatingLabelStyle}
                    floatingLabelFocusStyle={textFieldStyle.floatingFocusLabelStyle}
                    style={{ marginLeft: 20 }}
                    underlineShow={false}
                    defaultValue={def.ownerInfo.lastName}

                /><Divider />

                <TextField
                    hintText="First Name"
                    floatingLabelText="First Name"
                    onChange={(e, value, param) => boardingHouseStore.change(e, value, "ownerInfo")}
                    name="firstName"
                    underlineFocusStyle={textFieldStyle.underlineFocusStyle}
                    underlineStyle={textFieldStyle.underlineStyle}
                    floatingLabelStyle={textFieldStyle.floatingLabelStyle}
                    floatingLabelFocusStyle={textFieldStyle.floatingFocusLabelStyle}
                    style={{ marginLeft: 20 }}
                    underlineShow={false}
                    defaultValue={def.ownerInfo.firstName}

                /><Divider />

                <TextField
                    hintText="Middle Name"
                    floatingLabelText="Middle Name"
                    onChange={(e, value, param) => boardingHouseStore.change(e, value, "ownerInfo")}
                    name="middleName"
                    underlineFocusStyle={textFieldStyle.underlineFocusStyle}
                    underlineStyle={textFieldStyle.underlineStyle}
                    floatingLabelStyle={textFieldStyle.floatingLabelStyle}
                    floatingLabelFocusStyle={textFieldStyle.floatingFocusLabelStyle}
                    style={{ marginLeft: 20 }}
                    underlineShow={false}
                    defaultValue={def.ownerInfo.middleName}
                /><Divider />

                <TextField
                    hintText="Contact Number"
                    floatingLabelText="Contact Number"
                    name="contactNumber"
                    onChange={(e, value, param) => boardingHouseStore.change(e, value, "ownerInfo")}
                    underlineFocusStyle={textFieldStyle.underlineFocusStyle}
                    underlineStyle={textFieldStyle.underlineStyle}
                    floatingLabelStyle={textFieldStyle.floatingLabelStyle}
                    floatingLabelFocusStyle={textFieldStyle.floatingFocusLabelStyle}
                    style={{ marginLeft: 20 }}
                    underlineShow={false}
                    defaultValue={def.ownerInfo.contactNumber}

                /><br />
            </List>
        </Paper>
    </div>
}

export default inject('rootStore')(observer(Something2));

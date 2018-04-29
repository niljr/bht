import React from 'react';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import RaisedButton from 'material-ui/RaisedButton';
import Divider from 'material-ui/Divider';
import { RadioButton, RadioButtonGroup } from 'material-ui/RadioButton';
import { orange500, blue500 } from 'material-ui/styles/colors';
import TextField from 'material-ui/TextField';
import { inject, observer } from 'mobx-react';

import AppBar from 'material-ui/AppBar';
import { List, ListItem } from 'material-ui/List';
import Profile from './Profile';


const styles = {
    block: {
        maxWidth: 250,
    },
    radioButton: {
        marginBottom: 16,
    },
};

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
const OwnerMenu = ({ rootStore: { domainStore: { boardingHouseStore, userStore } } }) => (
    userStore.user !== "owner" ? <Redirect to="/" /> :

        <div>
            <Profile />
            <Drawer docked={true}
                open={true}
                width={"15%"}
            >
                <AppBar
                    title='Menu'
                // showMenuIconButton={false}

                />
                <List>
                    <a href="/#/cmenu" style={{ "textDecoration": "none" }}>
                        <MenuItem>
                            Logout
                        </MenuItem>
                    </a>

                </List>

            </Drawer>
        </div>
);
export default inject('rootStore')(observer(OwnerMenu));

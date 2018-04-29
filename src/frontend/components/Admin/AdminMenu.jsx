import React from 'react';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import RaisedButton from 'material-ui/RaisedButton';
import Divider from 'material-ui/Divider';
import { RadioButton, RadioButtonGroup } from 'material-ui/RadioButton';
import { orange500, blue500 } from 'material-ui/styles/colors';
import TextField from 'material-ui/TextField';

import AppBar from 'material-ui/AppBar';
import { List, ListItem } from 'material-ui/List';


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
export default class AdminMenu extends React.Component {

    constructor(props) {
        super(props);
        this.state = { open: true };
    }

    handleToggle = () => this.setState({ open: !this.state.open });

    render() {
        return (
            <div>

                <Drawer docked={true}
                    open={this.state.open}
                    width={"20%"}
                >
                    <AppBar
                        title='Admin Menu'
                    // showMenuIconButton={false}

                    />
                    <List>
                        <MenuItem>
                            <a href="/#/dashboard" style={{ "textDecoration": "none" }}>
                                Dashboard
                            </a>
                        </MenuItem>
                        <MenuItem>
                            <a href="/#/reports" style={{ "textDecoration": "none" }}>
                                Reports
                            </a>
                        </MenuItem>
                    </List>

                </Drawer>
            </div>
        );
    }
}
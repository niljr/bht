import React from 'react';
import { Switch, Route, HashRouter as Router } from 'react-router-dom';
import Dashboard from '../Admin/DashBoard';
import AppBar from 'material-ui/AppBar';
import ClientHome from "../Client/Home";
import LoginForm from "./LoginForm"
import RegisterForm from "./RegisterForm"


import { orange600 } from 'material-ui/styles/colors';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import { orange400 } from 'material-ui/styles/colors';

import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import { inject, observer } from 'mobx-react';

import { Redirect, Link } from 'react-router-dom';


import BhFormParent from './BhFormParent';
import Profile from '../Owner/Profile';
import Divider from 'material-ui/Divider';
import ClientMenu from '../Client/ClientMenu';
import AdminMenu from '../Admin/AdminMenu';
import ChartComponent from '../Admin/ChartComponent';
import FlatButton from 'material-ui/Flatbutton';
import OwnerMenu from '../Owner/OwnerMenu';

const MainRouter = ({ rootStore: { domainStore: { boardingHouseStore } } }) => (
    <div>
        <center>
            <AppBar
                title='Iloilo City Boarding House Commission'
                onLeftIconButtonTouchTap={boardingHouseStore.handleToggle}
                
            />
        </center>
        <Drawer

            docked={false}
            width={"20%"}
            open={boardingHouseStore.openDrawer}
            onRequestChange={boardingHouseStore.handleToggle}
        >
            <AppBar
                title='Menu'
                onLeftIconButtonTouchTap={boardingHouseStore.handleToggle}

            />
            <a href="/#/dashboard" style={{ "textDecoration": "none" }}>
                <MenuItem onClick={boardingHouseStore.handleToggle}>Dashboard</MenuItem>
            </a>
            <Divider />
            <a href="/#/reports" style={{ "textDecoration": "none" }}>
                <MenuItem onClick={boardingHouseStore.handleToggle}>Reports</MenuItem>
            </a>
            <Divider />


        </Drawer>

        <Router>
            <Switch>

                <Router exact path="/" component={ClientMenu} />
                <Route path="/bhForm" component={BhFormParent} />
                <Route exact path="/dashboard" component={Dashboard} />
                <Route path="/dashboard/:id" component={BhFormParent} />
                {/* <Route path="/clientHome" component={ClientHome} /> */}
                <Route path="/login" component={LoginForm} />
                <Route path="/register" component={RegisterForm} />
                <Route path="/cmenu" component={ClientMenu} />
                <Route path="/reports" component={ChartComponent} />
                <Route path="/ownermenu" component={OwnerMenu} />
                <Route path="/profile/:id" component={Profile} />




            </Switch>
        </Router>
    </div >

)
export default inject('rootStore')(observer(MainRouter));

import React from 'react';
import { Switch, Route, HashRouter as Router } from 'react-router-dom';
// import MainContainer from '../Main/MainContainer';
// import HomeContainer from '../Home/HomeContainer';
// import ListContainer from '../List/ListContainer';
// import BhForm from '../Forms/BhForm';
// import Dashboard from '../Admin/DashBoard';
import AppBar from 'material-ui/AppBar';

// import NearbyTab from './NearbyTab';

import IconMenu from 'material-ui/IconMenu';
import IconButton from 'material-ui/IconButton';
import FontIcon from 'material-ui/FontIcon';
import NavigationExpandMoreIcon from 'material-ui/svg-icons/navigation/expand-more';
import RaisedButton from 'material-ui/RaisedButton';


import { orange600 } from 'material-ui/styles/colors';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import { orange400 } from 'material-ui/styles/colors';

import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import { inject, observer } from 'mobx-react';



// import Something from './Something';
import Divider from 'material-ui/Divider';
import Paper from 'material-ui/Paper';

import { Tabs, Tab } from 'material-ui/Tabs';
// import SwipeableViews from 'react-swipeable-views';
import { Toolbar, ToolbarGroup, ToolbarSeparator, ToolbarTitle } from 'material-ui/Toolbar';

import SearchBar from 'material-ui-search-bar'
import SearchForm from './SearchForm';

const FindTab = ({ rootStore: { domainStore: { boardingHouseStore } } }) => (
    <div>
        <Paper zDepth={2}>
            <Toolbar>
                <ToolbarGroup firstChild={true}>
                    <ToolbarSeparator />
                    <SearchBar
                        onChange={() => console.log('onChange')}
                        onRequestSearch={() => console.log('onRequestSearch')}
                        style={{
                            margin: '0 auto',
                            maxWidth: 900,
                            width: 900
                        }}
                    />
                    <ToolbarSeparator />
                </ToolbarGroup>
            </Toolbar>
            {/* <SearchForm /> */}
        </Paper>

    </div >


)
export default inject('rootStore')(observer(FindTab));

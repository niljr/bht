import React from 'react';
import { Switch, Route, HashRouter as Router } from 'react-router-dom';
// import MainContainer from '../Main/MainContainer';
// import HomeContainer from '../Home/HomeContainer';
// import ListContainer from '../List/ListContainer';
// import BhForm from '../Forms/BhForm';
// import Dashboard from '../Admin/DashBoard';
import AppBar from 'material-ui/AppBar';

import NearbyTab from './NearbyTab';

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
import TextField from 'material-ui/TextField'
import { orange500, blue500 } from 'material-ui/styles/colors';


// import Something from './Something';
import Divider from 'material-ui/Divider';

import { Tabs, Tab } from 'material-ui/Tabs';
// import SwipeableViews from 'react-swipeable-views';

import SearchBar from 'material-ui-search-bar'
import { Toolbar, ToolbarGroup, ToolbarSeparator, ToolbarTitle } from 'material-ui/Toolbar';


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
const SearchForm = ({ rootStore: { domainStore: { boardingHouseStore } } }) => (
    <div>
        <TextField
            defaultValue={boardingHouseStore.bhInfo.bhName}
            hintText="Boarding House Name"
            onChange={boardingHouseStore.change}
            name="bhName"
            floatingLabelText="Boarding House Name"
            //floatingLabelFixed={true}
            underlineFocusStyle={textFieldStyle.underlineFocusStyle}
            underlineStyle={textFieldStyle.underlineStyle}
            floatingLabelStyle={textFieldStyle.floatingLabelStyle}
            floatingLabelFocusStyle={textFieldStyle.floatingFocusLabelStyle}
            style={{ marginLeft: 20 }}
            underlineShow={false}

        /><ToolbarSeparator />
        <TextField
            defaultValue={boardingHouseStore.bhInfo.bhName}
            hintText="Boarding House Name"
            onChange={boardingHouseStore.change}
            name="bhName"
            floatingLabelText="Boarding House Name"
            //floatingLabelFixed={true}
            underlineFocusStyle={textFieldStyle.underlineFocusStyle}
            underlineStyle={textFieldStyle.underlineStyle}
            floatingLabelStyle={textFieldStyle.floatingLabelStyle}
            floatingLabelFocusStyle={textFieldStyle.floatingFocusLabelStyle}
            style={{ marginLeft: 20 }}
            underlineShow={false}

        />

    </div >

)
export default inject('rootStore')(observer(SearchForm));

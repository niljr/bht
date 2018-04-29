import React from 'react';
import { Switch, Route, HashRouter as Router } from 'react-router-dom';
// import MainContainer from '../Main/MainContainer';
// import HomeContainer from '../Home/HomeContainer';
// import ListContainer from '../List/ListContainer';
// import BhForm from '../Forms/BhForm';
// import Dashboard from '../Admin/DashBoard';
import Container from './Container'

import AppBar from 'material-ui/AppBar';

import FindTab from './FindTab';
// import NearbyTab from './NearbyTab';
import Paper from 'material-ui/Paper';


import { orange600 } from 'material-ui/styles/colors';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import { orange400 } from 'material-ui/styles/colors';

import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import { inject, observer } from 'mobx-react';



// import Something from './Something';
import Divider from 'material-ui/Divider';

import { Tabs, Tab } from 'material-ui/Tabs';
// import SwipeableViews from 'react-swipeable-views';

import BoardingHouseMap from './BoardingHouseMap';

const styles = {
    headline: {
        fontSize: 24,
        paddingTop: 16,
        marginBottom: 12,
        fontWeight: 400,
    },
    slide: {
        padding: 10,
    },
};
const Home = ({ rootStore: { domainStore: { boardingHouseStore } } }) => (
    <div>

        <div>
            <Tabs
                onChange={boardingHouseStore.handSlide}
                value={boardingHouseStore.slideIndex}
            >
                
                <Tab label="Nearby Boarding Houses" value={0} >
                    {/* <NearbyTab /> */}
                    <Paper zDepth={2}>
                        <BoardingHouseMap />
                    </Paper>
                </Tab>
                {/* <Tab label="Tab Three" value={2} /> */}
            </Tabs>
            {/* <SwipeableViews
                index={boardingHouseStore.slideIndex}
                onChangeIndex={boardingHouseStore.slideIndex}
            >
                <div>
                    <h2 style={styles.headline}>Tabs with slide effect</h2>
                    Swipe to see the next slide.<br />
                </div>
                <div style={styles.slide}>
                    slide n°2
        </div>
                <div style={styles.slide}>
                    slide n°3
        </div>
            </SwipeableViews> */}

        </div>
        {/* <Router>
            <Switch> */}
        {/* <Route exact path="/" component={HomeContainer} />
            <Route path="/main" component={MainContainer} />
            <Route path="/viewlist" component={ListContainer} /> */}
        {/* <Router exact path="/" component={<div></div>} />
                <Route path="/find" component={FindTab} />
                <Route path="/nearby" component={NearbyTab} />
            </Switch>
        </Router> */}
        {/* <Something /> */}
    </div >

)
export default inject('rootStore')(observer(Home));

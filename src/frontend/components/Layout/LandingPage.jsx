import React from 'react';
import client from '../../client';
import MainRouter from './MainRouter';
import { Provider } from 'mobx-react';
import LandingRouter from './LandingRouter';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';


import { BoardingHouseStore, RootStore, UserStore } from '../../stores/';

const boardingHouseStore = new BoardingHouseStore(client);
//userStore
const userStore = new UserStore(client);
const rootStore = new RootStore(client, { boardingHouseStore, userStore });

const stores = {
    boardingHouseStore,
    userStore,
    rootStore
};

const LandingPage = () => (
    <Provider {...stores}>
        <LandingRouter />
    </Provider>
);

export default LandingPage;
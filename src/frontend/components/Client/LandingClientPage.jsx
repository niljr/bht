import React from 'react';
import client from '../../client';
import MainRouter from './MainRouter';
import { Provider } from 'mobx-react';
import Home from './Home';

import { BoardingHouseStore, RootStore } from '../../stores/';

const boardingHouseStore = new BoardingHouseStore(client);
//userStore
const rootStore = new RootStore(client, { boardingHouseStore });

const stores = {
    boardingHouseStore,
    //userStore
    rootStore
};

const LandingClientPage = () => (
    <Provider {...stores}>
        <Home />
    </Provider>
);

export default LandingClientPage;
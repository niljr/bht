import { inject, observer } from 'mobx-react';
import React from 'react';
import MainRouter from './MainRouter'

const LandingRouter = ({ rootStore: { domainStore: { boardingHouseStore } } }) => (
    <div>
        <MainRouter />
    </div>
);

export default inject('rootStore')(observer(LandingRouter));
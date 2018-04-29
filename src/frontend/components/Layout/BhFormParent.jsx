import React from 'react';
import BhFormChild from './BhFormChild';
import OwnerInfoForm from './OwnerInfoForm';
import InfoPreviewForm from './InfoPreviewForm';

import { inject, observer } from 'mobx-react';
import { Redirect, Link } from 'react-router-dom';

import {
    Step,
    Stepper,
    StepLabel,
} from 'material-ui/Stepper';
import RaisedButton from 'material-ui/RaisedButton';
import FlatButton from 'material-ui/FlatButton';
import Drawer from 'material-ui/Drawer';
import Paper from 'material-ui/Paper';

const contentStyle = { margin: '0 10' };
const dropDownStyles = {
    customWidth: {
        width: 200,
    }

};

const BhFormParent = ({ rootStore: { domainStore: { boardingHouseStore } }, match }) => (
    <div>
        {
            boardingHouseStore.finished ? <Redirect to="/dashboard" /> :
                <div style={{ width: '100%', maxWidth: 700, margin: 'auto' }}>
                    <Stepper activeStep={boardingHouseStore.stepIndex}>
                        <Step>
                            <StepLabel>Enter Boarding House Information</StepLabel>
                        </Step>
                        <Step>
                            <StepLabel>Confirm Information</StepLabel>
                        </Step>
                    </Stepper>
                    <div style={contentStyle}>
                        <div>
                            {(boardingHouseStore.stepIndex === 0) ?
                                <BhFormChild match={match} />
                                :
                                <InfoPreviewForm match={match} />
                            }
                            <div style={{ marginTop: 30 }}>
                                <FlatButton
                                    label="Back"
                                    disabled={boardingHouseStore.stepIndex === 0}
                                    onClick={boardingHouseStore.handlePrev}
                                    style={{ marginRight: 12 }}
                                />
                                {
                                    boardingHouseStore.stepIndex > 0 ?
                                        boardingHouseStore.selectedBh ?
                                            <Link to="/dashboard">
                                                <RaisedButton
                                                    label="Finish"
                                                    primary={true}
                                                    onClick={boardingHouseStore.saveEdit}
                                                /> </Link> :
                                            <RaisedButton
                                                label="Finish"
                                                primary={true}
                                                onClick={boardingHouseStore.submitForm}
                                            /> :
                                        <RaisedButton
                                            label="Next"
                                            primary={true}
                                            onClick={boardingHouseStore.incrementStep}
                                        />
                                }
                            </div>
                        </div>
                    </div>
                </div>
        }
    </div>
)
export default inject('rootStore')(observer(BhFormParent));

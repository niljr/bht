import React, { Component } from 'react';

import Paper from 'material-ui/Paper'
import { inject, observer } from 'mobx-react';

import TextField from 'material-ui/TextField';
import MenuItem from 'material-ui/MenuItem';
import RaisedButton from 'material-ui/RaisedButton';
import { Tab, Tabs } from 'material-ui/Tabs';
// import Tabs from 'material-ui/Tabs';
import { orange500, blue500 } from 'material-ui/styles/colors';



import FlatButton from 'material-ui/FlatButton';

const style = {
    margin: 5,
    width: 5
};
const modalStyle = {
    dialogPaper: {
        minHeight: '80vh',
        maxHeight: '80vh',
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

const View = ({ store }) => (
    <div>
        {store.selectedBh &&
            <Tabs
                onChange={store.handSlide}
                value={store.slideIndex}
            >
                <Tab label={store.selectedBh.bhName + " Information"} value={0} >
                    <div>
                        <TextField
                            underlineFocusStyle={textFieldStyle.underlineFocusStyle}
                            underlineStyle={textFieldStyle.underlineStyle}
                            floatingLabelStyle={textFieldStyle.floatingLabelStyle}
                            floatingLabelFocusStyle={textFieldStyle.floatingFocusLabelStyle}
                            underlineShow={false}

                            disabled={true}
                            floatingLabelText="Name"
                            name="bhName"
                            onChange={(e, value) => store.change(e, value)}
                            defaultValue={store.selectedBh.bhName}
                        />
                        <TextField
                            underlineFocusStyle={textFieldStyle.underlineFocusStyle}
                            underlineStyle={textFieldStyle.underlineStyle}
                            floatingLabelStyle={textFieldStyle.floatingLabelStyle}
                            floatingLabelFocusStyle={textFieldStyle.floatingFocusLabelStyle}
                            underlineShow={false}
                            disabled={true}

                            floatingLabelText="Kind of Business"
                            name="kindOfBusiness"
                            onChange={(e, value) => store.change(e, value)}
                            defaultValue={store.selectedBh.kindOfBusiness}
                        />
                        <TextField
                            underlineFocusStyle={textFieldStyle.underlineFocusStyle}
                            underlineStyle={textFieldStyle.underlineStyle}
                            floatingLabelStyle={textFieldStyle.floatingLabelStyle}
                            floatingLabelFocusStyle={textFieldStyle.floatingFocusLabelStyle}
                            underlineShow={false}
                            disabled={true}

                            floatingLabelText="Full Address"
                            name="fullAddress"
                            onChange={(e, value, param) => store.change(e, value, "bhAddress")}
                            defaultValue={store.selectedBh.bhAddress.fullAddress}
                        />
                        <TextField
                            underlineFocusStyle={textFieldStyle.underlineFocusStyle}
                            underlineStyle={textFieldStyle.underlineStyle}
                            floatingLabelStyle={textFieldStyle.floatingLabelStyle}
                            floatingLabelFocusStyle={textFieldStyle.floatingFocusLabelStyle}
                            underlineShow={false}
                            disabled={true}

                            type={"number"}
                            floatingLabelText="Min Rate"
                            name="minRate"
                            onChange={(e, value, param) => store.change(e, value, "rate")}
                            defaultValue={store.selectedBh.rate.minRate}
                        />
                        <TextField
                            underlineFocusStyle={textFieldStyle.underlineFocusStyle}
                            underlineStyle={textFieldStyle.underlineStyle}
                            floatingLabelStyle={textFieldStyle.floatingLabelStyle}
                            floatingLabelFocusStyle={textFieldStyle.floatingFocusLabelStyle}
                            underlineShow={false}
                            disabled={true}

                            type={"number"}
                            floatingLabelText="Max Rate"
                            name="maxRate"
                            onChange={(e, value, param) => store.change(e, value, "rate")}
                            defaultValue={store.selectedBh.rate.maxRate}
                        />
                        <TextField
                            underlineFocusStyle={textFieldStyle.underlineFocusStyle}
                            underlineStyle={textFieldStyle.underlineStyle}
                            floatingLabelStyle={textFieldStyle.floatingLabelStyle}
                            floatingLabelFocusStyle={textFieldStyle.floatingFocusLabelStyle}
                            underlineShow={false}
                            disabled={true}

                            type={"number"}
                            floatingLabelText="Number of Rooms"
                            name="numberOfRooms"
                            onChange={(e, value) => store.change(e, value)}
                            defaultValue={store.selectedBh.numberOfRooms}
                        />
                        <TextField
                            underlineFocusStyle={textFieldStyle.underlineFocusStyle}
                            underlineStyle={textFieldStyle.underlineStyle}
                            floatingLabelStyle={textFieldStyle.floatingLabelStyle}
                            floatingLabelFocusStyle={textFieldStyle.floatingFocusLabelStyle}
                            underlineShow={false}
                            disabled={true}

                            floatingLabelText="Exclusivity"
                            name="exclusivity"
                            onChange={(e, value, param) => store.change(e, value)}
                            defaultValue={store.selectedBh.exclusivity}
                        />
                        <TextField
                            underlineFocusStyle={textFieldStyle.underlineFocusStyle}
                            underlineStyle={textFieldStyle.underlineStyle}
                            floatingLabelStyle={textFieldStyle.floatingLabelStyle}
                            floatingLabelFocusStyle={textFieldStyle.floatingFocusLabelStyle}
                            underlineShow={false}
                            disabled={true}

                            floatingLabelText="Has Aircon Rooms?"
                            name="hasAirconRooms"
                            onChange={(e, value, param) => store.change(e, value)}
                            defaultValue={store.selectedBh.hasAirconRooms}
                        />
                        <TextField
                            underlineFocusStyle={textFieldStyle.underlineFocusStyle}
                            underlineStyle={textFieldStyle.underlineStyle}
                            floatingLabelStyle={textFieldStyle.floatingLabelStyle}
                            floatingLabelFocusStyle={textFieldStyle.floatingFocusLabelStyle}
                            underlineShow={false}
                            disabled={true}

                            floatingLabelText="Bus. Permit Num."
                            name="bussinessPermitNumber"
                            onChange={(e, value, param) => store.change(e, value, "bhPermit")}
                            defaultValue={store.selectedBh.bhPermit.businessPermitNumber}
                        />
                        <TextField
                            underlineFocusStyle={textFieldStyle.underlineFocusStyle}
                            underlineStyle={textFieldStyle.underlineStyle}
                            floatingLabelStyle={textFieldStyle.floatingLabelStyle}
                            floatingLabelFocusStyle={textFieldStyle.floatingFocusLabelStyle}
                            underlineShow={false}

                            disabled={true}
                            floatingLabelText="Key"
                            name="key"
                            onChange={(e, value) => store.change(e, value)}
                            defaultValue={store.selectedBh.key}
                        />
                        <TextField
                            underlineFocusStyle={textFieldStyle.underlineFocusStyle}
                            underlineStyle={textFieldStyle.underlineStyle}
                            floatingLabelStyle={textFieldStyle.floatingLabelStyle}
                            floatingLabelFocusStyle={textFieldStyle.floatingFocusLabelStyle}
                            underlineShow={false}
                            disabled={true}

                            floatingLabelText="Certificate Num."
                            name="cerficateNumber"
                            onChange={(e, value, param) => store.change(e, value, "bhPermit")}
                            defaultValue={store.selectedBh.bhPermit.certificateNumber}
                        />
                    </div>
                </Tab>
            </Tabs>
        }
    </div>
);
export default inject('rootStore')(observer(View));

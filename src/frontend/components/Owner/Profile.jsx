import { inject, observer } from 'mobx-react';
import React, { Component } from 'react';
import Paper from 'material-ui/Paper';
import TextField from 'material-ui/TextField';
import { List, ListItem } from 'material-ui/List';
import { orange500, blue500 } from 'material-ui/styles/colors';
import Divider from 'material-ui/Divider';
import { Card, CardActions, CardHeader, CardText } from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import View from '../Layout/View';
import { Tab, Tabs } from 'material-ui/Tabs';


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
const formTitleStyle = {
    margin: {
        marginLeft: 10,
        color: '#FF9800',
        fontSize: 20,
        marginTop: 20,
        display: 'block'
    }
}
const cardStyle = {
    width: 800,
    marginTop: 80,

}
const Profile = ({ rootStore: { domainStore: { boardingHouseStore } }, match }) => (
    <center>
        <div>
            <Card style={cardStyle}>
                <CardHeader
                    title={boardingHouseStore.bhName}
                    subtitle="Subtitle"
                    actAsExpander={true}
                    showExpandableButton={true}
                />

                {/* <CardActions>   
                    <FlatButton label="Action1" />
                    <FlatButton label="Action2" />
                </CardActions> */}

                <CardText expandable={true}>
                    {/* <View store={boardingHouseStore} /> */}
                    <Tabs
                        onChange={boardingHouseStore.hand}
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

                                    floatingLabelText="Certificate Num."
                                    name="cerficateNumber"
                                    onChange={(e, value, param) => store.change(e, value, "bhPermit")}
                                    defaultValue={store.selectedBh.bhPermit.certificateNumber}
                                />
                                
                            </div>
                        </Tab>
                    </Tabs>
                </CardText>
            </Card>

        </div>
    </center>

)

export default inject('rootStore')(observer(Profile));
                            //export default Something2;    

                            //LandingPage
                            //LandingRouter
                            //Something
//Something2
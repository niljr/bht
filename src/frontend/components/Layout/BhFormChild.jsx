import React from 'react';
import { inject, observer } from 'mobx-react';
import TextField from 'material-ui/TextField';
import FlatButton from 'material-ui/FlatButton';
import { List, ListItem } from 'material-ui/List';
import { orange500, blue500 } from 'material-ui/styles/colors';
import DatePicker from 'material-ui/DatePicker';
// import DropDownMenu from 'material-ui/DropDownMenu';
import MenuItem from 'material-ui/MenuItem';
import Checkbox from 'material-ui/Checkbox';
import Paper from 'material-ui/Paper';
import Divider from 'material-ui/Divider';
import LoginForm from './LoginForm';
import { RadioButton, RadioButtonGroup } from 'material-ui/RadioButton';

import DropDownMenu from 'material-ui/DropDownMenu';

import SelectField from 'material-ui/SelectField';

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
const dropDownStyles = {
    customWidth: {
        width: 200
    }
}
const columnStyle = {
    columnCount: 2,
    height: 390
}
const checkBoxStyles = {
    block: {
        maxWidth: 250,
    },
    checkbox: {
        marginBottom: 16,
        marginLeft: 50
    },
}
const headerStyle = {
    margin: {
        marginLeft: 20,
        marginBottom: 10,
        color: '#FF9800',
        fontSize: 14,
        marginTop: 10,
        display: 'block'
    }
}
const formTitleStyle = {
    margin: {
        marginLeft: 10,
        marginBottom: 10,
        color: '#FF9800',
        fontSize: 20,
        marginTop: 20,
        display: 'block'
    }
}
const styles = {
    block: {
        maxWidth: 250,
    },
    radioButton: {
        marginBottom: 16,
    },
};

const BhFormChild = ({ rootStore: { domainStore: { boardingHouseStore } }, match }) => {

    if (Object.keys(match.params).length !== 0) {
        boardingHouseStore.setSelectedBh(match.params.id);
    }

    const def = Object.keys(match.params).length !== 0 ? boardingHouseStore.selectedBh : boardingHouseStore.bhInfo
    return <div>

        <div>
            <Paper zDepth={2}>

                <List>
                    <label style={formTitleStyle.margin}>Business Information</label>

                    <TextField
                        defaultValue={def.bhName}
                        hintText="Boarding House Name"
                        onChange={boardingHouseStore.change}
                        name="bhName"
                        floatingLabelText="Boarding House Name"
                        underlineFocusStyle={textFieldStyle.underlineFocusStyle}
                        underlineStyle={textFieldStyle.underlineStyle}
                        floatingLabelStyle={textFieldStyle.floatingLabelStyle}
                        floatingLabelFocusStyle={textFieldStyle.floatingFocusLabelStyle}
                        style={{ marginLeft: 20 }}
                        underlineShow={false}

                    />
                    <Divider />
                    <div>


                        <label style={headerStyle.margin}>Kind of Business:</label>
                        <RadioButtonGroup name="kindOfBusiness" style={{
                            // width: 50,
                            marginLeft: 20,
                            // height: 43,
                        }}
                            onChange={(e, value) => boardingHouseStore.checkValueForm(e, value)}

                            defaultSelected={def.kindOfBusiness}>
                            <RadioButton
                                value="Boarding House"
                                label="Boarding House"
                                style={styles.radioButton}

                            />
                            <RadioButton
                                value="Apartment"
                                label="Apartment"
                                style={styles.radioButton}

                            />
                            <RadioButton
                                value="Dormitory"
                                label="Dormitory"
                                style={styles.radioButton}

                            />
                            <RadioButton
                                value="Combined Business"
                                label="Combined Business"
                                style={styles.radioButton}

                            />

                        </RadioButtonGroup>
                    </div>
                    <Divider />
                    {/* <TextField
                        defaultValue={def.bhAddress.districtName}
                        hintText="District"
                        onChange={(e, value, param) => boardingHouseStore.change(e, value, "bhAddress")}
                        name="districtName"
                        floatingLabelText="District"
                        // floatingLabelFixed={true}
                        underlineFocusStyle={textFieldStyle.underlineFocusStyle}
                        underlineStyle={textFieldStyle.underlineStyle}
                        floatingLabelStyle={textFieldStyle.floatingLabelStyle}
                        floatingLabelFocusStyle={textFieldStyle.floatingFocusLabelStyle}
                        style={{ marginLeft: 20 }}
                        underlineShow={false}

                    /> */}

                    <label style={headerStyle.margin}>District:</label>
                    <RadioButtonGroup name="districtName" style={{
                        // width: 50,
                        marginLeft: 20,
                        // height: 43,
                    }}
                        onChange={(e, value, param) => boardingHouseStore.checkValueForm(e, value, "bhAddress")}

                        defaultSelected={def.bhAddress.districtName}>
                        <RadioButton
                            value="Jaro"
                            label="Jaro"
                            style={styles.radioButton}
                        />
                        <RadioButton
                            value="Lapaz"
                            label="Lapaz"
                            style={styles.radioButton}

                        />
                        <RadioButton
                            value="Lapuz"
                            label="Lapuz"
                            style={styles.radioButton}

                        />
                        <RadioButton
                            value="City Proper"
                            label="City Proper"
                            style={styles.radioButton}

                        />
                        <RadioButton
                            value="Mandurriao"
                            label="Mandurriao"
                            style={styles.radioButton}

                        />
                        <RadioButton
                            value="Villa Arevalo"
                            label="Villa Arevalo"
                            style={styles.radioButton}

                        />
                    </RadioButtonGroup>

                    <Divider />

                    <TextField
                        defaultValue={def.bhAddress.fullAddress}
                        hintText="Full Address"
                        floatingLabelText="Full Address"
                        name="fullAddress"
                        onChange={(e, value, param) => boardingHouseStore.change(e, value, "bhAddress")}
                        //floatingLabelFixed={true}
                        underlineFocusStyle={textFieldStyle.underlineFocusStyle}
                        underlineStyle={textFieldStyle.underlineStyle}
                        floatingLabelStyle={textFieldStyle.floatingLabelStyle}
                        floatingLabelFocusStyle={textFieldStyle.floatingFocusLabelStyle}
                        style={{ marginLeft: 20 }}
                        underlineShow={false}
                    /><Divider />
                    <TextField
                        defaultValue={def.numberOfRooms}
                        floatingLabelText="Number of Rooms"
                        type={"number"}
                        //defaultValue={numberOfRooms}
                        hintText="Number of Rooms"
                        name="numberOfRooms"
                        //floatingLabelFixed={true}
                        onChange={boardingHouseStore.change}
                        underlineFocusStyle={textFieldStyle.underlineFocusStyle}
                        underlineStyle={textFieldStyle.underlineStyle}
                        floatingLabelStyle={textFieldStyle.floatingLabelStyle}
                        floatingLabelFocusStyle={textFieldStyle.floatingFocusLabelStyle}
                        style={{
                            width: 150,
                            marginLeft: 20,
                            fontSize: 15
                        }}
                        underlineShow={false}
                    />
                    <Divider />
                    <TextField
                        defaultValue={def.rate.minRate}

                        hintText="Minimum"
                        type={"number"}
                        name="minRate"
                        floatingLabelText="Minimum Rate"
                        onChange={(e, value, param) => boardingHouseStore.change(e, value, "rate")}
                        //floatingLabelFixed={true}
                        underlineFocusStyle={textFieldStyle.underlineFocusStyle}
                        underlineStyle={textFieldStyle.underlineStyle}
                        floatingLabelStyle={textFieldStyle.floatingLabelStyle}
                        floatingLabelFocusStyle={textFieldStyle.floatingFocusLabelStyle}
                        style={{
                            // width: 50,
                            marginLeft: 20,
                        }}
                        underlineShow={false}

                    />
                    <TextField
                        defaultValue={def.rate.maxRate}
                        hintText="Maximum"
                        type={"number"}
                        name="maxRate"
                        //defaultValue={maxRate}
                        //floatingLabelFixed={true}
                        floatingLabelText="Maximum Rate"
                        onChange={(e, value, param) => boardingHouseStore.change(e, value, "rate")}
                        underlineFocusStyle={textFieldStyle.underlineFocusStyle}
                        underlineStyle={textFieldStyle.underlineStyle}
                        floatingLabelStyle={textFieldStyle.floatingLabelStyle}
                        floatingLabelFocusStyle={textFieldStyle.floatingFocusLabelStyle}
                        style={{
                            // width: 50,
                            marginLeft: 20,
                            // height: 43,
                        }}
                        underlineShow={false}

                    />
                    <Divider />
                    <TextField
                        hintText="Certificate Number"
                        defaultValue={def.bhPermit.certificateNumber}
                        floatingLabelText="Certificate Number"
                        name="certificateNumber"
                        onChange={(e, value, param) => boardingHouseStore.change(e, value, "bhPermit")}
                        underlineFocusStyle={textFieldStyle.underlineFocusStyle}
                        underlineStyle={textFieldStyle.underlineStyle}
                        floatingLabelStyle={textFieldStyle.floatingLabelStyle}
                        floatingLabelFocusStyle={textFieldStyle.floatingFocusLabelStyle}
                        style={{
                            marginLeft: 20
                        }}
                        underlineShow={false}

                    />
                    <Divider/>
                    <div>
                        <label style={headerStyle.margin}>Exclusivity:</label>
                        <RadioButtonGroup name="exclusivity" style={{
                            // width: 50,
                            marginLeft: 20,
                            // height: 43,

                        }}
                            onChange={(e, value) => boardingHouseStore.checkValueForm(e, value)}

                            defaultSelected={def.exclusivity}>
                            <RadioButton
                                value="Male"
                                label="Male Only"
                                style={styles.radioButton}

                            />
                            <RadioButton
                                value="Female"
                                label="Female Only"
                                style={styles.radioButton}

                            />
                            <RadioButton
                                value="No Exclusivity"
                                label="No Exlcusivity"
                                style={styles.radioButton}
                            />
                        </RadioButtonGroup>
                    </div>
                    <Divider />
                    <label style={headerStyle.margin}>Has Aircon Rooms? :</label>
                    <RadioButtonGroup name="hasAirconRooms" style={{
                        // width: 50,
                        marginLeft: 20,
                        // height: 43,
                    }}
                        onChange={(e, value) => boardingHouseStore.checkValueForm(e, value)}

                        defaultSelected={def.hasAirconRooms}>
                        <RadioButton
                            // name = "No"
                            value="No"
                            label="No"
                            style={styles.radioButton}
                        // onCheck={(e, value, param) => boardingHouseStore.checkValue(e, value, "aircon")}
                        />
                        <RadioButton
                            // name = "Yes"
                            value="Yes"
                            label="Yes"
                            style={styles.radioButton}
                        // onCheck={(e, value, param) => boardingHouseStore.checkValue(e, value, "aircon")}
                        />
                    </RadioButtonGroup>
                    <Divider />
                    <TextField
                        hintText="Permit Number"
                        defaultValue={def.bhPermit.businessPermitNumber}
                        floatingLabelText="Permit Number"
                        name="businessPermitNumber"
                        onChange={(e, value, param) => boardingHouseStore.change(e, value, "bhPermit")}
                        underlineFocusStyle={textFieldStyle.underlineFocusStyle}
                        underlineStyle={textFieldStyle.underlineStyle}
                        floatingLabelStyle={textFieldStyle.floatingLabelStyle}
                        floatingLabelFocusStyle={textFieldStyle.floatingFocusLabelStyle}
                        style={{
                            marginLeft: 20
                        }}
                        underlineShow={false}

                    />
                    <Divider />
                    <TextField
                        hintText="Certificate Number"
                        defaultValue={def.bhPermit.certificateNumber}
                        floatingLabelText="Certificate Number"
                        name="certificateNumber"
                        onChange={(e, value, param) => boardingHouseStore.change(e, value, "bhPermit")}
                        underlineFocusStyle={textFieldStyle.underlineFocusStyle}
                        underlineStyle={textFieldStyle.underlineStyle}
                        floatingLabelStyle={textFieldStyle.floatingLabelStyle}
                        floatingLabelFocusStyle={textFieldStyle.floatingFocusLabelStyle}
                        style={{
                            marginLeft: 20
                        }}
                        underlineShow={false}

                    />
                    <Divider />
                    <label style={headerStyle.margin}>Permit Issue Date:</label>
                    <DatePicker
                        hintText="Permit Issue Date"
                        mode="landscape"
                        name="dateIssued"
                        onChange={(e, date) => boardingHouseStore.handleDate(e, date)}
                        // onChange={(e, { date }, param) => props.dateCheck(e, { date }, "bhPermit")}
                        style={{ marginLeft: 20 }}
                        underlineShow={false}
                        defaultValue={def.bhPermit.dateIssued}

                    /> <Divider />
                    <TextField
                        hintText="Lattitude"
                        // defaultValue={boardingHouseStore.bhInfo.bhPermit.businessPermitNumber}
                        floatingLabelText="Latitude"
                        name="lat"
                        onChange={(e, value) => boardingHouseStore.change(e, value, "bhAddress")}
                        underlineFocusStyle={textFieldStyle.underlineFocusStyle}
                        underlineStyle={textFieldStyle.underlineStyle}
                        floatingLabelStyle={textFieldStyle.floatingLabelStyle}
                        floatingLabelFocusStyle={textFieldStyle.floatingFocusLabelStyle}
                        style={{
                            marginLeft: 20
                        }}
                        underlineShow={false}
                        defaultValue={def.bhAddress.lat}
                    />
                    <br />
                    <TextField
                        hintText="Longitude"
                        // defaultValue={boardingHouseStore.bhInfo.bhPermit.businessPermitNumber}
                        floatingLabelText="Longitude"
                        name="long"
                        onChange={(e, value) => boardingHouseStore.change(e, value, 'bhAddress')}
                        underlineFocusStyle={textFieldStyle.underlineFocusStyle}
                        underlineStyle={textFieldStyle.underlineStyle}
                        floatingLabelStyle={textFieldStyle.floatingLabelStyle}
                        floatingLabelFocusStyle={textFieldStyle.floatingFocusLabelStyle}
                        style={{
                            marginLeft: 20
                        }}
                        underlineShow={false}
                        defaultValue={def.bhAddress.long}

                    />


                </List>
            </Paper>
        </div >
    </div>
}

export default inject('rootStore')(observer(BhFormChild));

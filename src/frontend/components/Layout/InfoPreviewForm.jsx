import React from 'react';
import { inject, observer } from 'mobx-react';
import TextField from 'material-ui/TextField';
import FlatButton from 'material-ui/FlatButton';
import { List, ListItem } from 'material-ui/List';
import { orange500, blue500 } from 'material-ui/styles/colors';
import DatePicker from 'material-ui/DatePicker';
import DropDownMenu from 'material-ui/DropDownMenu';
import MenuItem from 'material-ui/MenuItem';
import Checkbox from 'material-ui/Checkbox';
import Paper from 'material-ui/Paper';
import Divider from 'material-ui/Divider';
import { RadioButton, RadioButtonGroup } from 'material-ui/RadioButton';



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
const styles = {
    block: {
        maxWidth: 250,
    },
    radioButton: {
        marginBottom: 16,
    },
};
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

const Something2 = ({ rootStore: { domainStore: { boardingHouseStore } }, match }) => {

    const def = Object.keys(match.params).length !== 0 ? boardingHouseStore.selectedBh : boardingHouseStore.bhInfo
    return <div>
        {/* <TextField
            defaultValue={def.bhName}
            name='bhName'
            onChange={boardingHouseStore.handleChange}
        />
        <FlatButton
            label='Walang label'
            onClick={boardingHouseStore.buttonClick}
        /> */}
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
                        //floatingLabelFixed={true}
                        underlineFocusStyle={textFieldStyle.underlineFocusStyle}
                        underlineStyle={textFieldStyle.underlineStyle}
                        floatingLabelStyle={textFieldStyle.floatingLabelStyle}
                        floatingLabelFocusStyle={textFieldStyle.floatingFocusLabelStyle}
                        style={{ marginLeft: 20 }}
                        underlineShow={false}
                        disabled={true}

                    />
                    <Divider />
              
                    <div>
                        <label style={headerStyle.margin}>Kind of Business:</label>
                        <RadioButtonGroup name="kindOfBusiness" style={{
                            // width: 50,
                            marginLeft: 20,
                            // height: 43,
                        }}
                            defaultSelected={def.kindOfBusiness}>
                            <RadioButton
                                value="Boarding House"
                                label="Boarding House"
                                style={styles.radioButton}
                                disabled={true}

                            />
                            <RadioButton
                                value="Apartment"
                                label="Apartment"
                                style={styles.radioButton}

                                disabled={true}

                            />
                            <RadioButton
                                value="Dormitory"
                                label="Dormitory"
                                style={styles.radioButton}
                                disabled={true}
                            />
                            <RadioButton
                                value="Combined Business"
                                label="Combined Business"
                                style={styles.radioButton}
                                disabled={true}
                            />

                        </RadioButtonGroup>
                    </div>
                    {/* <Divider />
                    <TextField
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
                        disabled={true}

                        
                    /> */}

                    <label style={headerStyle.margin}>District:</label>
                    <RadioButtonGroup name="districtName" style={{
                        // width: 50,
                        marginLeft: 20,
                        // height: 43,
                    }}
                        onChange={(e, value, param) => boardingHouseStore.checkValue(e, value, "bhAddress")}
                        defaultSelected={def.bhAddress.districtName}>
                        <RadioButton
                            value="Jaro"
                            label="Jaro"
                            style={styles.radioButton}
                            disabled={true}

                        />
                        <RadioButton
                            value="Lapaz"
                            label="Lapaz"
                            style={styles.radioButton}
                            disabled={true}


                        />
                        <RadioButton
                            value="Lapuz"
                            label="Lapuz"
                            style={styles.radioButton}
                            disabled={true}

                        />
                        <RadioButton
                            value="City Proper"
                            label="City Proper"
                            style={styles.radioButton}
                            disabled={true}

                        />
                        <RadioButton
                            value="Mandurriao"
                            label="Mandurriao"
                            style={styles.radioButton}
                            disabled={true}

                        />
                        <RadioButton
                            value="Villa Arevalo"
                            label="Villa Arevalo"
                            style={styles.radioButton}
                            disabled={true}

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
                        disabled={true}
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
                        disabled={true}
                    />
                    <Divider />
                    <TextField
                        defaultValue={def.rate.minRate}

                        hintText="Minimum"
                        //defaultValue={minRate}
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
                        disabled={true}

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
                        disabled={true}

                    />
                    <Divider />
                    <div>
                        <label style={headerStyle.margin}>Exclusivity:</label>
                        <RadioButtonGroup name="exclusivity" style={{
                            // width: 50,
                            marginLeft: 20,
                            // height: 43,
                        }}
                            defaultSelected={def.exclusivity}>
                            <RadioButton
                                value="Male"
                                label="Male Only"
                                style={styles.radioButton}
                                disabled={true}
                            />
                            <RadioButton
                                value="Female"
                                label="Female Only"
                                style={styles.radioButton}
                                disabled={true}
                            />
                            <RadioButton
                                value="No Exclusivity"
                                label="No Exlcusivity"
                                style={styles.radioButton}
                                disabled={true}
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
                        defaultSelected={def.hasAirconRooms}>
                        <RadioButton
                            value="No"
                            label="No"
                            style={styles.radioButton}
                            disabled={true}
                        />
                        <RadioButton
                            value="Yes"
                            label="Yes"
                            style={styles.radioButton}
                            disabled={true}
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
                        disabled={true}

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
                        disabled={true}

                    />
                    <Divider />
                    <label style={headerStyle.margin}>Permit Issue Date:</label>
                    <DatePicker
                        hintText="Permit Issue Date"
                        mode="landscape"
                        name="dateIssued"
                        onChange={boardingHouseStore.handleDate}
                        // onChange={(e, { date }, param) => props.dateCheck(e, { date }, "bhPermit")}
                        style={{ marginLeft: 20 }}
                        underlineShow={false}
                        disabled = {true}
                        // defaultValue = {boardingHouseStore.bhPermit.dateIssued}
                    />
              
                    <br />
                    <Divider />
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
                        disabled={true}
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
                        disabled={true}
                        defaultValue={def.bhAddress.long}
                    />


                    {/* <List>
                        <label style={formTitleStyle.margin}>Owner Information</label>

                        <TextField
                            hintText="Last Name"
                            floatingLabelText="Last Name"
                            name="lastName"
                            onChange={(e, value, param) => boardingHouseStore.change(e, value, "ownerInfo")}
                            underlineFocusStyle={textFieldStyle.underlineFocusStyle}
                            underlineStyle={textFieldStyle.underlineStyle}
                            floatingLabelStyle={textFieldStyle.floatingLabelStyle}
                            floatingLabelFocusStyle={textFieldStyle.floatingFocusLabelStyle}
                            style={{ marginLeft: 20 }}
                            underlineShow={false}
                            defaultValue={def.ownerInfo.lastName}
                            disabled={true}

                        /><Divider />

                        <TextField
                            hintText="First Name"
                            floatingLabelText="First Name"
                            onChange={(e, value, param) => boardingHouseStore.change(e, value, "ownerInfo")}
                            name="firstName"
                            underlineFocusStyle={textFieldStyle.underlineFocusStyle}
                            underlineStyle={textFieldStyle.underlineStyle}
                            floatingLabelStyle={textFieldStyle.floatingLabelStyle}
                            floatingLabelFocusStyle={textFieldStyle.floatingFocusLabelStyle}
                            style={{ marginLeft: 20 }}
                            underlineShow={false}
                            defaultValue={def.ownerInfo.firstName}
                            disabled={true}
                        /><Divider />

                        <TextField
                            hintText="Middle Name"
                            floatingLabelText="Middle Name"
                            onChange={(e, value, param) => boardingHouseStore.change(e, value, "ownerInfo")}
                            name="middleName"
                            underlineFocusStyle={textFieldStyle.underlineFocusStyle}
                            underlineStyle={textFieldStyle.underlineStyle}
                            floatingLabelStyle={textFieldStyle.floatingLabelStyle}
                            floatingLabelFocusStyle={textFieldStyle.floatingFocusLabelStyle}
                            style={{ marginLeft: 20 }}
                            underlineShow={false}
                            defaultValue={def.ownerInfo.middleName}
                            disabled={true}
                        /><Divider />

                        <TextField
                            hintText="Contact Number"
                            floatingLabelText="Contact Number"
                            name="contactNumber"
                            onChange={(e, value, param) => boardingHouseStore.change(e, value, "ownerInfo")}
                            underlineFocusStyle={textFieldStyle.underlineFocusStyle}
                            underlineStyle={textFieldStyle.underlineStyle}
                            floatingLabelStyle={textFieldStyle.floatingLabelStyle}
                            floatingLabelFocusStyle={textFieldStyle.floatingFocusLabelStyle}
                            style={{ marginLeft: 20 }}
                            underlineShow={false}
                            defaultValue={def.ownerInfo.contactNumber}
                            disabled={true}

                        /><br />
                    </List> */}
                </List>
            </Paper>

        </div >
    </div>
}

export default inject('rootStore')(observer(Something2));
//export default Something2;    

//LandingPage
//LandingRouter
//Something
//Something2
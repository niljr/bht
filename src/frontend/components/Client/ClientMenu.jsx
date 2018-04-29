import React from 'react';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import RaisedButton from 'material-ui/RaisedButton';
import Divider from 'material-ui/Divider';
import { RadioButton, RadioButtonGroup } from 'material-ui/RadioButton';
import { orange500, blue500 } from 'material-ui/styles/colors';
import TextField from 'material-ui/TextField';
import { inject, observer } from 'mobx-react';

import AppBar from 'material-ui/AppBar';
import { List, ListItem } from 'material-ui/List';
import Home from './Home';


const styles = {
    block: {
        maxWidth: 250,
    },
    radioButton: {
        marginBottom: 16,
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
const ClientMenu = ({ rootStore: { domainStore: { boardingHouseStore, userStore } } }) => (
    <div>

        {/* <Drawer docked={true}
            open={true}
            width={"17%"}
        > */}
        <div style={{ display: 'flex', 'flexDirection': 'row' }}>

            <div style={{ flex: 1 }}>
                <List>
                    <RadioButtonGroup name="exclusivity" style={{
                        marginLeft: 20,
                        // height: 43,

                    }}
                        onChange={boardingHouseStore.checkValue}
                        defaultSelected={boardingHouseStore.filter.exclusivity}>
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

                    <Divider />

                    <br />

                    <RadioButtonGroup name="districtName" style={{
                        // width: 50,
                        marginLeft: 20,
                        // height: 43,

                    }}
                        onChange={(e, value) => boardingHouseStore.checkValue(e, value)}

                        defaultSelected={boardingHouseStore.filter.districtName}>
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
                            value="Molo"
                            label="Molo"
                            style={styles.radioButton}
                        />

                        <RadioButton
                            value="Villa Arevalo"
                            label="Villa Arevalo"
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
                            value="Lapuz"
                            label="Lapuz"
                            style={styles.radioButton}
                        />
                    </RadioButtonGroup>


                    <Divider />

                    <br />
                    <RadioButtonGroup name="hasAirconRooms" style={{
                        marginLeft: 20,
                    }}
                        onChange={(e, value) => boardingHouseStore.checkValue(e, value)}

                        defaultSelected={boardingHouseStore.filter.hasAirconRooms}>
                        <RadioButton
                            value="Yes"
                            label="Has Aircon Rooms"
                            style={styles.radioButton}

                        />
                        <RadioButton
                            value="No"
                            label="No Aircon Rooms"
                            style={styles.radioButton}

                        />
                    </RadioButtonGroup>
                    <Divider />
                    <TextField
                        defaultValue={boardingHouseStore.filter.minRate}
                        hintText="Minimum"
                        type={"number"}
                        name="minRate"
                        floatingLabelText="Minimum Rate"
                        onChange={(e, value) => boardingHouseStore.checkValue(e, value)}
                        //floatingLabelFixed={true}
                        underlineFocusStyle={textFieldStyle.underlineFocusStyle}
                        underlineStyle={textFieldStyle.underlineStyle}
                        floatingLabelStyle={textFieldStyle.floatingLabelStyle}
                        floatingLabelFocusStyle={textFieldStyle.floatingFocusLabelStyle}
                        style={{
                            width: 120,
                            marginLeft: 20,
                        }}
                        underlineShow={false}

                    />
                    <br />
                    <TextField
                        defaultValue={boardingHouseStore.filter.maxRate}
                        hintText="Maximum"
                        type={"number"}
                        name="maxRate"
                        onChange={boardingHouseStore.checkValue}
                        floatingLabelText="Maximum Rate"
                        underlineFocusStyle={textFieldStyle.underlineFocusStyle}
                        underlineStyle={textFieldStyle.underlineStyle}
                        floatingLabelStyle={textFieldStyle.floatingLabelStyle}
                        floatingLabelFocusStyle={textFieldStyle.floatingFocusLabelStyle}
                        style={{
                            width: 120,
                            marginLeft: 20,
                        }}
                        underlineShow={false}

                    />
                    <Divider />
                    <br />
                    <center>
                        <RaisedButton
                            label="RESET"
                            primary={true}
                            onClick={boardingHouseStore.resetFilters}     
                        />
                    </center>
                </List>
            </div>
            <div style={{ flex: 4 }}>
                <Home />
            </div>
        </div>

        {/* </Drawer> */}
    </div>
);
export default inject('rootStore')(observer(ClientMenu));

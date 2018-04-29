import React, { Component } from 'react';
import {
    Table,
    TableBody,
    TableHeader,
    TableHeaderColumn,
    TableRow,
    TableRowColumn,
} from 'material-ui/Table';
import Paper from 'material-ui/Paper'
import { inject, observer } from 'mobx-react';

import CircularProgress from 'material-ui/CircularProgress';
// import Preview from './Preview';
import TextField from 'material-ui/TextField';
import IconMenu from 'material-ui/IconMenu';
import IconButton from 'material-ui/IconButton';
import FontIcon from 'material-ui/FontIcon';
import NavigationExpandMoreIcon from 'material-ui/svg-icons/navigation/expand-more';
import MenuItem from 'material-ui/MenuItem';
import DropDownMenu from 'material-ui/DropDownMenu';
import RaisedButton from 'material-ui/RaisedButton';
import { Toolbar, ToolbarGroup, ToolbarSeparator, ToolbarTitle } from 'material-ui/Toolbar';
import { Tab, Tabs } from 'material-ui/Tabs';
// import Tabs from 'material-ui/Tabs';
import { orange500, blue500 } from 'material-ui/styles/colors';


import SearchBar from 'material-ui-search-bar'
import { Link } from 'react-router-dom'
import Dialog from 'material-ui/Dialog';

import FlatButton from 'material-ui/FlatButton';
import View from '../Layout/View';

import ChartComponent from './ChartComponent'
const style = {
    margin: 5,
    width: 5
};
import { Redirect } from 'react-router-dom';

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

const Dashboard = ({ rootStore: { domainStore: { boardingHouseStore, userStore } }, path }) => (
    userStore.loggedInUser
        ? userStore.loggedInUser.role !== "admin" ? <Redirect to="/cmenu" /> :
            <div>
                <Paper>
                    <Toolbar>
                        <ToolbarGroup firstChild={true}>
                            <ToolbarSeparator />
                            <SearchBar
                                onChange={() => console.log('onChange')}
                                onRequestSearch={() => console.log('onRequestSearch')}
                                style={{
                                    margin: '0 auto',
                                    maxWidth: 800,
                                    width: 800
                                }}
                            />
                            <ToolbarSeparator />
                        </ToolbarGroup>
                        <ToolbarGroup>
                            {/* <ToolbarTitle text="Options" /> */}
                            <FontIcon className="muidocs-icon-custom-sort" />
                            <ToolbarSeparator />
                            <Link to="/bhForm">
                                <RaisedButton label="Add a Boarding House" primary={true} />
                            </Link>
                        </ToolbarGroup>
                    </Toolbar>

                    {
                        boardingHouseStore.boardingHouses.length > 0 ?
                            <Table>
                                <TableHeader>
                                    <TableRow>
                                        <TableHeaderColumn>Boarding House Name</TableHeaderColumn>
                                        {/* <TableHeaderColumn>Owner</TableHeaderColumn> */}
                                        <TableHeaderColumn>Address</TableHeaderColumn>
                                        <TableHeaderColumn></TableHeaderColumn>
                                        <TableHeaderColumn></TableHeaderColumn>


                                    </TableRow>
                                </TableHeader>
                                <TableBody>

                                    {
                                        boardingHouseStore.boardingHouses.map(bh =>
                                            <TableRow>
                                                <TableRowColumn>{bh.bhName}</TableRowColumn>
                                                {/* <TableRowColumn>{bh.ownerInfo.firstName + " " + bh.ownerInfo.lastName}</TableRowColumn> */}
                                                <TableRowColumn>{bh.bhAddress.fullAddress}</TableRowColumn>
                                                <TableRowColumn>
                                                    <RaisedButton label="View" style={style} onClick={() => boardingHouseStore.handleModal("openModal", bh)} />
                                                    <Dialog
                                                        title="Additional Information"
                                                        actions={[
                                                            <FlatButton
                                                                label="Close"
                                                                primary={true}
                                                                onClick={() => boardingHouseStore.handleCloseModal("openModal")}
                                                            />,
                                                        ]}
                                                        modal={true}
                                                        open={boardingHouseStore.openModal}
                                                    >
                                                        <View store={boardingHouseStore} />
                                                    </Dialog>
                                                    <Link to={`/dashboard/${bh._id}`}>
                                                        <RaisedButton label="Edit" primary={true} style={style} />
                                                    </Link>
                                                </TableRowColumn>
                                                <TableRowColumn>
                                                    <RaisedButton label="Delete" secondary={true} style={style} onClick={() => boardingHouseStore.handleModal("deleteModal", bh)} />
                                                    <Dialog
                                                        title="Confirm Deleteion"
                                                        actions={[
                                                            <FlatButton
                                                                label="Close"
                                                                primary={true}
                                                                onClick={() => boardingHouseStore.handleCloseModal("deleteModal")}
                                                            />,
                                                            <FlatButton
                                                                label="Delete"
                                                                secondary={true}
                                                                onClick={() => boardingHouseStore.deleteBh(bh)}
                                                            />
                                                        ]}
                                                        modal={true}
                                                        open={boardingHouseStore.deleteModal}
                                                    >
                                                    </Dialog>
                                                </TableRowColumn>
                                            </TableRow>
                                        )
                                    }


                                </TableBody>
                            </Table>
                            :
                            <center><CircularProgress size={80} thickness={5} /></center>
                    }

                </Paper>
            </div >
        : <Redirect to="/" />

)

export default inject('rootStore')(observer(Dashboard));
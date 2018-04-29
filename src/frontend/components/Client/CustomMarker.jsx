import React, { Component } from 'react';
import { Marker, InfoWindow } from 'google-maps-react';
class CustomMarker extends Component {
    state = {
        showInfoWindow: false
    };
    handleMouseOver = e => {
        this.setState({
            showInfoWindow: true
        });
    };
    handleMouseExit = e => {
        this.setState({
            showInfoWindow: false
        });
    };
    render() {
        const { showInfoWindow } = this.state;
        const { info, lat, lng } = this.props;
        return (
            <Marker position={{ lat, lng }} onMouseOver=
                {this.handleMouseOver} onMouseOut={this.handleMouseExit}>
                {showInfoWindow && (
                    <InfoWindow>
                        <h4>{info}</h4>
                    </InfoWindow>
                )}
            </Marker>
        );
    }
}
export default CustomMarker;
import React from 'react';
import { withScriptjs, withGoogleMap, GoogleMap, Marker, MarkerClusterer, HeatmapLayer, InfoWindow } from "react-google-maps"

class BoardingHouseMarker extends React.Component {
    render() {
        let { location, label, key, price } = this.props.marker;

        return (
            <Marker
                    // onClick={() => props.history.push(`/dashboard/reports/${marker.key}`, marker.report)}
                    position={{ lat: location.lat, lng: location.lng }}
                    label={price}
                    onClick={this.props.onToggleOpen}
                    // icon={{
                    //     url: "M47.631,85.347c0.333,0,0.538,0.006,0.744,0c3.097-0.074,6.196-0.112,9.292-0.234c2.659-0.107,5.321-0.227,7.968-0.489    c3.224-0.322,6.44-0.737,9.644-1.233c3.476-0.538,6.827-1.525,10.055-2.979c2.998-1.35,5.005-3.502,6.173-6.572    c1.569-4.127,2.367-8.413,2.79-12.773c0.282-2.93,0.475-5.874,0.54-8.814c0.076-3.531-0.013-7.067-0.056-10.602    c-0.05-4.043-0.39-8.065-1.03-12.057c-0.521-3.229-1.304-6.383-2.593-9.407c-1.038-2.435-2.721-4.204-5.091-5.396    c-3.839-1.934-7.935-2.988-12.151-3.572c-3.471-0.481-6.96-0.873-10.452-1.145c-3.688-0.289-7.389-0.512-11.088-0.545    c-5.1-0.047-10.203,0.074-15.303,0.202c-2.64,0.063-5.284,0.22-7.911,0.483c-3.186,0.32-6.365,0.74-9.529,1.225    c-3.537,0.537-6.945,1.536-10.212,3.036c-2.784,1.28-4.754,3.249-5.896,6.106c-1.713,4.281-2.535,8.757-2.961,13.309    c-0.271,2.894-0.472,5.8-0.534,8.703c-0.075,3.531,0.013,7.066,0.056,10.601c0.048,4.042,0.392,8.063,1.031,12.058    c0.521,3.246,1.307,6.424,2.614,9.455c0.996,2.313,2.552,4.1,4.833,5.191c1.274,0.609,2.563,1.214,3.892,1.69    c4.759,1.708,9.739,2.317,14.729,2.834c2.606,0.269,5.227,0.464,7.844,0.576c3.887,0.169,7.779,0.237,11.669,0.349    c0.144,0.005,0.287-0.022,0.484-0.044c-0.074-0.179-0.115-0.322-0.187-0.448c-1.437-2.485-2.894-4.959-4.307-7.458    c-0.851-1.501-2.145-2.146-3.815-2.223c-1.848-0.084-3.698-0.156-5.538-0.333c-3.817-0.251-6.719-0.481-10.85-1.154    c-2.238-0.271-4.381-0.903-6.394-1.979c-1.769-0.942-2.994-2.294-3.705-4.174c-1.02-2.701-1.62-5.508-1.861-8.361    c-0.309-3.667-0.507-7.349-0.572-11.025c-0.076-4.36,0.08-8.724,0.638-13.061c0.345-2.681,0.852-5.32,1.827-7.853    c1.854-3.977,5.451-5.031,6.889-5.372c2.631-0.625,5.323-1.037,8.01-1.375c2.506-0.313,5.034-0.466,7.558-0.605    c3.413-0.188,6.828-0.344,10.245-0.423c2.38-0.057,4.764-0.01,7.143,0.085c3.753,0.146,7.511,0.286,11.254,0.586    c3.322,0.267,6.634,0.701,9.939,1.145c6.308,0.791,8.35,3.487,9.073,5.431c0.535,1.465,1.025,2.96,1.377,4.476    c0.8,3.456,0.973,6.992,1.002,10.518c0.047,5.667,0.199,11.338-0.289,17c-0.223,2.561-0.656,5.071-1.354,7.553    c-0.796,2.827-2.438,4.815-5.171,5.969c-1.76,0.742-3.572,1.219-5.44,1.467c-3.271,0.563-9.681,1.242-16.334,1.476    c-1.938,0.087-3.383,0.818-4.342,2.561c-1.294,2.349-2.673,4.652-4.013,6.976C47.864,84.866,47.78,85.05,47.631,85.347z",
                    //     strokeColor: "#00bcd4",
                    //     anchor: iconAnchor
                    //   }}
                    // icon={icon}
                >
                    {
                        this.props.isOpen && 
                        <InfoWindow onCloseClick={this.props.onToggleOpen}>
                            <h1>hi</h1>
                        </InfoWindow>
                    }
                </Marker>
        );
    }
}

export default BoardingHouseMarker;
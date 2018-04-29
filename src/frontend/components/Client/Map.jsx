import React, { Component } from 'react';
import ReactDOM from 'react-dom'
import CustomMarker from './CustomMarker'


export default class Map extends Component {
    state = {
        locations: [
            { name: "Boarding House sa Kilid Dalan", location: { lat: 10.707359, lng: 122.563983 } },
            { name: "Your Current location", location: { lat: 10.7086097, lng: 122.56363429999999 } },
            { name: "John's Boarding House", location: { lat: 10.707731, lng: 122.564168 } },
            { name: "Jane's Boarding House", location: { lat: 10.708448, lng: 122.56533 } },
            { name: "Juan De la Cruz Dormitory", location: { lat: 10.708083, lng: 122.564812 } },

        ]
    }

    componentWillMount() {
        this.loadMap(); // call loadMap function to load the google map
    }

    loadMap() {
        if (this.props && this.props.google) { // checks to make sure that props have been passed
            const { google } = this.props; // sets props equal to google
            const maps = google.maps; // sets maps to google maps props

            const mapRef = this.refs.map; // looks for HTML div ref 'map'. Returned in render below.
            const node = ReactDOM.findDOMNode(mapRef); // finds the 'map' div in the React DOM, names it node

            const mapConfig = Object.assign({}, {
                center: { lat: 10.7086097, lng: 122.56363429999999 }, // sets center of google map to NYC.
                zoom: 18, // sets zoom. Lower numbers are zoomed further out.
                mapTypeId: 'roadmap' // optional main map layer. Terrain, satellite, hybrid or roadmap--if unspecified, defaults to roadmap.
            })

            this.map = new maps.Map(node, mapConfig); // creates a new Google map on the specified node (ref='map') with the specified configuration set above.

        }
        this.state.locations.forEach(location => { // iterate through locations saved in state
            const marker = new google.maps.Marker({ // creates a new Google maps Marker object.
                position: { lat: location.location.lat, lng: location.location.lng }, // sets position of marker to specified location
                map: this.map, // sets markers to appear on the map we just created on line 35
                title: location.name// the title of the marker is set to the name of the location
            });
        })
    }

    render() {
        const style = { // MUST specify dimensions of the Google map or it will not work. Also works best when style is specified inside the render function and created as an object
            width: '85vw', // 90vw basically means take up 90% of the width screen. px also works.
            height: '85vh' // 75vh similarly will take up roughly 75% of the height of the screen. px also works.
        }

        return ( // in our return function you must return a div with ref='map' and style.
            // <div ref="map" style={style}>
            //     loading map...
            // </div>
            <h1>test</h1>
        )
    }
}
import React from 'react';
import GoogleMapReact, { Marker } from 'google-map-react';
import ActionHome from 'material-ui/svg-icons/action/home';
import FlatButton from 'material-ui/FlatButton';
import { inject, observer } from 'mobx-react';
import View from '../Layout/View';
import Dialog from 'material-ui/Dialog'

const AnyReactComponent = ({ text, onClick }) => <FlatButton onClick={onClick}><ActionHome />{text}</FlatButton>;

const SimpleMap = ({ rootStore: { domainStore: { boardingHouseStore } } }) => {
    const position = {
        center: {
            lat: 10.7086097,
            lng: 122.56363429999999
        },
        zoom: 14
    }

    function renderMarkers(map, maps) {
        let markers = [];
        {
            markers = boardingHouseStore.boardingHouses.filter(y => (
                y.isAvailable === false &&
                y.hasExpired() === false &&
                y.exclusivity === boardingHouseStore.filter.exclusivity &&
                y.bhAddress.districtName === boardingHouseStore.filter.districtName &&
                y.hasAirconRooms === boardingHouseStore.filter.hasAirconRooms &&
                y.rate.minRate <= boardingHouseStore.filter.minRate &&
                y.rate.maxRate >= boardingHouseStore.filter.maxRate
            )
            ).map(x =>
                new maps.Marker({
                    position: {
                        lat: parseFloat(x.bhAddress.lat),
                        lng: parseFloat(x.bhAddress.long)
                    },
                    map,
                    title: x.bhName,
                    bhData: x,

                })
                );
        }
        if (markers.length > 0) {
            markers.map(marker =>
                marker.addListener('click', () => {
                    // console.log('clicked!')
                    boardingHouseStore.handleModal("openModal", marker.bhData)
                    // console.log(marker);
                    // console.log(maps)
                    // console.log(map)
                    map.setCenter(marker.position);
                })
            )
        }
    }
    return (
        <div
            style={{
                display: 'flex',
                'justifyContent': 'center',
                'alignItems': 'center',
                flex: 1,
                height: "100%"
            }}
        >
            <GoogleMapReact
                bootstrapURLKeys={{ key: 'AIzaSyB6xTOk3aTgbtxiystM_hlRoAgAKKAGEcc', lang: 'en', libraries: 'places' }}
                defaultCenter={position.center}
                defaultZoom={position.zoom}
                center={position.center}
                options={function (maps) {
                    return {
                        zoomControlOptions: {
                            position: maps.ControlPosition.RIGHT_CENTER,
                            style: maps.ZoomControlStyle.SMALL
                        },
                        mapTypeControlOptions: {
                            position: maps.ControlPosition.TOP_RIGHT
                        },
                        mapTypeControl: true
                    }
                }}
                onGoogleApiLoaded={({ map, maps }) => renderMarkers(map, maps)}
            >
                {/* <Dialog
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
                </Dialog> */}
            </GoogleMapReact>
        </div >
    );
}

export default inject('rootStore')(observer(SimpleMap))
import { useState } from 'react';
import ReactMapGL, { Marker } from 'react-map-gl';

import Address from './Address';

import LocationPin from '../assets/location-pin.png';

function Map(props) {
    const [viewport, setViewPort] = useState({
        width: "100%",
        height: "70vh",
        zoom: 15,
    });

    const mapBoxToken = 'pk.eyJ1IjoiaW5kcmFjYiIsImEiOiJja20xazUzb3AwOHZrMnB1bDZxM2JqbmJqIn0.u18YM0U2ByjsLEDKjdnfLQ';

    console.log(props?.latitude);

    return (
        <div>
            <ReactMapGL
                    latitude={props?.latitude}
                    longitude={props?.longitude}
                    {...viewport}
                    mapboxApiAccessToken={mapBoxToken}
                    onViewportChange={setViewPort}
                    mapStyle="mapbox://styles/mapbox/streets-v11"
                >
                    <>
                        <Address city={props?.data?.city} region={props?.data?.region} setShowMaps={props.setShowMaps} />
                        <Marker latitude={props?.latitude} longitude={props?.longitude} >
                            <img
                                src={LocationPin}
                                alt="https://www.freepik.com"
                                width="24px"
                                height="24px"
                            />
                        </Marker>
                    </>
                </ReactMapGL>
        </div>
    )
}

export default Map

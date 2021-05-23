import * as React from 'react';
import ReactMapGL, {Popup, Marker} from 'react-map-gl';
import { Button } from "@material-ui/core";

export default function App() {
  const [viewport, setViewport] = React.useState({
    longitude: -122.45,
    latitude: 37.78,
    zoom: 14
  });
  const [showPopup, togglePopup] = React.useState(false);

  return (
    <ReactMapGL {...viewport} width="35vw" height="75vh" onViewportChange={setViewport}>
      {showPopup && <Popup
          latitude={37.78-0.001}
          longitude={-122.45+0.00018}
          closeButton={true}
          closeOnClick={false}
          onClose={() => togglePopup(false)}
          anchor="top" >
          <div>
            <p>Restaurant Leo</p>
            <Button
                variant="contained" 
                color="secondary"
            >Get Directions</Button>
          </div>
        </Popup>}
        <Marker latitude={37.78} longitude={-122.45} offsetLeft={-20} offsetTop={-10}>
            <div>
                <img src="https://img.icons8.com/color/48/000000/map-pin.png" onClick={() => togglePopup(true)/*why not work if not arrow func*/}/>
            </div>
        </Marker>
    </ReactMapGL>
  );
}
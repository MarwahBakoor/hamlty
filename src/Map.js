import React from "react";
import {
  GoogleMap,
  useLoadScript,
  Marker,
} from "@react-google-maps/api";

import "@reach/combobox/styles.css";
import mapStyles from "./mapStyles";

const libraries = ["places"];
const mapContainerStyle = {
  height: "85vh",
  width: "100vw",
};
const options = {
  styles: mapStyles,
  disableDefaultUI: true,
  zoomControl: true,
};

export default function Map() {
  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey:'AIzaSyAZtzr0zKXCo5pPesqmYijcz4kx9uC7LP0',
    libraries,
  });

  const [markers] = React.useState([
    {
      lat: 21.421399587232834,
      lng: 39.879780855252385,
      time: new Date(),
    }, 
    {
      lat: 21.397745884461614,
      lng: 39.90116110689689,
      time: new Date(),
    },{
      lat: 21.343321132500492, 
      lng: 39.95979470301391,
      time: new Date(),
    }]);

    const [center, setCenter] = React.useState({
      lat: 21.421399587232834,
      lng: 39.879780855252385,
    });

    const [zoom,setZoom] = React.useState(10)

  const mapRef = React.useRef();
  const onMapLoad = React.useCallback((map) => {
    mapRef.current = map;
  }, []);

  const setPlace = (i) => {
    const {lat, lng } = markers[i];
    setCenter(()=>({
      lat: lat,
      lng: lng,
    }))
    setZoom(17)
  }


  if (loadError) return "Error";
  if (!isLoaded) return "Loading...";
  
  return (
    <div>
      <div className="google-map-header"> 
      أماكن التجمع 
      <div className="palces-buttons">
        <button className="palce-btn" onClick={()=> setPlace(0) }> منى </button>
        <button className="palce-btn" onClick={()=>setPlace(1) }> مزدلفة </button>
        <button className="palce-btn" onClick={()=>setPlace(2) }> عرفة </button>
      </div>
      </div>
      <GoogleMap
        id="map"
        mapContainerStyle={mapContainerStyle}
        zoom={zoom}
        center={center}
        options={options}
        onLoad={onMapLoad}
      >
        {markers.map((marker) => (
         
         <Marker
            key={`${marker.lat}-${marker.lng}`}
            position={{ lat: marker.lat, lng: marker.lng }}
            onClick={() => {
              window.open(`http://www.google.com/maps/place/${marker.lat},${marker.lng}`);
            }}
            icon={{
              url: `/location.png`,
              origin: new window.google.maps.Point(0, 0),
              anchor: new window.google.maps.Point(15, 15),
              scaledSize: new window.google.maps.Size(50, 50),
            }}
          /> 
        ))}
      </GoogleMap>
    </div>
  );
}
import React, {useEffect, useState} from 'react';
import ReactMapGL, {Marker, Popup} from 'react-map-gl'
import { GeolocateControl } from 'react-map-gl';
import {connect} from 'react-redux'
import myInfo from './myInfo'



function Map() {
    console.log("testing inside Map")
    const TOKEN ="pk.eyJ1IjoibnVubnlyZXllcyIsImEiOiJja2hhbmF6aDkwNzczMnJzYXI4d3VsdGNnIn0.L89fXnFLt8rnVvquFoFUOg"
  
    const [viewport, setViewPort]= useState({ 
      latitude: 40.730610,
      longitude: -73.935242,
      width: "95vw",
      height: "95vh",
      zoom: 10
    });
  
    const [selectedFlood, setSelectedFlood] = useState(null)

    // console.log("selectedFlood", selectedFlood)
   
    useEffect(() => {
        const listener  = e => {
        if(e.key === "Escape") {
          setSelectedFlood(null);
        }
      };
        window.addEventListener("keydown", listener);

        return() => {
          window.removeEventListener("keydown", listener)
        }
    }, []);
    
  //create a handleChange
    let handleChange=(viewport)=>{
      setViewPort(viewport)
    }
  

  
  
    return (
      
       <ReactMapGL 
       {...viewport} 
       mapboxApiAccessToken={TOKEN}
       mapstyle= "mapbox://styles/nunnyreyes/ckhcty1op17q61aqfmdevgw37"
       onViewportChange={handleChange}
      >

      <GeolocateControl
        positionOptions={{enableHighAccuracy: true}}
        trackUserLocation={true}
      /> 

       {myInfo.map((place) => (
        //  console.log("what is place", place),
        //  console.log("inner part", place.item.coordinates),
         <Marker key={place.item.place_id} latitude={place.item.coordinates[1]} longitude={place.item.coordinates[0]}> 
         
         <button 
           className="heart-btn" 
           onClick={e => {
            e.preventDefault();
            setSelectedFlood(place);
         }} 
         >
         
        <img src="https://cdn.iconscout.com/icon/premium/png-256-thumb/wave-60-1000305.png" alt="wave icon"></img>
         
         </button>
         </Marker>
       ))}

       {selectedFlood ? (
         <Popup latitude={selectedFlood.item.coordinates[1]} longitude={selectedFlood.item.coordinates[0]}
          onClose={()=> {
            setSelectedFlood(null);
          }}
         >
           <div>
            <h2>{selectedFlood.item.name}</h2>
            <p>{selectedFlood.item.description}</p>
           </div>
         </Popup>
        ) : null
        }
       </ReactMapGL>
     
    );
  }
  
  export default Map;
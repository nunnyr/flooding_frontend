import React, {useEffect, useState} from 'react';
import { GeolocateControl } from 'react-map-gl';
import ReactMapGL, {Marker, Popup} from 'react-map-gl'



function Map() {
    const TOKEN ="pk.eyJ1Ijoia3NvbG9tb243IiwiYSI6ImNrZ2gzODEzdjA0OHkycWxmOXpkY2VhdDIifQ.lnW9qKBPgt5JkWPhEGml_A"
  
    const [viewport, setViewPort]= useState({ 
      latitude: 40.730610,
      longitude: -73.935242,
      width: "100vw",
      height: "100vh",
      zoom: 10
    });
  
    const [selectedFlood, setSelectedFlood] = useState(null)
    useEffect(() => {
        const listener  = e => {
        if(e.key === "Escape") {
          setSelectedMemory(null);
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
       mapstyle= "mapbox://styles/ksolomon7/ckgh6bpp7060519pjac0q1pe6"
       onViewportChange={handleChange}
      >

      <GeolocateControl
        positionOptions={{enableHighAccuracy: true}}
        trackUserLocation={true}
      /> 

       {myMemory.map((place) => (
        //  console.log("what is place 😎", place),
        //  console.log("inner part", place.item.coordinates),
         <Marker key={place.item.place_id} latitude={place.item.coordinates[1]} longitude={place.item.coordinates[0]}> 
         
         <button 
           className="rain-btn" 
           onClick={e => {
            e.preventDefault();
            setSelectedFloood(place);
         }} 
         >
         
         
         </button>
         </Marker>
       ))}

       {selectedFlood ? (
         <Popup latitude={selectedMemory.item.coordinates[1]} longitude={selectedMemory.item.coordinates[0]}
          onClose={()=> {
            setSelectedMemory(null);
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
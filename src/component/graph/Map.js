import React, { useState, useEffect } from "react";
import axios from "axios";
import { MapContainer, TileLayer,Marker,Popup } from 'react-leaflet'
import 'leaflet/dist/leaflet.css'
import 'leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css'
import "leaflet-defaulticon-compatibility";
import Drawer from "../dashboard/Drawer"
import Navbar from "../Navbar";

const CountryMap = () => {
  const [data, setData] =useState([]); 

  useEffect(() => {
    
    const fetch = async () => {
      try {
        const response = await axios.get(
          "https://disease.sh/v3/covid-19/countries"
        );

        // Extract the data from the response
        const countriesData = response.data;

        // Update the state with the data to render
        setData(countriesData);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetch();
  }, []);

  return (
    <div>
    
    <Drawer />
    <Navbar name="Map"/>
    <div className="flex-grow p-2" style={{ width: '50%', height: '50%', marginLeft: '50%', transform: 'translateX(-50%)' }}>
    <MapContainer
      center={[0, 0]}
      zoom={2}
      style={{ height: "500px", width: "100%" }}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />

      {data.map((item, index) => (
        <Marker
          key={index}
          position={[item.countryInfo.lat, item.countryInfo.long]}
        >
          <Popup>
            <h2>Country: {item.country}</h2>
            <p>Active Cases: {item.active}</p>
            <p>Recovered Cases: {item.recovered}</p>
            <p>Deaths: {item.deaths}</p>
          </Popup>
        </Marker>
      ))}
    </MapContainer>
    </div>
   </div>
  );
};

export default CountryMap;

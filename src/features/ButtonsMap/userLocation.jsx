import LocationOnIcon from '@mui/icons-material/LocationOn';
import { Tooltip } from '@mui/material';
import Feature from 'ol/Feature';
import Point from 'ol/geom/Point';
import { Vector as VectorLayer } from 'ol/layer';
import { Icon } from 'ol/style';
import { Vector as VectorSource } from 'ol/source'; 
import React, { useState } from 'react';
import { Circle as CircleStyle, Fill, Stroke, Style } from 'ol/style'
import { mapInstance } from '../../config/layers/showmap';
import { vector } from '../../config/layers/vector';
import locationIcon from '../../assets/img/personicon.svg';
import apiGoogle from '../../services/apiGeolocationGoogle';

const apiKey = apiGoogle

function FindUser() {
  const [watchId, setWatchId] = useState(null);

  const buscarLocalizacao = async () => {
    try {
      const response = await fetch(`https://www.googleapis.com/geolocation/v1/geolocate?key=${apiKey}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          considerIp: true
        })
      });


      if (!response.ok) {
        throw new Error('Erro ao obter a localização');
      }

      const data = await response.json();
      const { location } = data;

      const coords = [location.lng, location.lat];
      const point = new Point(coords);
      const pointFeature = new Feature(point);
      

      const vectorStyle = [
        new Style({
          fill: new Fill({
            color: 'rgba(255, 255, 255, 0.2)'
          }),
          image: new CircleStyle({
            radius: 5,
            fill: new Fill({
              color: 'rgba(169,0,201,1)'
            })
          })
        }),

        new Style({
          image: new CircleStyle({
            radius: 70,
            fill: new Fill({
              color: 'rgba(255,255,255,0.4)'
            }),
            stroke: new Stroke({
              color: 'rgba(169,0,201,1)',
              width: 2
            })
          })
        })
      ]


   
      const markerLayer = new VectorLayer({
        style: vectorStyle 
      });

      vector.getSource().clear();
      vector.getSource().addFeature(pointFeature);

      mapInstance.addLayer(markerLayer);
      mapInstance.getView().setCenter(coords);
      mapInstance.getView().setZoom(20);
    } catch (error) {
      console.error('Erro ao obter localização:', error);
    }
  };

  const handleButtonClick = () => {
    if (watchId === null) {
      buscarLocalizacao();
      setWatchId(setInterval(buscarLocalizacao, 5000));
    } else {
      clearInterval(watchId);
      setWatchId(null);
    }
  };

  return (
    <div>
      <Tooltip title="Mostrar sua localização" placement="left">
        <button onClick={handleButtonClick} className="my-custom-btns">
          <LocationOnIcon />
        </button>
      </Tooltip>
    </div>
  );
}

export default FindUser;
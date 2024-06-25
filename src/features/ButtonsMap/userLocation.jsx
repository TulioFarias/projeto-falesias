import LocationOnIcon from '@mui/icons-material/LocationOn'
import { Tooltip } from '@mui/material'
import Feature from 'ol/Feature'
import Point from 'ol/geom/Point'
import { Vector as VectorLayer } from 'ol/layer'
import { Circle as CircleStyle, Fill, Stroke, Style, Icon } from 'ol/style'
import React from 'react'

import { mapInstance } from '../../config/layers/showmap'
import { vector } from '../../config/layers/vector'
import locationIcon from '../../assets/img/personicon.svg'


function FindUser() {
  const buscarLocalizacao = async () => {
    useEffect(() => {
      let watchId = null;
  
      const buscarLocalizacao = async () => {
        try {
          if (navigator.geolocation) {
            watchId = navigator.geolocation.watchPosition(position => {
              const { latitude, longitude } = position.coords
  
              const coords = [longitude, latitude]
              const point = new Point(coords)
              const pointFeature = new Feature(point)
              const vectorStyle = new Icon({
                anchor: [0.5, 1],
                src: locationIcon,
                scale: 0.1 
              })
  
              const markerLayer = new VectorLayer({
                source: vector.getSource(),
                style: vectorStyle,
              })
  
              vector.getSource().clear()
              vector.getSource().addFeature(pointFeature)
  
              mapInstance.addLayer(markerLayer)
              mapInstance.getView().setCenter(coords)
              mapInstance.getView().setZoom(20)
            })
          } else {
            alert('O navegador não suporta geolocalização.')
          }
        } catch (error) {
          console.error('Erro ao obter localização:', error)
        }
      }

      buscarLocalizacao();

      return () => {
        if (watchId !== null) {
          navigator.geolocation.clearWatch(watchId);
        }
      };
    }, []);
  }

  return (
    <div>
      <Tooltip title="Mostrar sua localização" placement="left">
        <button onClick={buscarLocalizacao} className="my-custom-btns">
          <LocationOnIcon />
        </button>
      </Tooltip>
    </div>
  )
}

export default FindUser
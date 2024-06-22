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
    try {
      if (navigator.geolocation) {
        
        await navigator.geolocation.getCurrentPosition(position => {
          const { latitude, longitude } = position.coords

          const coords = [longitude, latitude]
          console.log(coords)
          const point = new Point(coords)
          const pointFeature = new Feature(point)
          const vectorStyle = new Style({
            image: new Icon({
              anchor: [0.5, 1],
              src: locationIcon,
              scale: 0.1 // Ajuste a escala conforme necessário
            })
          })


          const markerLayer = new VectorLayer({
            source: vector.getSource(),
            style: vectorStyle,
            zIndex: 10
          })

         
          vector.getSource().clear()
          vector.getSource().addFeature(pointFeature)

          mapInstance.addLayer(markerLayer)
          mapInstance.getView().setCenter(coords)
          mapInstance.getView().setZoom(20)

        })
      } else {
        alert('Ocorreu um erro')
      }
    } catch (error) {
      console.error('Erro ao obter localização:', error)
    }
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
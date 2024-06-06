import MousePosition from 'ol/control/MousePosition.js'
import ScaleLine from 'ol/control/ScaleLine.js'
import { createStringXY } from 'ol/coordinate'
import React, { useEffect, useRef, useState } from 'react'
import {mapInstance} from '../../config/layers/showmap'
import Geolocation from './geolocationUser'
import '../../sass/containerMap/map.scss'


function ShowMap() {
  const [showMap, setShowMap] = useState(null)
  const mapTargetElement = useRef(null)

  const initializeMap = () => {
    if (mapInstance && mapTargetElement.current) {
      mapInstance.setTarget(mapTargetElement.current)

      const Scale = new ScaleLine()
      mapInstance.addControl(Scale)

      setShowMap(mapInstance)
    }
  }

  useEffect(() => {
    initializeMap();

    const handleMapRender = async () => {
      if (showMap) {
        
        Geolocation();
      }
    };

    handleMapRender();
  }, []);

  return (
    <div>
      <div ref={mapTargetElement} className="map"></div>
      <div className="container-coord" id="mouse-position"></div>
    </div>
  )
}

export default ShowMap;

import MousePosition from 'ol/control/MousePosition.js'
import ScaleLine from 'ol/control/ScaleLine.js'
import { createStringXY } from 'ol/coordinate'
import React, { useEffect, useRef, useState } from 'react'
import {mapInstance} from '../../config/layers/showmap'

import '../../sass/containerMap/map.scss'


function ShowMap() {
  const [showMap, setShowMap] = useState(null)
  const mapTargetElement = useRef(null)

  console.log(showMap, 'ta cheganod aqui')


  const initializeMap = () => {
    if (mapInstance && mapTargetElement.current) {
      mapInstance.setTarget(mapTargetElement.current)

      const Scale = new ScaleLine()
      mapInstance.addControl(Scale)

      // const mousePositionControl = new MousePosition({
      //   coordinateFormat: createStringXY(4),
      //   projection: 'EPSG:4326',
      //   className: 'custom-mouse-position',
      //   target: document.getElementById('mouse-position'),
      //   undefinedHTML: '&nbsp;'
      // })
      // mapInstance.addControl(mousePositionControl)

      setShowMap(mapInstance)
    }
  }

  useEffect(() => {
    initializeMap()
  }, [])

  return (
    <div>
      <div ref={mapTargetElement} className="map"></div>
      <div className="container-coord" id="mouse-position"></div>
    </div>
  )
}

export default ShowMap;

import { Vector as VectorLayer } from 'ol/layer'
import { Vector as VectorSource } from 'ol/source'
import { Circle as CircleStyle, Fill, Stroke, Style } from 'ol/style'

const newSource = new VectorSource()

const vector = new VectorLayer({
  source: newSource,
  style: [
    new Style({
      fill: new Fill({
        color: 'rgba(255, 255, 255, 0.2)'
      }),
      stroke: new Stroke({
        color: '#ffcc33',
        width: 2
      }),
      image: new CircleStyle({
        radius: 4,
        fill: new Fill({
          color: '#ffcc33'
        })
      })
    })
  ]
})



export { vector, newSource }
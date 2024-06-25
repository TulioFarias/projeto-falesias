
import Map from "ol/Map.js";
import View from "ol/View.js";
import { wmsLayer } from "./layersMap";
import {mapTilerLayer} from './layersMap'





const projection = 'EPSG:4326'
const center = [-38.6514543, -3.6832602];
const zoom = 20



const mapInstance = new Map({
  target: 'map',
  layers: [
      mapTilerLayer,
      wmsLayer
  ],
  view: new View({
      projection: projection,
      center: center,
      zoom: zoom,
      maxZoom: 18
  }),
  controls: []
});

export {mapInstance , zoom , center}


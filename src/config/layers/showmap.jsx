import TileLayer from "ol/layer/Tile.js";
import Map from "ol/Map.js";
import OSM from "ol/source/OSM.js";
import View from "ol/View.js";
import { XYZ } from "ol/source";


const projection = 'EPSG:4326'
const center = [-38.6514543, -3.6832602];
const zoom = 20

const mapTilerSource = new XYZ({
  url: 'https://api.maptiler.com/maps/satellite/256/{z}/{x}/{y}.jpg?key=dmrf4Btg9HX3i6jmHcpi',
  tileSize: 256,
  maxZoom: 20, 
  crossOrigin: 'anonymous'
});

const mapTilerLayer = new TileLayer({
  source: mapTilerSource
});

const mapInstance = new Map({
  target: 'map',
  layers: [
      mapTilerLayer
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


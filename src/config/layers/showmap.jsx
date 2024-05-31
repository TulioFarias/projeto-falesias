import TileLayer from "ol/layer/Tile.js";
import Map from "ol/Map.js";
import OSM from "ol/source/OSM.js";
import View from "ol/View.js";


const projection = 'EPSG:4326'
const center = [-38.6514543, -3.6832602];
const zoom = 20

const mapInstance = new Map({
  target: 'map',
  layers: [
    new TileLayer({
      source: new OSM(),
    }),
  ],
  view: new View({
    projection,
    center,
    zoom,
    maxZoom: 18
  }),
  controls: []
});

export {mapInstance}


import TileLayer from 'ol/layer/Tile';
import TileWMS from 'ol/source/TileWMS';
import { XYZ } from "ol/source";
import OSM from 'ol/source/OSM';
const wmsLayer = new TileLayer({
  visible: true,
  source: new TileWMS({
    url: 'http://localhost:8080/geoserver/layer_pacheco/wms?',
    crossOrigin: 'anonymous',
    params: {
      'LAYERS': 'layer_pacheco:zona_perigo_elevado',
      'TILED': true,
      'VERSION': '1.1.1',
      'FORMAT': 'image/png',
      'SRS': 'EPSG:4326',
    }
  }),
  zIndex: 99
});

const mapTilerSource = new XYZ({
  url: 'https://api.maptiler.com/maps/satellite/256/{z}/{x}/{y}.jpg?key=dmrf4Btg9HX3i6jmHcpi',
  tileSize: 256,
  maxZoom: 20,
  crossOrigin: 'anonymous'
});


const mapTilerLayer = new TileLayer({
  source: mapTilerSource,
});


const osmLayer = new TileLayer({
    source: new OSM(),
  });

const layers = [ wmsLayer, mapTilerLayer];

export { layers };
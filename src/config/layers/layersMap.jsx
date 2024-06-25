import TileLayer from 'ol/layer/Tile';
import TileWMS from 'ol/source/TileWMS';
import { XYZ } from "ol/source";


const wmsLayer = new TileLayer({
  visible: true,
  source: new TileWMS({
    title: 'Layer_Pacheco',
    url: 'http://localhost:8080/geoserver/exemplo_gis/wms?service=WMS&version=1.1.0&request=GetMap&layers=exemplo_gis%3Azona_perigo1&bbox=538441.4375%2C9592725.0%2C539035.125%2C9593034.0&width=768&height=399&srs=EPSG%3A31974&styles=&format=application/openlayers',
    serverType: 'geoserver',
    crossOrigin: 'anonymous',
    params: {
      'LAYERS': 'exemplo_gis:zona_perigo1',
      'TILED': true,
      'VERSION': '1.1.0',
      'FORMAT': 'image/png',
    }
  }),
  

});

const mapTilerSource = new XYZ({
    url: 'https://api.maptiler.com/maps/satellite/256/{z}/{x}/{y}.jpg?key=dmrf4Btg9HX3i6jmHcpi',
    tileSize: 256,
    maxZoom: 20, 
    crossOrigin: 'anonymous'
  });
  
  const mapTilerLayer = new TileLayer({
    source: mapTilerSource
  });


  wmsLayer.setZIndex(1);
  



export { wmsLayer , mapTilerLayer};
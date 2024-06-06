import { useEffect } from 'react';
import { fromLonLat } from 'ol/proj';
import Feature from 'ol/Feature';
import Point from 'ol/geom/Point';
import Icon from 'ol/style/Icon';
import Style from 'ol/style/Style';
import VectorSource from 'ol/source/Vector';
import VectorLayer from 'ol/layer/Vector';
import { mapInstance } from '../../config/layers/showmap';

const Geolocation = () => {
   
  useEffect(() => {
    if (!mapInstance) return;

   
    const iconFeature = new Feature({
      geometry: new Point(fromLonLat([0, 0])), // Posição inicial arbitrária
      name: 'User Location'
    });

    const iconStyle = new Style({
      image: new Icon({
        anchor: [0.5, 1],
        src: '' 
      })
    });

    iconFeature.setStyle(iconStyle);

    const vectorSource = new VectorSource({
      features: [iconFeature]
    });

    const vectorLayer = new VectorLayer({
      source: vectorSource
    });

    mapInstance.addLayer(vectorLayer);

    // Obter localização do usuário em tempo real
    if ('geolocation' in navigator) {
      navigator.geolocation.watchPosition(
        (position) => {
          const coords = [position.coords.longitude, position.coords.latitude];
          const newCoords = fromLonLat(coords);
          console.log(newCoords)
        //   iconFeature.getGeometry().setCoordinates(newCoords);

         
          mapInstance.getView().setCenter(newCoords);
        },
        (error) => {
          console.error('Erro ao obter localização:', error);
        },
        {
          enableHighAccuracy: true,
          maximumAge: 0,
          timeout: 60000
        }
      );
    } else {
      console.error('Geolocation não é suportado por este navegador.');
    }
  }, [mapInstance]);

  return null;
};

export default Geolocation;
import { Tooltip } from '@mui/material';
import React, {useState} from 'react';
import MapRoundedIcon from '@mui/icons-material/MapRounded';
import { mapInstance } from '../../config/layers/showmap';
import { layers } from '../../config/layers/layersMap';



function ChangeMap() {

    console.log(layers)

    const [isRoadMap, setIsRoadMap] = useState(true);

    const handleClick = () => {
        mapInstance.getLayers().clear();

        // Adicionar o WMS Layer de volta ao mapa
        mapInstance.addLayer(layers[0]); // Assume que o WMS Layer está no índice 0

        if (isRoadMap) {
            mapInstance.addLayer(layers[2]); // Adiciona a camada de satélite do Google (supondo que está no índice 2)
        } else {
            mapInstance.addLayer(layers[1]); // Adiciona a camada de estradas do Google (supondo que está no índice 1)
        }

        setIsRoadMap(!isRoadMap);
    };

    return (
        <>
            <Tooltip
                title="Trocar mapa"
                placement="left"
                alt="changeMap"
            >
                <div className="ChangeMap">
                    <button className="my-custom-btns" onClick={handleClick}>
                        <MapRoundedIcon />
                    </button>
                    <div className="ChangeMapContent">
                        {' '}
                    </div>
                </div>
            </Tooltip>
        </>
    );
}

export default ChangeMap;

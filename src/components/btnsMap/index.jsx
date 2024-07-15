import ZoomInOut from "../../features/ButtonsMap/zoommap";
import RendMap from '../../features/ButtonsMap/rendMap'
import '../../sass/btnsMap/btnsMap.scss'
import FindUser from "../../features/ButtonsMap/userLocation";
import ChangeMap from "../../features/ButtonsMap/changeMap";



function ButtonsMap(){

    return(
        <>
        <div className="ContainerBtnsMapWrapper">
        <FindUser/>
        <RendMap/>
        <ZoomInOut/>
        <ChangeMap/>
        
        </div>
    
        </>
    )
}

export default ButtonsMap
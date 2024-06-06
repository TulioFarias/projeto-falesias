import ZoomInOut from "../../features/ButtonsMap/zoommap";
import RendMap from '../../features/ButtonsMap/rendMap'
import '../../sass/btnsMap/btnsMap.scss'



function ButtonsMap(){

    return(
        <>
        <div className="ContainerBtnsMapWrapper">
        <RendMap/>
        <ZoomInOut/>
        </div>
    
        </>
    )
}

export default ButtonsMap
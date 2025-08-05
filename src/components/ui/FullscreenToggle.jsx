import { useEffect, useState } from "react";
import Button from './Button';
import { Tooltip } from "react-tooltip";
import { GoScreenFull } from "react-icons/go";
import { RxExitFullScreen } from "react-icons/rx";

const FullscreenToggle = () => {
    const [ isFullScreen, setIsFullScreen ] = useState( false );
    useEffect( () => {
        const handleFullscreenChange = () => setIsFullScreen( !!document.fullscreenElement );
        document.addEventListener( 'fullscreenchange', handleFullscreenChange );
        return () => document.removeEventListener( 'fullscreenchange', handleFullscreenChange );
    }, [] );
    function handleScreenToggle(){
        if( document.fullscreenElement ){
            document.exitFullscreen().catch( err => console.error("Failed to exit full-screen mode:", err) );
        } else{
            document.documentElement.requestFullscreen().catch( err => console.error("Failed to enable full-screen mode:", err) );
        }
    }
    return(
        <Button className="block !p-0 bg-transparent !text-theme dark:!text-gray-400 hover:!text-primary dark:hover:!text-primary border-0" onClick={ handleScreenToggle }>
            { isFullScreen ? <RxExitFullScreen size={ 24 } className="block" data-tooltip-id="screenTooltip" data-tooltip-content="Exit Fullscreen" /> : <GoScreenFull size={ 24 } className="block" data-tooltip-id="screenTooltip" data-tooltip-content="Enter Fullscreen" /> }
            <Tooltip id="screenTooltip" className="text-sm capitalize leading-none !p-2" />
        </Button>
    )
}
export default FullscreenToggle;
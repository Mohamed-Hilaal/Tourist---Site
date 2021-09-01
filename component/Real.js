import React,{useRef} from 'react'
import { Button } from './Button'
import "./Real.css"
import "../App.css"



function Real() {


    const vidRef = useRef();
    const handlePlayVideo = () => {
      vidRef.current.play();
    
    }

    
    return (
        <div className="Real-conatiner">
            <video src="/Videos/My Video.mp4" autoPlay loop muted ref = {vidRef} onClick={handlePlayVideo} ></video>

            <div className="btnd">
             <h1 className='typ'>REAL AWAITS AFTER YOUR REEL</h1>
             <p className="pty">Hey What Are you What Are you Waiting for !</p>
             <div className="btnr">
             <Button className="btn"buttonStyle="btn--outline" buttonSize="btn--large">GET STARTED</Button>
             <Button className="btn" buttonStyle="btn--primary" buttonSize="btn--large">WATCH IT !<i className="far fa-play-circle"></i></Button>
        
        
        
        </div></div></div>
        

    )
}

export default Real

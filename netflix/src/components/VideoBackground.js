import React from "react";
import VideoTitle from "./VideoTitle";

const VideoBackground =()=>{
    return(
        <div className='w-[vw] overflow-hidden'>
            <VideoTitle/>
          <div >
          <iframe className="w-screen aspect-video mt-[-80px]" src="https://www.youtube.com/embed/ee9i6oMqShk?si=L3dDKzOw71M2Zt_e&amp;start=70&autoplay=1&mute=1" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                  </div>
        </div>
        
    )
}
export default VideoBackground
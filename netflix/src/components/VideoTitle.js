import React from "react";
import { CiPlay1 ,CiCircleInfo} from "react-icons/ci";
const VideoTitle =()=>{
    return(
        <div  className="absolute text-white mt-60 ml-8  ">
            <h3 className="font-bold text-3xl">KING KONG</h3>
            <p>Contrary to popular belief, Lorem Ipsum is not simply random text.</p>
            <div className="flex">
                <button className="flex bg-white text-gray-800 font-semibold p-1 px-2 rounded-md  mt-2 hover:opacity-50"><CiPlay1 size="24px" />
            <span className='ml-1'>Play</span></button>
            <button className="flex bg-white text-gray-800 font-semibold p-1 px-2 opacity-60 rounded-md ml-2 mt-2 hover:opacity-30"> <CiCircleInfo size="24px"/>
            <span className='ml-1'>Watch more</span> </button>
            </div>
            
        </div>
    )
}
export default VideoTitle
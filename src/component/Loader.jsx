import React from 'react'
import Lottie from 'lottie-react'
import PoliteChickyAnimation from "../../PoliteChicky.json"
function Loader() {
  return (
    <div className='flex justify-center items-center h-screen w-full bg-slate-900 transition-transform'>
        <Lottie animationData={PoliteChickyAnimation} loop={true} style={{height:400,width:400}}/>
    </div>
  )
}

export default Loader
import React from 'react'
import './Video.css'
import video from './video.mp4'
export default function Video() {
    return(
      <video id='video' controls>
        {/* <source src={video}></source> */}
      </video>

    )
}


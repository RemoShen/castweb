import React from 'react'
import YouTube from 'react-youtube'
export default function Video() {
    function _onReady(event) {
        // access to player in all event handlers via event.target
        event.target.pauseVideo();
    }
    const opts = {
        height: '390',
        width: '640',
        playerVars: {
          // https://developers.google.com/youtube/player_parameters
          autoplay: 1,
        },
      };
  
    return <YouTube className='video' videoId="2g811Eo7K8U" opts={opts} onReady={_onReady} />;
}


// this component displays the chosen video and some 
// details about the currently selected video underneath the video iframe window.

import React from 'react';

const VideoDetail = ({ video }) => {
  
  if(!video){
    return (
    <div>
      <h3 className="txt-white">Just start typing, then choose a video.</h3>
    </div>
    );
  }

  const videoSrc = `https://www.youtube.com/embed/${video.id.videoId}`;
  
  return (
    <div className="iframe__wrapper">
      <div className="ui embed">
        <iframe title="video player" src={videoSrc}/>
      </div>
      <div className="ui segment">
        <h4 className="ui header">{video.snippet.title}</h4>
        <p>{video.snippet.description}</p>
      </div>
    </div>
  );
}

export default VideoDetail;
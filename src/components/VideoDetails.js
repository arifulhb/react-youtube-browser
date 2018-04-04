import React from 'react';

const VideoDetail = ({ video }) => {


    if (!video){
        return <div>Loading...</div>;
    }

    // console.log('video: ', video);

    const videoId = video.id.videoId;
    const url = `https://www.youtube.com/embed/${videoId}`;

    return (
      <div className="video-detail col-md-8" style={{'marginBottom': '20px'}}>
          <div className="embed-responsive embed-responsive-16by9">
              <iframe className="embed-responsive-item" src = {url}></iframe>
          </div>
          <div className="details">
              <h3>{ video.snippet.title }</h3>
              <div style={{  'padding' : '10px 10px', 'backgroundColor':'#eee'}}>{ video.snippet.description }</div>
          </div>
      </div>
    );

};

export default VideoDetail;
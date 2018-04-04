import React from 'react';

const VideoListItem = ({video, onVideoSelect}) => {

    const imageUrl = video.snippet.thumbnails.default.url;
    const title = video.snippet.title;

    return (
      <li className="list-group-item">
          <div className="video-list media">

              <div className="media-left">
                  <img className="media-object" src={imageUrl}
                  onClick = { () => { onVideoSelect(video)} }
                  style={ {'cursor': 'pointer'}}/>
              </div>

              <div className="media-body">
                  <div className="media-heading"
                       style={ {'cursor': 'pointer'}}
                       onClick = { () => { onVideoSelect(video)} }
                  >{ title }</div>
              </div>

          </div>

      </li>
    );

};

export default VideoListItem;
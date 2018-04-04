import React from 'react';
import VideoListItem from './VideoListItem.js';

const VideoList = (props) => {

    const videoItems = props.videos.map((video) => {
        return (<VideoListItem
            onVideoSelect = {props.onVideoSelect}
            key = {video.etag}
            video = { video} />);
    });

    return (
      <div className="col-md-4 list-group">
          <h5>Video List</h5>
          <ul>
              {videoItems}
          </ul>
      </div>
    );

};

export default VideoList;

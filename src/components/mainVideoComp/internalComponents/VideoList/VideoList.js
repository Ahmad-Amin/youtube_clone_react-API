import React from 'react';
import './videoList.css';
import VideoList from '../VideoItem';

const VideoItem = (props) => {

    const renderedVideos = props
        .videos
        .map((v) => {
            return (
                <section key={v.etag} className="moreVideosSection">
                    <VideoList 
                        v={v}
                        handleVideoSelect={props.handleVideoSelect}></VideoList>
                </section>
            );
        });

    return (
        <div className="col-lg-3 col-md-3">
            {renderedVideos}
        </div>
    );
}

export default VideoItem;
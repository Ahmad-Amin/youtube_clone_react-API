import React from 'react';
import './videoList.css';
import VideoItem from '../VideoItem';

const VideoList = (props) => {

    const renderedVideos = props
        .videos
        .map((v) => {
            return (
                <section key={v.etag} className="moreVideosSection">
                    <VideoItem 
                        v={v}
                        handleVideoSelect={props.handleVideoSelect}></VideoItem>
                </section>
            );
        });

    return (
        <div className="col-lg-3 col-md-12 col-sm-12">
            {renderedVideos}
        </div>
    );
}

export default VideoList;
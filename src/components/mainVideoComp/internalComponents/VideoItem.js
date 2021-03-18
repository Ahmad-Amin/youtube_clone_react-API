import React from 'react';

const VideoItem = ({v, handleVideoSelect}) => {

    return (

        <div className='row mainVideoListDiv' onClick={()=>handleVideoSelect(v)}>
            <div className='col-lg-5 col-md-5 col-sm-5 col-xs-5 imgDivAdjustment '>
                <img
                    src={v.snippet.thumbnails.medium.url}
                    alt="thumbnail"
                    height="100%"
                    width="100%"/>
            </div>
            <div className='col-lg-7 col-md-7 col-sm-7 col-xs-7 contentDiv'>
                <p className='thumbnailTitle'>{v.snippet.title.length < 30 ? v.snippet.title : v.snippet.title.substring(0, 30) + "..."}</p>
                <p className='channelName'>{v.snippet.channelTitle}</p>
            </div>
        </div>

    );
}

export default VideoItem;
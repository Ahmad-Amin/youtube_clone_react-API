import React from 'react'
import './MainVideo.css'
import VideoList from './internalComponents/VideoList/VideoList';
import VideoDetails from './internalComponents/videoDetails/VideoDetails';

const MainVideoComp = (props) => {

    return (
        <section className='VideoSection'>
            <div className='row'>
                <VideoDetails 
                    video={props.selectedVideo}></VideoDetails>
                <VideoList 
                    videos={props.videos}
                    handleVideoSelect={props.handleVideoSelect}></VideoList>
            </div>
        </section>
    );
}

export default MainVideoComp;
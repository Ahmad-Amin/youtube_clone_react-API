import axios from 'axios';
import React, {useState, useEffect} from 'react';
import youtube from '../../../../apis/youtube';
import './VideoDetails.css';
import CommentsComp from './CommentsComp';

const VideoDetails = ({video}) => {
    
    const [comments, setComments] = useState([]);
    const [showComment, setCommentVisisbility] = useState(false);

    const fetchData = async (vid) =>{
        const response = await youtube.getVideoCommentsDetail().get('/commentThreads',{
            params: {
                videoId: vid
            }
        })
        setCommentVisisbility(true)
        setComments(response.data.items);
    }

    useEffect(() => {
        setCommentVisisbility(false)
    },[video]);
    

    if(!video){
        return <div className='col-lg-9 col-md-9'>Loading...</div>
    }

    const videosrcLink = `https://www.youtube.com/embed/${video.id.videoId}`;
    
    return(
        <div className="col-lg-9 col-md-9">
            <section className="mainVideoSection">
                <iframe src={videosrcLink} allowFullScreen title='Video player' width="100%" height="100%"/>
            </section>

            <section className='mainVideoContent'>
                <h2>{video.snippet.title}</h2>
                <h5>{video.snippet.channelTitle}</h5>
                <p>{video.snippet.description}</p>
            </section>
            
            <button 
                className="btn btn-primary "
                // eslint-disable-next-line react/jsx-no-duplicate-props
                className={showComment ? 'buttonDisplaySettings' : null}
                onClick={() => fetchData(video.id.videoId)}
                
                >Show Comments</button>

            {showComment ? <CommentsComp comments={comments}></CommentsComp> : <div> No Comments</div>}

        </div>
    );
}

export default VideoDetails

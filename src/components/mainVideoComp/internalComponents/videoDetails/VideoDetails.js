import React, {useState, useEffect} from 'react';
import youtube from '../../../../apis/youtube';
import './VideoDetails.css';
import CommentsComp from './CommentsComp';

const VideoDetails = ({video, videos}) => {
    
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
        console.log(videos);
        return <div className="col-lg-9 col-md-12 ">Loading ...</div>
    }

    const videosrcLinkifSelected = `https://www.youtube.com/embed/${video.id.videoId}`;
    
    return(
        <div className="col-lg-9 col-md-12 col-sm-12 col-xs-12">
            <section className="mainVideoSection">
                <iframe src={videosrcLinkifSelected} allowFullScreen title='Video player' width="100%" height="100%"/>
            </section>

            <section className='mainVideoContent'>
                <h2 className="mainVideoContent-title">{video.snippet.title}</h2>
                <h5 className="mainVideoContent-channel">{video.snippet.channelTitle}</h5>
                <p className="mainVideoContent-description">{video.snippet.description}</p>
            </section>
            
            <button 
                // eslint-disable-next-line react/jsx-no-duplicate-props
                className={`btn btn-primary moreCommentsButton ${showComment ? 'buttonDisplaySettings' : null}`}
                onClick={() => fetchData(video.id.videoId)}
                >Show Comments</button>

            {showComment ? <CommentsComp comments={comments}></CommentsComp> : null}

        </div>
    );
}

export default VideoDetails

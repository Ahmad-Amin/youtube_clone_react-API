import React from 'react'
import {Markup} from 'interweave';

const CommentsComp = ({comments}) => {

    if(!comments){
        return <h3>No Comments Available</h3>   
    }
    
    const commentList = comments.map((s)=> {
        
        const c = s.snippet.topLevelComment.snippet;
        var text = c.textDisplay;
        return <li>
            <h5>{c.authorDisplayName}</h5>
            <Markup content={text}/>
        </li>
    });

    return(
        <div className="commentDiv">
            <hr></hr>
            <p>Related Comments</p>
            <ul>
                {commentList}
            </ul>
        </div>
    );
}

export default CommentsComp
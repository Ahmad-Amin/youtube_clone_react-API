import React from 'react'
import {Markup} from 'interweave';
import './CommentsComp.css';

const CommentsComp = ({comments}) => {

    if (!comments) {
        return <h3>No Comments Available</h3>
    }

    const commentList = comments.map((s, i) => {

        const c = s.snippet.topLevelComment.snippet;
        var text = c.textDisplay;
        console.log(c);
        return (
            <div className="wholeContainList">
                <li key={i}>
                    <h5 className="commentAuthorName">{c.authorDisplayName}</h5>
                    <Markup content={text}/>
                </li>
                <div className="commentImageDiv">
                    <img src={c.authorProfileImageUrl} alt="CommentsImage" width="100%" height="100%"/>
                </div>
            </div>
        );
    });

    return (
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
import React from 'react';

const UpvoteSection = ({articleName, upvotes, setArticleInfo}) => {
    const upVoteArticle = async() =>{
        const reasult = await fetch(`/api/articles/${articleName}/upvote`, {
            method: 'post',
        });
        const body = await reasult.json();
        setArticleInfo(body);
    }
    return(
    <div id="UpvoteSection">
    <button onClick={()=> upVoteArticle()}>Add Upvote</button>
    <p>This post has been upvoted {upvotes} times</p>
    </div>
);
}

export default UpvoteSection;
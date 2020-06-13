import React from 'react';
import PostDetail from '../components/post/PostDetail';
import Comment from '../components/comment/Comment';
import CommentAsGuestForm from '../components/comment/CommentAsGuestForm';

const SinglePost = () => {
    return (
        <div class="single-post no-sidebar">
            
            <PostDetail/>

            <div class="advertise-box">
                <a href="#"><img src="upload/banners/ban3.jpg" alt=""/></a>
            </div>            

            <Comment/>
            <CommentAsGuestForm/>

        </div>
    )
}

export default SinglePost;
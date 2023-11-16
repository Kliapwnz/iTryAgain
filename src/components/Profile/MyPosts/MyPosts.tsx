import React from 'react';
import {Post} from "./Post/Post";
import s from "./MyPosts.module.css"

export const MyPosts = () => {
    return (
        <div className={s.postsBlock}>
            My Posts
            <div>
                <textarea></textarea>
                <button>Add post</button>
            </div>
            <Post message="Hello" likesCont={2}/>
            <Post message="My Second post" likesCont={7}/>
            <Post message="It try to learn React" likesCont={88}/>
        </div>
    );
};


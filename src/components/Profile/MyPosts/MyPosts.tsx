import React from 'react';
import {Post} from "./Post/Post";
import s from "./MyPosts.module.css"

export const MyPosts = () => {
    return (
        <div className={s.postsBlock}>
            <h3>My Posts</h3>
            <div>
                <div>
                    <textarea></textarea>
                </div>
                <div>
                    <button>Add post</button>
                </div>
            </div>
            <div className={s.posts}>
            <Post message="Hello" likesCont={2}/>
            <Post message="My Second post" likesCont={7}/>
            <Post message="It try to learn React" likesCont={88}/>
            </div>
        </div>
    );
};


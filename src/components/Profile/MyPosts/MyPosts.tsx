import React from 'react';
import s from "../Profile.module.css";
import {Post} from "./Post/Post";

export const MyPosts = () => {
    return (
        <div>
            <div>
                My Posts
                <div>
                    <textarea></textarea>
                    <button>Add post</button>
                </div>
                <Post title="Hello" likesCont={2}/>
                <Post title="My Second post" likesCont={7}/>
                <Post title="It try to learn React" likesCont={88}/>
            </div>
        </div>
    );
};


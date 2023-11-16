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
                <Post title="Hello"/>
                <Post title="My Second post"/>
                <Post title="It try to learn React"/>
            </div>
        </div>
    );
};


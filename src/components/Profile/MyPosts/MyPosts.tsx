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
                <Post/>
                <Post/>
                <Post/>
            </div>
        </div>
    );
};


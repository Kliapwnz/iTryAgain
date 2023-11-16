import React from 'react';
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
                <Post message="Hello" likesCont={2}/>
                <Post message="My Second post" likesCont={7}/>
                <Post message="It try to learn React" likesCont={88}/>
            </div>
        </div>
    );
};


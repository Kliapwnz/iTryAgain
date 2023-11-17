import React from 'react';
import {Post} from "./Post/Post";
import s from "./MyPosts.module.css"

export const MyPosts = () => {
    let posts = [
        {id: 1, message: "Hello", likesCount: 2},
        {id: 1, message: "My Second post", likesCount: 8},
        {id: 1, message: "It try to learn React", likesCount: 24},
        {id: 1, message: "I can`t stop it!", likesCount: 88},
    ]
    let postsElement = posts.map(el => <Post message={el.message} likesCont={el.likesCount}/>)
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
                {postsElement}
            </div>
        </div>
    );
};


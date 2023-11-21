import React from 'react';
import {Post} from "./Post/Post";
import s from "./MyPosts.module.css"
import {PostType} from "../../../redux/state";

type MyPostsType = {
    posts: PostType[]

}

export const MyPosts: React.FC<MyPostsType> = (props) => {
    const addPost = () => {

    }

    let postsElement = props.posts.map(el => <Post message={el.message} likesCont={el.likesCount}/>)
    return (
        <div className={s.postsBlock}>
            <h3>My Posts</h3>
            <div>
                <div>
                    <textarea></textarea>
                </div>
                <div>
                    <button onClick={addPost}>Add post</button>
                </div>
            </div>
            <div className={s.posts}>
                {postsElement}
            </div>
        </div>
    );
};


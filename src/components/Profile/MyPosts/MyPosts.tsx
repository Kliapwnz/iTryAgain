import React, {ChangeEvent} from 'react';
import {Post} from "./Post/Post";
import s from "./MyPosts.module.css"
import {PostType} from "../../../redux/state";

type MyPostsType = {
    posts: PostType[]
    addPost: (postMessage: string) => void
    changePostText: (newText: string) => void
    newPostText: string
}

export const MyPosts: React.FC<MyPostsType> = (props) => {


    const addPost = () => {
        props.addPost(props.newPostText)
    }
    const onPostChange = (e:ChangeEvent<HTMLTextAreaElement>) => {
        props.changePostText(e.currentTarget.value)
    }

    let postsElement = props.posts.map(el => <Post message={el.message} likesCont={el.likesCount}/>)
    return (
        <div className={s.postsBlock}>
            <h3>My Posts</h3>
            <div>
                <div>
                    <textarea
                        onChange={onPostChange}
                        value={props.newPostText}
                    />
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


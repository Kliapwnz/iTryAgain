import React from 'react';
import {Post} from "./Post/Post";
import s from "./MyPosts.module.css"
import {PostType} from "../../../redux/state";

type MyPostsType = {
    posts: PostType[]
    addPost: (postMessage: string) => void
    newPostText:string
}

export const MyPosts: React.FC<MyPostsType> = (props) => {
    let newPostElement = React.createRef<HTMLTextAreaElement>();

    const addPost = () => {
        if (newPostElement.current) {
            props.addPost(newPostElement.current?.value)
            newPostElement.current.value = ""
        }

    }
    let onPostChange = () =>{

    }

    let postsElement = props.posts.map(el => <Post message={el.message} likesCont={el.likesCount}/>)
    return (
        <div className={s.postsBlock}>
            <h3>My Posts</h3>
            <div>
                <div>
                    <textarea
                        ref={newPostElement}
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


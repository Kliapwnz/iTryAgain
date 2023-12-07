import React from 'react';
import {MyPosts} from "./MyPosts/MyPosts";
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import {ProfilePageType} from "../../redux/state";

type ProfileType ={
    profile:ProfilePageType
    addPost:(postMessage:string)=>void
    changePostText:(newText:string)=>void
}

export const Profile:React.FC<ProfileType> = (props) => {
    return (
        <div>
            <ProfileInfo/>
            <MyPosts posts={props.profile.posts}
                     newPostText={props.profile.newPostText}
                     changePostText={props.changePostText}
                     addPost={props.addPost} />
        </div>
    );
};


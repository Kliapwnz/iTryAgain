import React from 'react';
import s from "./Profile.module.css"
import {MyPosts} from "./MyPosts/MyPosts";

export const Profile = () => {
    return (
        <div className={s.content}>
            <div>
                <img
                    src="https://static.vecteezy.com/system/resources/previews/008/972/370/non_2x/logo-for-a-hacker-anonymous-anonymous-esport-logo-for-community-team-esport-squad-and-team-free-vector.jpg"/>
            </div>
            <div>
                ava + description
            </div>
            <MyPosts/>
        </div>
    );
};


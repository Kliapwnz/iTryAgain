import React from 'react';
import s from "./Post.module.css"

export const Post = () => {
    return (
        <div className={s.item}>
            <img
                src="https://static.vecteezy.com/system/resources/previews/014/487/751/non_2x/pictogram-hacker-logo-of-cybersecurity-man-working-on-a-computer-security-icon-vector.jpg"/>
            Post1
            <div>
                <span>like</span>
            </div>
        </div>
    );
};


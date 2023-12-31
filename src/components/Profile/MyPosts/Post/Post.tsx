import React from 'react';
import s from "./Post.module.css"

type PropsType={
    message:string
    likesCont:number
}

export const Post = (props:PropsType) => {
    return (
        <div className={s.item}>
            <img
                src="https://static.vecteezy.com/system/resources/previews/014/487/751/non_2x/pictogram-hacker-logo-of-cybersecurity-man-working-on-a-computer-security-icon-vector.jpg"/>
            {props.message}
            <div>
                <span className={s.like}>{props.likesCont} likes</span>
            </div>
        </div>
    );
};


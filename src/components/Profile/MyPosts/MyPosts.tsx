import React from 'react';
import s from "../Profile.module.css";

export const MyPosts = () => {
    return (
        <div>
            <div>
                My Posts
                <div className={s.item}>Post1</div>
                <div className={s.item}>Post2</div>
                <div className={s.item}>Post3</div>
            </div>
        </div>
    );
};


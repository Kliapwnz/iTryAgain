import React from 'react';
import s from "./Profile.module.css"

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
            <div>
                My Posts
                <div className={s.item}>Post1</div>
                <div className={s.item}>Post2</div>
                <div className={s.item}>Post3</div>
            </div>
        </div>
    );
};


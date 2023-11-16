import React from 'react';
import s from "./ProfileInfo.module.css"

export const ProfileInfo = () => {
    return (
        <div className={s.content}>
            <div>
                <img
                    src="https://static.vecteezy.com/system/resources/previews/008/972/370/non_2x/logo-for-a-hacker-anonymous-anonymous-esport-logo-for-community-team-esport-squad-and-team-free-vector.jpg"/>
            </div>
            <div>
                ava + description
            </div>
        </div>
    );
};


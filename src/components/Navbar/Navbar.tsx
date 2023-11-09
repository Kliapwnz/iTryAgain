import React from 'react';
import s from "./Navbar.module.css"

export const Navbar = () => {
    return (
        <div className={s.nav}>
            <div className={`${s.item} ${s.active}`}>
                <a href="src/components/Navbar/Navbar#s">Profile</a>
            </div>
            <div className={s.item}>
                <a href="src/components/Navbar/Navbar#s">Messages</a>
            </div>
            <div className={s.item}>
                <a href="src/components/Navbar/Navbar#s">News</a>
            </div>
            <div className={s.item}>
                <a href="src/components/Navbar/Navbar#s">Music</a>
            </div>
        </div>
    );
};


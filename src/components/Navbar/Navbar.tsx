import React from 'react';
import s from "./Navbar.module.css"

export const Navbar = () => {
    return (
        <div className={s.nav}>
            <div>
                <a href="src/components/Navbar/Navbar#s">Profile</a>
            </div>
            <div>
                <a href="src/components/Navbar/Navbar#s">Messages</a>
            </div>
            <div>
                <a href="src/components/Navbar/Navbar#s">News</a>
            </div>
            <div>
                <a href="src/components/Navbar/Navbar#s">Music</a>
            </div>
        </div>
    );
};


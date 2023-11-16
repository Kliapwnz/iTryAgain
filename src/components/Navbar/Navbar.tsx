import React from 'react';
import s from "./Navbar.module.css"
import {NavLink} from "react-router-dom";

export const Navbar = () => {
    return (
        <div className={s.nav}>
            <div className={s.item}>
                <NavLink to="/profile" className={el => el.isActive ? s.active : s.item}>Profile</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to="/dialogs" className={el => el.isActive ? s.active : s.item}>Messages</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to="/news" className={el => el.isActive ? s.active : s.item}>News</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to="/music" className={el => el.isActive ? s.active : s.item}>Music</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to="settings" className={el => el.isActive ? s.active : s.item}>Settings</NavLink>
            </div>
        </div>
    );
};


import React from 'react';
import s from "./Dialogs.module.css";
import {NavLink} from "react-router-dom";

const DialogItem = () => {
    return <div className={s.dialog + " " + s.active}>
        <NavLink to="/dialogs/1">Anastasiya</NavLink>
    </div>
}

export const Dialogs = () => {
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                <DialogItem/>
                <div className={s.dialog}>
                    <NavLink to="/dialogs/2">Yuri</NavLink>
                </div>
                <div className={s.dialog}>
                    <NavLink to="/dialogs/3">Elena</NavLink>
                </div>
                <div className={s.dialog}>
                    <NavLink to="/dialogs/4">Kristina</NavLink>
                </div>
                <div className={s.dialog}>
                    <NavLink to="/dialogs/5">Evgeniy</NavLink>
                </div>
                <div className={s.dialog}>
                    <NavLink to="/dialogs/6">Natali</NavLink>
                </div>
            </div>
            <div className={s.messages}>
                <div className={s.message}>Hello</div>
                <div className={s.message}>How are you?</div>
                <div className={s.message}>How is your IT?</div>
            </div>
        </div>
    );
};


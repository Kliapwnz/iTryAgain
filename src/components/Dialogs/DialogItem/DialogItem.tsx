import React from 'react';
import s from "../Dialogs.module.css";
import {NavLink} from "react-router-dom";

type PropsType={
    name:string
}
export const DialogItem = (props:PropsType) => {
    return (
        <div className={s.dialog + " " + s.active}>
            <NavLink to="/dialogs/1">{props.name}</NavLink>
        </div>
    );
};


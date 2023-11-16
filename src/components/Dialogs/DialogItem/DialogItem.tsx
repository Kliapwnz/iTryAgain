import React from 'react';
import s from "../Dialogs.module.css";
import {NavLink} from "react-router-dom";

type PropsType = {
    name: string
    id: string
}
export const DialogItem = (props: PropsType) => {
    return (
        <div className={s.dialog + " " + s.active}>
            <NavLink to={"/dialogs/" + props.id}>{props.name}</NavLink>
        </div>
    );
};


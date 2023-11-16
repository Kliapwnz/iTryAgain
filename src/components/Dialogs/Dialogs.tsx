import React from 'react';
import s from "./Dialogs.module.css";
import {DialogItem} from "./DialogItem/DialogItem";


export const Dialogs = () => {
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                <DialogItem name="Anastasiya"/>
                <DialogItem name="Yuri"/>
                <DialogItem name="Elena"/>
                <DialogItem name="Kristina"/>
                <DialogItem name="Evgeniy"/>
                <DialogItem name="Natali"/>

            </div>
            <div className={s.messages}>
                <div className={s.message}>Hello</div>
                <div className={s.message}>How are you?</div>
                <div className={s.message}>How is your IT?</div>
            </div>
        </div>
    );
};


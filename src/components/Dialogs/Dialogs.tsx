import React from 'react';
import s from "./Dialogs.module.css";
import {DialogItem} from "./DialogItem/DialogItem";


export const Dialogs = () => {
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                <DialogItem name="Anastasiya" id="1"/>
                <DialogItem name="Yuri" id="2"/>
                <DialogItem name="Elena" id="3"/>
                <DialogItem name="Kristina" id="4"/>
                <DialogItem name="Evgeniy" id="5"/>
                <DialogItem name="Natali" id="6"/>

            </div>
            <div className={s.messages}>
                <div className={s.message}>Hello</div>
                <div className={s.message}>How are you?</div>
                <div className={s.message}>How is your IT?</div>
            </div>
        </div>
    );
};


import React from 'react';
import s from "./Dialogs.module.css";
import {DialogItem} from "./DialogItem/DialogItem";
import {Message} from "./Message/Message";

let dialogsData = [
    {id:1, name:"Anastasiya"},
    {id:2, name:"Yuri"},
    {id:3, name:"Elena"},
    {id:4, name:"Kristina"},
    {id:5, name:"Evgeniy"},
    {id:6, name:"Natali"},
]

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
                <Message message="Hello"/>
                <Message message="How are you?"/>
                <Message message="How is your IT?"/>
            </div>
        </div>
    );
};


import React from 'react';
import s from "./Dialogs.module.css";
import {DialogItem} from "./DialogItem/DialogItem";
import {Message} from "./Message/Message";


export const Dialogs = () => {

    let dialogsData = [
        {id: 1, name: "Anastasiya"},
        {id: 2, name: "Yuri"},
        {id: 3, name: "Elena"},
        {id: 4, name: "Kristina"},
        {id: 5, name: "Evgeniy"},
        {id: 6, name: "Natali"},
    ]

    let messagesData = [
        {id: 1, message:"Hello"},
        {id: 2, message:"How are you?"},
        {id: 3, message:"How is your IT?"},
        {id: 4, message:"I Try to learn React and JS"},
        {id: 5, message:"Also my favourite football team MC"},
    ]

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsData.map(el => el.id)}


            </div>
            <div className={s.messages}>
                <Message message="Hello"/>
                <Message message="How are you?"/>
                <Message message="How is your IT?"/>
            </div>
        </div>
    );
};


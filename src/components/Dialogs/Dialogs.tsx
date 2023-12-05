import React, {useRef} from 'react';
import s from "./Dialogs.module.css";
import {DialogItem} from "./DialogItem/DialogItem";
import {Message} from "./Message/Message";
import {DialogsPageType} from "../../redux/state";

type DialogsType = {
    state: DialogsPageType
    addMessage: (messageText: string) => void
}

export const Dialogs: React.FC<DialogsType> = (props) => {


    let dialogElements = props.state.dialogs.map(el => <DialogItem name={el.name} id={el.id}/>)


    let messagesElements = props.state.messages.map(el => <Message message={el.message}/>)
    let newMessageElement = React.createRef<HTMLTextAreaElement>();
    let AddMessage = () => {
        if (newMessageElement.current) {
            props.addMessage(newMessageElement.current?.value)
            newMessageElement.current.value = ""
        }
    }
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogElements}
            </div>
            <div className={s.messages}>
                {messagesElements}
                <textarea ref={newMessageElement}></textarea>
                <button onClick={AddMessage}>Send</button>
            </div>
        </div>
    );
};


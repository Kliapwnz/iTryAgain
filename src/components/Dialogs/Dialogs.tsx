import React from 'react';
import s from "./Dialogs.module.css";

export const Dialogs = () => {
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                <div className={s.dialog}>
                    Anastasiya
                </div>
                <div className={s.dialog}>
                    Yuri
                </div>
                <div className={s.dialog}>
                    Elena
                </div>
                <div className={s.dialog}>
                    Kristina
                </div>
                <div className={s.dialog}>
                    Evgeniy
                </div>
                <div className={s.dialog}>
                    Natali
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


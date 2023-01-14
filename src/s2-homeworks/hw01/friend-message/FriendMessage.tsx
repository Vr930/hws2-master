import React from 'react'
import s from './FriendMessage.module.css'
import {MessageType} from "../HW1";

// создать тип вместо any и отобразить приходящие данные
export type FriendPropsType = {
    message: MessageType,
    text: string,
}
const FriendMessage = (props: FriendPropsType) => {
    return (
        <div
            id={'hw1-friend-message-' + props.message.id}
            className={s.friendMessage}>
            <div className={s.friendImageAndText}>
                <img
                    id={'hw1-friend-avatar-' + props.message.id}
                    // создаёт студент
                    src={props.message.user.avatar}
                    //
                />
                <div className={s.angleFriendMassage}></div>
                <div className={s.friendText}>
                    <div
                        id={'hw1-friend-name-' + props.message.id}
                        className={s.friendName}
                    >
                        {/*создаёт студент*/}
                        FriendName
                        {/**/}
                    </div>
                    <pre id={'hw1-friend-text-' + props.message.id} className={s.friendMessageText}>
                        {/*создаёт студент*/}
                        <div>{props.text}</div>
                        {/**/}
                    </pre>
                </div>
            </div>
            <div id={'hw1-friend-time-' + props.message.id} className={s.friendTime}>
                {/*создаёт студент*/}
                09:01
                {/**/}
            </div>
        </div>
    )
}

export default FriendMessage

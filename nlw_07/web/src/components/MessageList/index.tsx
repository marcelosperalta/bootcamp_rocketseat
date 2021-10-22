import { useEffect, useState } from "react";

import { api } from "../../services/api";

import styles  from "./styles.module.scss";

import logoImg from "../../assets/logo.svg";

type Message = {
    id: string;
    text: string;
    user: {
        name: string;
        avatar_url: string;
    }
}

export function MessageList() {
    const [messages, setMessages] = useState<Message[]>([]);

    useEffect(() => {
        // chamada da api
        api.get<Message[]>("messages/last3").then(response =>  {
            // console.log(response.data);
            setMessages(response.data)
        })
    }, [])

    return (
        <div className={styles.messageListWrapper}>
            <img className={styles.logo} src={logoImg} alt="DoWhile 2021" />

            <ul className={styles.messageList}>
                {/* 
                <li className={styles.message}>
                    <p className={styles.messageContent}>
                        Não vejo a hora de começar esse evento, 
                        com certeza vai ser o melhor de todos os tempos, 
                        vamooo pra cima! 🔥🔥
                    </p>
                    <div className={styles.messageUser}>
                        <div className={styles.userImage}>
                            <img src="https://github.com/marcelosperalta.png" alt="Marcelo" />
                        </div>
                        <span>Marcelo Soares Peralta</span>
                    </div>
                </li>

                <li className={styles.message}>
                    <p className={styles.messageContent}>
                        Não vejo a hora de começar esse evento, 
                        com certeza vai ser o melhor de todos os tempos, 
                        vamooo pra cima! 🔥🔥
                    </p>
                    <div className={styles.messageUser}>
                        <div className={styles.userImage}>
                            <img src="https://github.com/marcelosperalta.png" alt="Marcelo" />
                        </div>
                        <span>Marcelo Soares Peralta</span>
                    </div>
                </li>

                <li className={styles.message}>
                    <p className={styles.messageContent}>
                        Não vejo a hora de começar esse evento, 
                        com certeza vai ser o melhor de todos os tempos, 
                        vamooo pra cima! 🔥🔥
                    </p>
                    <div className={styles.messageUser}>
                        <div className={styles.userImage}>
                            <img src="https://github.com/marcelosperalta.png" alt="Marcelo" />
                        </div>
                        <span>Marcelo Soares Peralta</span>
                    </div>
                </li>
                */}
                {messages.map(message => {
                    return (
                        <li key={message.id} className={styles.message}>
                            <p className={styles.messageContent}>{message.text}</p>
                            <div className={styles.messageUser}>
                                <div className={styles.userImage}>
                                    <img src={message.user.avatar_url} alt={message.user.name} />
                                </div>
                                <span>{message.user.name}</span>
                            </div>
                        </li>
                    )
                })}

            </ul>
        </div>
    )
}
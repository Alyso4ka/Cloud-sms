import React from 'react';
import styles from './Message.module.css';



const Message = () => {
    return  (
        <div className={styles.message}>
            <h6>Zhenya Zinuk</h6>
            <span>adipihjdurnzdpahhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhsicingelit. Distinctio doloremque eius  facere laudantium nobis reprehenderit tempore. Ea, enim, recusandae!</span>
            <div className={styles.time}>
                07:40 PM
            </div>
        </div>
    )
};

export default Message;
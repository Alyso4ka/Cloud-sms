import React from 'react';
import styles from './Qualities.module.css';


const Qualities = (props) => {
    let newQualities = [
        {title: "Коммунист", id: 1},
        {title: "Рационалист", id: 2},
        {title: "Анимешник", id: 3}

    ]

    let qualitiesItem = newQualities.map((el, num) => {

        if (num === 1)
            return (<li className={styles.lishka} key={el.id}>{el.title}</li>)
        else
            return (<li key={el.id}>{el.title}</li>)
    });


    return (
        <div className={styles.qualities}>

            <ul>{qualitiesItem}</ul>
        </div>

    )
};

export default Qualities;
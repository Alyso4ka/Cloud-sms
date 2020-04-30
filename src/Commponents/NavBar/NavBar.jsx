import React from 'react';
import styles from './NavBar.module.css';
import {NavLink} from "react-router-dom";



const NavBar = () => {

    return (
        <div className={styles.navBar}>
            <div className={styles.menu}>
                <NavLink to="/all"> МЕНЮ </NavLink>
                <div className={styles.drop}>
                    <div>
                        <NavLink to="/sib">Понедельник</NavLink>
                    </div>
                    <div>
                        <NavLink to="/#">Вторник</NavLink>
                    </div>
                </div>
            </div>

        </div>
    )
};

export default NavBar;
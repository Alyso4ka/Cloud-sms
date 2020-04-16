import React from 'react';
import styles from './NavBar.module.css';
import {NavLink} from "react-router-dom";



const NavBar = () => {

    return (
        <nav className={styles.navBar}>
            <NavLink className={styles.menu} to="/all">
                МЕНЮ
                <div className={styles.drop}>
                    <div><NavLink to="/sib">Понедельник</NavLink></div>
                    <div><NavLink to="/#">Вторник</NavLink></div>
                </div>
            </NavLink>

        </nav>
    )
};

export default NavBar;
import React from 'react';
import styles from "./Container.module.css";
import Message from "./Commponents/Message/Message";
import MyName from "./Commponents/Name/MyName";
import Qualities from "./Commponents/Qualities/Qualities";
import Sib from "./Commponents/Sib/Sib";
import NavBar from "./Commponents/NavBar/NavBar";
import {HashRouter, Route} from "react-router-dom";


const App = () => {

    let nameQualities = [
        {qualitie: "Punctual", id: "1"},
        {qualitie: "Sportsman", id: "2"},
        {qualitie: "Сonfident", id: "3"}
    ];
    return (

        <HashRouter>
            <div className="App">
                <div className={styles.container}>
                    <NavBar/>

                    <Route path="/all" render={() => <MyName/> }/>
                    <Route path="/all" render={() => <Qualities/> }/>
                    <Route path="/all" render={() => <Message/> }/>
                    <Route path="/sib" render={() => <Sib /> }/>

                </div>
            </div>
        </HashRouter>
    );
};

export default App;

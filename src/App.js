import React from 'react';
import styles from "./Container.module.css";
import Message from "./Commponents/Message/Message";
import MyName from "./Commponents/Name/MyName";
import Qualities from "./Commponents/Qualities/Qualities";
import Sib from "./Commponents/Sib/Sib";
import NavBar from "./Commponents/NavBar/NavBar";
import {HashRouter, Route} from "react-router-dom";
import TodoList from "./Commponents/TodoList/TodoList";





const App = () => {
    return (

        <HashRouter>
            <div className="App">
                <div className={styles.container}>

                    <NavBar/>
                    <MyName/>
                    <Route path="/all" render={() => <Qualities/>}/>
                    <Message/>
                    <Route path="/sib" render={() => <Sib/>}/>
                    <Route path="/tue" render={() => <TodoList />}/>


                </div>
            </div>
        </HashRouter>
    );
};

export default App;

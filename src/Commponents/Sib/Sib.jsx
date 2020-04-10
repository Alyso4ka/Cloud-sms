import React from 'react';
import styles from './Sib.module.css';
import Button from "./Button/Button";
import Input from "./Input/Input";
import Span from "./Span/Span";


class Sib extends React.Component {


    newMessageText = React.createRef();

    state = {
        startNumber: 0,
        text: '',

    }


    addClickHandler = () => {
        let newText = this.newMessageText.current.value;
        this.newMessageText.current.value = "";
        this.onChangeText(" Привет " + newText); // вызываем нашу функцию onChangeText
        this.setState({startNumber: this.state.startNumber + 1})
    };

    onChangeText = (qwe) => { // передаем через парметры новое значение для функции
        let newMessage = [...this.state.text, qwe]; // копируем придущую функцию-массив addClickHandler, а после него всталяет новый парамент значение <qwe>
        this.setState({text: newMessage}) // заменяем наш объект text на новый объект newMessage
    }


    render() {
        return (
            <div className={styles.sib}>

                <Span startNumber={this.startNumber}/>
                <Input newMessageText={this.newMessageText}/>
                <Button addClickHandler={this.addClickHandler}/>
                <p>{this.state.text}</p>


            </div>
        )
    }
};

export default Sib;
import React from 'react';
import styles from './Sib.module.css';
import Button from "./Button/Button";
import Input from "./Input/Input";
import Span from "./Span/Span";


class Sib extends React.Component {

    state = {
        startNumber: 0,
        text: '',
        error: false,
        title: ""
    }


    addClickHandler = () => {
        let newText = this.state.title;

        if (newText !== '') {
            this.onChangeText(' Привет ' + newText); // вызываем нашу функцию onChangeText
            this.setState({startNumber: this.state.startNumber + 1})
            this.setState({error: false, title: ''});
        } else {
            this.setState({error: true});
        }


    };

    onTitleChanged = (e) => {
        this.setState({title: e.currentTarget.value})
    }

    onChangeText = (qwe) => { // передаем через парметры новое значение для функции
        let newMessage = [...this.state.text, qwe]; // копируем придущую функцию-массив addClickHandler, а после него всталяет новый парамент значение <qwe>
        this.setState({text: newMessage}) // заменяем наш объект text на новый объект newMessage
    }


    render() {
        return (
            <div className={styles.sib}>

                <Span startNumber={this.startNumber}/>
                <Input error={this.state.error}
                       addClickHandler={this.addClickHandler}
                       title={this.state.title}
                       onTitleChanged={this.onTitleChanged}

                />
                <Button addClickHandler={this.addClickHandler}/>
                <p>{this.state.text}</p>


            </div>
        )
    }
};

export default Sib;
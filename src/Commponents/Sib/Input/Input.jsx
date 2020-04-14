import React from 'react';
import styles from './Input.module.css'



class Input extends React.Component {

    onKeyPress = (e) => {
        if (e.key === "Enter") {
            this.props.addClickHandler()
        }
    };



    render() {
        const inputClassNameError = this.props.error ? styles.error : '';

        return <input
            className={inputClassNameError}
            type="text"
            onKeyPress={this.onKeyPress}
            value={this.props.title}
            onChange={this.props.onTitleChanged}
        />
    }
}

export default Input;
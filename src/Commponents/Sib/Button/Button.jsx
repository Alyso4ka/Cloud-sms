import React from 'react';


class Button extends React.Component {


    render() {
        return <button onClick={this.props.addClickHandler}>Отправить</button>
    }
}

export default Button;
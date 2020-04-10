import React from 'react';


class Input extends React.Component {


    render() {
        return <input ref={this.props.newMessageText} type="text"/>
    }
}

export default Input;
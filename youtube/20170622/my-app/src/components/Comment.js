import React from "react";

export default class Comment extends React.Component {
    render() {
        return (
        // <p>Comentário</p> // cenário 2
        <p>{ this.props.text }</p>
        );
    }
}
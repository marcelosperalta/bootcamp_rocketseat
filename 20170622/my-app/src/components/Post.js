import React from "react";

import Comment from "./Comment"

export default class Post extends React.Component {
    render() {
        return (
            <div>
                {/* <h2>Post</h2> // cenário 1 */}
                <h2>{this.props.title}</h2>
                <Comment />
            </div>
        )
    }
}
import React from "react";

import Comment from "./Comment"

export default class Post extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            comments: [
                { text: "Bom post" }
            ]
        };
    }

    render() {
        return (
            <div>
                {/* <h2>Post</h2> // cenário 1 */}
                <h2>{this.props.title}</h2>
                {/* <Comment /> // cenário 2 */}
                {/* <Comment text="Bom post" /> // cenário 3 */}
                { this.state.comments.map((comment, index) => {
                    return <Comment key={index} text={comment.text} />
                }) }
            </div>
        )
    }
}
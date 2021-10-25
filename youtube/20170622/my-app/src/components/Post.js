import React from "react";

import Comment from "./Comment";

export default class Post extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            comments: [
                // { text: "Bom post!" }
            ],
            newCommentsText: ""
        };

        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleTextChange = this.handleTextChange.bind(this);
    }

    handleSubmit(e) {
        this.setState({
            comments: [
                ... this.state.comments,
                { text: this.state.newCommentsText }
            ]
        });

        this.setState({ newCommentsText: "" });

        e.preventDefault();
    }

    handleTextChange(e) {
        this.setState({ newCommentsText: e.target.value })
    }

    render() {
        return (
            <div>
                {/* <h2>Post</h2> // cenário 1 */}
                <h2>{this.props.title}</h2>
                <form onSubmit={this.handleSubmit}>
                    <input 
                        value={this.state.newCommentsText} 
                        onChange={this.handleTextChange}
                    />
                    <button type="submit">
                        Comentar
                    </button>
                </form>
                {/* <Comment /> // cenário 2 */}
                {/* <Comment text="Bom post" /> // cenário 3 */}
                { this.state.comments.map((comment, index) => {
                    return <Comment key={index} text={comment.text} />
                }) }
                <br></br>
            </div>
        )
    }
}
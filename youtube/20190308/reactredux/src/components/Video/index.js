import React from "react";

import { connect } from "react-redux";

const Video = ({ activeModule, activeLesson }) => (
    <div>
        <h2>Module: <i>{activeModule.title}</i></h2>
        <h3>Class: <i>{activeLesson.title}</i></h3>
    </div>
)

export default connect(state =>({
    activeModule: state.activeModule,
    activeLesson: state.activeLesson,
}))(Video);
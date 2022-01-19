import React from "react";

import { connect } from "react-redux";

import toggleLesson from "../../store/actions/course";

import "./style.css";

const Sidebar = ({ modules, toggleLesson }) => (
    <aside>
        {modules.map(module => (
            <div key={module.id}>
                <strong>{module.title}</strong>
                <ul>
                    { module.lessons.map(lesson => (
                        <li key={lesson.id}>
                            {lesson.title}
                            <button onClick={() => toggleLesson(module, lesson)}>
                                Select
                            </button>
                        </li>
                    ))}
                </ul>
            </div>
        ))}
    </aside>
)

const mapStateToProps = state => ({
    modules: state.course.modules
});

const mapDispatchToProps = dispatch => ({
    toggleLesson: (module, lesson) => dispatch(toggleLesson(module, lesson))
})

export default connect(mapStateToProps, mapDispatchToProps)(Sidebar);
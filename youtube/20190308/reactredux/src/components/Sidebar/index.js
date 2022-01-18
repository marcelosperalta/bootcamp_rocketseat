import React, { Component } from "react";

export default class Sidebar extends Component {
    state = {
        modules: [
            { 
                id: 1, 
                title: "Starting with React",
                lessons: [
                  { id: 1, title: "First class" },
                  { id: 2, title: "Second class" },
                ],
            },
            {
                id: 2,
                title: "Learning Redux",
                lessons: [
                    { id: 3, title: "Third class" },
                    { id: 4, title: "Fourth class" },
                ]
            }
        ]
    };

    render() {
        const { modules } = this.state
        return (
            <aside>
                { modules.map(module => (
                    <div key={module.id}>
                        <strong>{module.title}</strong>
                        <ul>
                            { module.lessons.map(lesson => (
                                <li key={lesson.id}>{lesson.title}</li>
                            ))}
                        </ul>
                    </div>
                ))}
            </aside>
        );
    }
}
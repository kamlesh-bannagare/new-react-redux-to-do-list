import React, { useState } from 'react';
import Checkbox from '@mui/material/Checkbox';

import "./Todo.css";

import { TransitionGroup, CSSTransition } from "react-transition-group";

const Todo = ({ toggleTodo, task, completed, id, removeTodo, updateTodo }) => {
    const [isEditing, setIsEditing] = useState(false);
    const [editTask, setEditTask] = useState(task);

    const handlUpdate = (e) => {
        e.preventDefault();
        updateTodo(id, editTask);
        setIsEditing(false);
    }

    return (
        <TransitionGroup className={completed ? "Todo completed" : "Todo"}>
            <Checkbox  />
            {isEditing ? (
                <CSSTransition key="editing" timeout={500} className="form">
                    <form className="todo-edit-form" onSubmit={handlUpdate}>
                        <input
                            type="text"
                            name="task"
                            value={editTask}
                            onChange={(e) => setEditTask(e.target.value)}
                        />
                        <button>save</button>
                    </form>
                </CSSTransition>
            ) : (
                <CSSTransition key="normal" timeout={500} className="task-text">
                    <li className="Todo-task" onClick={toggleTodo}>
                        {task}
                    </li>
                </CSSTransition >
            )}

            <div  className="toTo-buttons">
                <button onClick={() => setIsEditing(true)}>
                    <i className="fa fa-pen" />
                </button>
                <span style={{paddingRight:30}}></span>
                <button  onClick={removeTodo}>
                    <i  className="fa fa-trash" />
                </button>
            </div>
        </TransitionGroup >
    )
}

export default Todo

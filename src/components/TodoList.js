import React from 'react'
import TodoInput from "./TodoInput";
import Todo from "./Todo";
import Search from "./Search";
import "./TodoList.css";
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import { useSelector, useDispatch } from 'react-redux';
import { completeTodo, addTodo, removeTodo, updateTodo } from '../redux/action'

const TodoList = () => {
    const state = useSelector((state) => ({ ...state.todos }));
    let dispatch = useDispatch();

    const create = (newTodo) => {
        dispatch(addTodo(newTodo));
    };

    const update = (id, updatedTask) => {
        dispatch(updateTodo({ id, updatedTask }));
    }

    return (
        <>
            <h3 style={{ textAlign: "right", padding: 30, paddingRight: 60 }}><span>Well-Come </span>kamlesh bannagare</h3>
            <div className="TodoList">
                <Search />
                <h1>Todo App with redux</h1>
                <TodoInput createTodo={create} />
                <ul>
                    <TransitionGroup className="todo-list">
                        {state.todos &&
                            state.todos.map((todo) => {
                                return (
                                    <CSSTransition key={todo.id} className="todo">
                                        <Todo
                                            key={todo.id}
                                            id={todo.id}
                                            task={todo.task}
                                            complete={todo.completed}
                                            toggleTodo={() => dispatch(completeTodo(todo))}
                                            removeTodo={() => dispatch(removeTodo(todo))}
                                            updateTodo={update}
                                        />
                                    </CSSTransition>
                                )
                            })}
                    </TransitionGroup>
                </ul>
            </div>
        </>
    )
}

export default TodoList

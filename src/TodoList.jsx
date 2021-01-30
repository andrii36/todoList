import React from 'react';
import TodoItem from './TodoItem';

const TodoList = ({todoList, onCheck, remove}) => {
    return(
        <div>
            <ul>
                {todoList.map(e => <TodoItem remove={remove} title={e.title} checked={e.completed} id={e.id} onCheck={onCheck}/>)}
            </ul>
        </div>
    )
}
export default TodoList;
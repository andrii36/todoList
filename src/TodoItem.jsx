import React, { useState } from 'react';

const TodoItem = ({ title, checked, id, onCheck, remove}) => {

    return (
        <li>
            <input type="checkbox" checked={checked} onChange={(event) => onCheck(id)} />
            <span className={checked && "item"}>{title}</span>
            <button onClick={(event) => remove(id)}>Delete</button>
        </li>
    )
}
export default TodoItem;
import React, { useEffect, useState } from 'react';
import './App.css';
import TodoList from './TodoList';

const App = (props) => {

  let [todoList, setTodoList] = useState([])

  let [title, setTitle] = useState('')

  useEffect(() => {
    setTodoList(JSON.parse(localStorage.getItem('list')) || [])
  }, [])

  useEffect(() => {
    localStorage.setItem('list', JSON.stringify(todoList))
  }, [todoList])

  let onEnter = (event) => {
    if (event.key === 'Enter') {
      setTodoList([
        ...todoList,
        {
          id: todoList.length + 1,
          title: title,
          completed: false
        }]
      )
      setTitle('')
    }
  }

  let onCheck = (id) => {
    setTodoList(todoList.map(item => {
      if(id == item.id){
        item.completed = !item.completed
      }
      return item
    }))
  }
  let remove = (id) => {
    setTodoList(todoList.filter(item => {
      if(id != item.id){
        return item
      }
    }))
  }

  return (
      <div className="App">
        <div>
          <input type="text" value={title} onChange={(event) => setTitle(event.target.value)} onKeyPress={onEnter} />
          <div>Type to add</div>
          <div>
            <TodoList todoList={todoList} onCheck={onCheck} remove={remove}/>
          </div>
        </div>
      </div>
    )
  }

  export default App;

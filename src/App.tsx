import React, {useEffect, useState} from 'react';
import logo from './logo.svg';
import './App.css';
import SuperButton from "./components/SuperButton";
import SuperInput from "./components/SuperInput";

type TodosType = {
  completed : boolean
  id: number
  title: string
  userId: number
}
function App() {

  const [todos,setTodos] = useState<TodosType[]>([])
  const [newTitle, setNewTitle] = useState('')
    console.log(newTitle)
  const myFetch = () => {
      fetch('https://jsonplaceholder.typicode.com/todos')
          .then(response => response.json())
          .then(json => setTodos(json))
  }

  useEffect(() => {
      myFetch()
  }, [])

  const showUpHandler = () => {
      myFetch()
  }

  const mapTodos = todos.map(el => {
      return (
          <li key={el.id}>
              <span>{el.id}</span>
              <span>{el.title}</span>
              <span>{el.userId}</span>
              <input type="checkbox" defaultChecked={el.completed}/>
          </li>
      )
  })

  const deleteHandler = () => {
      setTodos([])
  }

  const addNewTitleHandler = () => {
      const newTodo = {
          completed : false,
          id: todos.length + 1,
          title: newTitle,
          userId: 100200
      }
      setTodos([newTodo, ...todos])
      setNewTitle('')
  }

  return (
    <div className="App">
        <SuperButton name='Show Up' callback={showUpHandler}/>
        <SuperButton name='Delete' callback={deleteHandler}/>
        <SuperButton name='add new title' callback={addNewTitleHandler}/>
        <SuperInput newTitle={newTitle} setNewTitle={setNewTitle}/>
        <ul>
            {mapTodos}
        </ul>
    </div>
  );
}

export default App;


/*
UseEffect может работать в 3 режимах

1   useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/todos/1')
        .then(response => response.json())
        .then(json => console.log(json))
  })  - срабатывает без перерыва

2   useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/todos/1')
        .then(response => response.json())
        .then(json => console.log(json))
  }, []) - сработай 1 раз и все

let search = 100
    search = 101

3   useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/todos/1')
        .then(response => response.json())
        .then(json => console.log(json))
  }, [search]) - срабатывает каждый раз когда значение search - изменяется

  если над useEffect была переменная search = 100 поменялась на 101
  то useEffect который следит за search сработает еще раз

Может быть несколько значений за которыми useEffect будет следить

then - асинхронный запрос
Запросы на сервер не читаются строчка за строчкой этот другой порядок и называет асинхронным запросом

Запросы на сервер вне очереди чтения кода и все хуки тоже идут вне очереди
*/
import React from 'react';
import logo from './logo.svg';
// import { Counter } from './features/counter/Counter';
import './App.css';

// import TodoList from './components/TodoList';
import VisibleTodoList from './containers/VisibleTodoList'


function App() {
  // const todos = [
  //   {
  //     id: 1,
  //     text: 'Hi',
  //     completed: true,
  //   },
  //   {
  //     id: 2,
  //     text: 'Goodbye',
  //     completed: false
  //   },
  //   {
  //     id: 3,
  //     text: 'Aloha',
  //     completed: false
  //   },
  // ];

  // <Counter />

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <VisibleTodoList />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
      </header>
    </div>
  );
}

export default App;

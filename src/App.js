import React from 'react';
import logo from './logo.svg';
import { Counter } from './features/counter/Counter';
import './App.css';

import {createStore } from 'redux';
import {
  INCREMENT,
  DECREMENT,
  MULTIPLY
} from './app/constants';

function counter(state = 0, action) {
  switch (action.type) {
    case 'INCREMENT':
      return state + 1;
    case 'DECREMENT':
        return state - 1;
    case 'MULTIPLY':
      return state * action.factor;
    default:
      return state;
  }
}

let store = createStore(counter);

store.subscribe(() => {
  console.log(`counter state: ${store.getState()}`);
});

store.dispatch({ 'type': INCREMENT });
store.dispatch({ 'type': INCREMENT });
store.dispatch({ 'type': INCREMENT });
store.dispatch({ 'type': DECREMENT });
store.dispatch({ 'type': MULTIPLY, 'factor': 2 });
store.dispatch({ 'type': MULTIPLY, 'factor': 3 });


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Counter />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
      </header>
    </div>
  );
}

export default App;

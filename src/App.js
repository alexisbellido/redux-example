import React from 'react';
import logo from './logo.svg';
import { Counter } from './features/counter/Counter';
import './App.css';

import axios from 'axios';
import {createStore } from 'redux';

// from basic Redux tutorial
import todoApp from './app/reducers';
import {
  addTodo,
  toggleTodo,
  setVisibilityFilter,
  VisibilityFilters
} from './app/actions'

const initialState = {
  visibilityFilter: VisibilityFilters.SHOW_ALL,
  todos: [
    {
      text: 'I am in initialState',
      completed: true,
    }
  ]
}

// const store = createStore(todoApp);
const store = createStore(todoApp, initialState);

// log initial state
console.log(store.getState());

// Every time the state changes, log it
// Note that subscribe() returns a function for unregistering the listener
const unsubscribe = store.subscribe(() => console.log(store.getState()))

// Dispatch some actions
store.dispatch(addTodo('Learn about actions'))
store.dispatch(addTodo('Learn about reducers'))
store.dispatch(addTodo('Learn about store'))
store.dispatch(toggleTodo(0))
store.dispatch(toggleTodo(1))
store.dispatch(setVisibilityFilter(VisibilityFilters.SHOW_COMPLETED))

// Stop listening to state updates
unsubscribe()

// basic reducer here
// import {
//   INCREMENT,
//   DECREMENT,
//   MULTIPLY
// } from './app/constants';

// function counter(state = 0, action) {
//   switch (action.type) {
//     case 'INCREMENT':
//       return state + 1;
//     case 'DECREMENT':
//         return state - 1;
//     case 'MULTIPLY':
//       return state * action.factor;
//     default:
//       return state;
//   }
// }

// const store = createStore(counter);

// store.subscribe(() => {
//   console.log(`counter state: ${store.getState()}`);
// });

// store.dispatch({ 'type': INCREMENT });
// store.dispatch({ 'type': INCREMENT });
// store.dispatch({ 'type': INCREMENT });
// store.dispatch({ 'type': DECREMENT });
// store.dispatch({ 'type': MULTIPLY, 'factor': 2 });
// store.dispatch({ 'type': MULTIPLY, 'factor': 3 });

// TODO add API data to store
const url = '//loris-dev.loris.ai:30011/api/v1/onboardings/lyft/';
(async () => {
  const result = await axios.get(url);
  console.log(`test data from API`);
  console.log(result.data);
})();

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

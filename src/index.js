import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
// import store from './app/store';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import * as serviceWorker from './serviceWorker';

import axios from 'axios';

import todoApp from './app/reducers';
import { VisibilityFilters } from './app/actions';

const initialState = {
  visibilityFilter: VisibilityFilters.SHOW_ALL,
  todos: [
    {
      id: 1,
      text: 'I am in initialState',
      completed: false,
    },
    {
      id: 2,
      text: 'Hello',
      completed: false,
    }
  ]
}

console.log('start');

setTimeout(() => {
  console.log('after a few seconds');
}, 3000);

const store = createStore(todoApp, initialState);

// from basic Redux tutorial
// import todoApp from './app/reducers';
// import {
//   addTodo,
//   toggleTodo,
//   setVisibilityFilter,
//   VisibilityFilters
// } from './app/actions'


// // const store2 = createStore2(todoApp);
// const store2 = createStore(todoApp, initialState);

// // log initial state
// console.log(store2.getState());

// // Every time the state changes, log it
// // Note that subscribe() returns a function for unregistering the listener
// const unsubscribe = store2.subscribe(() => console.log(store2.getState()))

// // Dispatch some actions
// store2.dispatch(addTodo('Learn about actions'))
// store2.dispatch(addTodo('Learn about reducers'))
// store2.dispatch(addTodo('Learn about store'))
// store2.dispatch(toggleTodo(0))
// store2.dispatch(toggleTodo(1))
// store2.dispatch(setVisibilityFilter(VisibilityFilters.SHOW_COMPLETED))

// // Stop listening to state updates
// unsubscribe()

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

// const store2 = createStore(counter);

// store2.subscribe(() => {
//   console.log(`counter state: ${store.getState()}`);
// });

// store2.dispatch({ 'type': INCREMENT });
// store2.dispatch({ 'type': INCREMENT });
// store2.dispatch({ 'type': INCREMENT });
// store2.dispatch({ 'type': DECREMENT });
// store2.dispatch({ 'type': MULTIPLY, 'factor': 2 });
// store2.dispatch({ 'type': MULTIPLY, 'factor': 3 });

// TODO add API data to store
const url = '//loris-dev.loris.ai:30011/api/v1/onboardings/lyft/';
(async () => {
  const result = await axios.get(url);
  console.log(`test data from API`);
  console.log(result.data);
})();

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

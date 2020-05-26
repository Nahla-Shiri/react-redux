import React from 'react';
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import './App.css'
import Counter from './components/counter.js'


const initialState = {
  count: 0
 };

 const logger = store => next => action => {
  console.log('dispatching', action)
  let result = next(action)
  console.log('next state', store.getState())
  return result
 }
 
 const reducer = (state = initialState, action) => {
  switch(action.type) {
    case 'INCREMENT':
      return {
        count: state.count + 1
      };
    case 'DECREMENT':
      return {
        count: state.count - 1
      };
    case 'RESET':
      return {
        count: 0
      };
    default:
      return state;
  }
 };

 const store = createStore(reducer, applyMiddleware(logger));
function App() {
return (
<Provider store={store}>
<Counter />
</Provider>
);
}
export default App;
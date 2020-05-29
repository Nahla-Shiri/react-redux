import React from 'react';

import { Provider } from 'react-redux'
import './App.css'
import Counter from './components/counter.js'
import store from './store.js'

function App() {
return (
<Provider store={store}>
<Counter />
</Provider>
);
}
export default App;
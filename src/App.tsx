import React from 'react';
import Characters from './components/Characters';
import store from './store';

function App() {
  return (
    <div className="App">
      <Characters store={store} />
    </div>
  );
}

export default App;

import React from 'react';

import './App.css';

import RandomQuoteMachine from './components/RandomQuoteMachine';

function App() {
  return (
    <>
      <div className="App">
        <div className="App-header">
          <h1>Random Quote Machine</h1>
          <RandomQuoteMachine />
        </div>
      </div>
    </>
  );
}

export default App;

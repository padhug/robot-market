import * as React from 'react';
import HomePage from './components/Homepage/Homepage';

function App() {
  return (
    <div className="App">
      <h1 className='robotHeader'>Robot Market</h1>
      {<HomePage/>}
    </div>
  );
}

export default App;

import 'pages/common/App.css';
import * as React from 'react';
import Button from 'components/MuiButton/MuiButton'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <Button> Click</Button>
      </header>
    </div>
  );
}

export default App;
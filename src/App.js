import logo from './logo.svg';
import './App.css';
import Main from './Main'

function App() {

  document.title = "Find Dining";

  return (
    <div className="App">
      <header className="App-header">
        <h2>Find Dining</h2>
      </header>
      <div className="App-body">
        <br></br>
        <Main/>
      </div>
    </div>
  );
}

export default App;

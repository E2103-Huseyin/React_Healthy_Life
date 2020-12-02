import logo from './logo.svg';

import './App.css';
import NavBar from './Components/NavBar'
import Main from './Components/Main'
import MainContainer from './Components/MainDiv/MainContainer'

function App() {
  {console.log(process.env)}
  return (
    
    <div className="App">
      <NavBar/>
      <MainContainer/>
      <Main/>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
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
      </header>
    </div>
  );
}

export default App;

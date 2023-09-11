// import logo from './logo.svg';
import './App.css';
import Country from './Countaiers/Country';
import City from './Countaiers/City';
import Counter from './Countaiers/Counter';
import Name from './Countaiers/Name';


function App() {
  return (
    <div className="App">
      {/* <header className="App-header">
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
          Learn React Componate (Home Work)
        </a>
      </header> */}
      <Country name="BHARAT"/>
      <City />
      <Counter />
      <Name />
    </div>
  );
}

export default App;

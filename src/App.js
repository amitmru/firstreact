// import logo from './logo.svg';
import './App.css';
import Country from './Countaiers/Country';
import Counter from './Countaiers/Counter';
import Countryfun from './Countaiers/Countryfun';
import Counterfun from './Countaiers/Counterfun';
import Medicines from './Countaiers/Medicines';
import Mounting from './Countaiers/Mounting';
import Updeting from './Countaiers/Updeting';
import Timer from './Countaiers/Timer';
import Timerfun from './Countaiers/Timerfun';
import Quote from './Countaiers/Quote';
import Searching from './Countaiers/Searching';
import 'bootstrap/dist/css/bootstrap.min.css';
import Quote_Seach from './Countaiers/Quote_Seach';
import Product from './Countaiers/Product';
import { Navbar } from 'reactstrap';
import Example from './Countaiers/Example';


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
      {/* <Country />
      <Updeting /> */}
      {/* <Mounting /> */}
      <br />
      {/* <Counter /> */}
      {/* <Countryfun />
      <Counterfun /> */}
      <br />
      {/* <Medicines /> */}
      {/* <Timer /> */}
      {/* <Timerfun /> */}
      {/* <Quote /> */}
      {/* <Searching />
      <br />
      <br />
      <br />
      <Quote_Seach /> */}
      <Product />
      {/* <Example /> */}
    </div>
  );
}

export default App;

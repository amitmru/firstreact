// import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Country from './Countaiers/Country';
import Counter from './Countaiers/Counter/Counter';
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
import Select from './Countaiers/Select';
import RouterReactDom from './Countaiers/RouterReactDom';
import About from './Countaiers/About';
import Contect from './Countaiers/Contect';
import { configureStore } from './Redux/store';
import { Provider } from 'react-redux';
import Home from './Countaiers/Home/Home';
import Cart from './Countaiers/Cart/Cart';


function App() {

  let store = configureStore();

  return (
    // <div className="App">
    <Provider store={store}>
      {/* <Counter /> */}
      <Home />
      {/* <Routes> */}
        {/* <Route exact path='/Cart' element={<Cart />} /> */}
      {/* </Routes> */}
    </Provider>
    // </div>

  );

}


export default App;

import logo from './logo.svg';
import './App.css';
import SinglePage from './Components/SinglePage';
import Product from './Components/Product';
import Admin from "./Gurmeet/Admin";

function App() {
  return (
    <div className="App">
      <Product/>
      {/* <SinglePage /> */}
      <Admin />
    </div>
  );

}

export default App;

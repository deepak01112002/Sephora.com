import logo from './logo.svg';
import './App.css';
import SinglePage from './Components/SinglePage';
import Product from './Components/Product';
import Admin from "./Gurmeet/Admin";
import Navbar from './Navbar'
import NavMenus from './NavMenus'
function App() {
  return (
    <div className="App">
      <Navbar/>
      <NavMenus/>
      <Product/>
      <SinglePage />
      <Admin />
    </div>
  );

}

export default App;

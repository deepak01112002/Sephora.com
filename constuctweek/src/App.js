import logo from './logo.svg';
import './App.css';
import SinglePage from './Components/SinglePage';
import Product from './Components/Product';
import Admin from "./Gurmeet/Admin";
import Navbar from './Navbar'
import NavMenus from './NavMenus'
import Cart from "./Sanjeet/Cart"
import Payment from './Sanjeet/Payment';
import MainRoutes from './Components/MainRoutes';
import Footer from './Footer';
import PrivateRoute from './Components/PrivateRoute';



function App() {
  return (
    <div className="App">
    <Navbar/>
    <NavMenus/>
      <MainRoutes/>
      {/* <Payment/>  */}
      {/* <Cart/> */}
      {/* <PrivateRoute/> */}
      <Footer/>
    </div>
  );

}

export default App;

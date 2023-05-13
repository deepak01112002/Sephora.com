import { Navigate, useLocation } from "react-router-dom";

const PrivateRoute = ({ children }) => {
    const location = useLocation();
  
    const isAuth = localStorage.getItem("isAuth")
    
    console.log("isAuth",isAuth)
     
    return isAuth ? children : <Navigate to="/login" state={location.pathname} />;
  };
  
  export default PrivateRoute;
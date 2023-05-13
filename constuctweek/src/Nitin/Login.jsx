
import React, { useEffect } from "react";
import  { useState } from "react";
import "./Login.css";
import axios from "axios"
import photo4 from "../Images/photo4.png"
import { useDispatch, useSelector} from "react-redux"
// import { baseUrl } from "../../utils/baseUrl";
import toast, { Toaster } from 'react-hot-toast';
import { useNavigate } from "react-router-dom";
import { postUser } from "../redux/UserData/action";
// import { loginSuccess, loginfaliure } from "../../redux/Authentication/actionType,";
// import { setlocalSt } from "../../utils/localStorage"" 

const signupInitialState = {
  name:"",
  email:"",
  password:"",
  role:null
}

const loginInitialState ={
  email:"",
  password:"",
  role:null
}

function Login() {

 
   const [signup,setSignup] = useState(true)
   const [login,setLogin] = useState(false)
   const [SignupData , setSignupData] = useState(signupInitialState)
   const [LoginData , setLoginData] = useState(loginInitialState)
   const [data,setdata] = useState([])
   const dispatch = useDispatch()
   const navigate = useNavigate()
  
   useEffect(()=>{
    axios.get(`https://mock-server-app-0i38.onrender.com/users`)
    .then((res) =>{
     
     setdata(res.data)
   })
    .catch((err) =>{
     console.log(err)
   })
   },[])

  
    

   const handleloginSwitch = () =>{
         setSignup(true)
         setLogin(false)
   }

   const handleSignupSwitch = () =>{
    setLogin(true)
    setSignup(false)
   }
  
  

   const handleSignup = (e) =>{
        e.preventDefault()
      //   for(let x=0; x<data.length; x++){
      //   axios.delete(`https://mock-server-app-0i38.onrender.com/users/${data[x].id}`)
      //  .then((res) =>{
      //   toast.success("Registered Successfully !")
      // })
      //  .catch((err) =>{
      //   toast.error("Failed, try again")
      // })
      //   }
        // SignupData.role && dispatch(postUser(SignupData))
      let loginfilter = data.filter((el)=>{
        return el.email == SignupData.email
      }) 
      console.log(loginfilter.length)
      if(loginfilter==0){
        axios.post(`https://mock-server-app-0i38.onrender.com/users`,SignupData)
       .then((res) =>{
        
        
          toast.success("Registered Successfully !")
          handleloginSwitch()
          setSignupData(signupInitialState)
          
       
      })
       .catch((err) =>{
        toast.error("Failed, try again")
      })
      }else{
        toast.error("Email Already Registered !")
      }
      
      
   }


   const hanldeChangeSignup = (e) =>{
     const {value,name} = e.target
      setSignupData({...SignupData,[name]:value})
   }


   const handleChangeLogin = (e) =>{
    const {value,name} = e.target
    setLoginData({...LoginData,[name]:value})
   }


   const handleLogin = async(e) =>{
    e.preventDefault()
    
    let filterdata = data.filter((el)=>{
    return  el.email==LoginData.email
    })
    
    if(filterdata.length>0){
      localStorage.setItem( "user" ,`${filterdata[0].name}`)  
      
    if(filterdata[0].email==LoginData.email && filterdata[0].password==LoginData.password){
      toast.success("Logged Successfully !")
       if(LoginData.role=="User"){
          navigate("/")
       }else if(LoginData.role=="Admin"){
          navigate("/admin")
       }
      
      localStorage.setItem("isAuth", "true")
    }else{
      toast.error("Incorrect Password/UserId")
    }
  }else{
    toast.error("Register First!")
  }
  //   LoginData.role && axios.post(`${baseUrl}users/login`,LoginData)
  //   .then((res) =>{
  //     toast.success("Logged Successfully !")
  //     dispatch(loginSuccess(res.data))
  //     setlocalSt("isAuth","true")
  //     setlocalSt("token",res.data.token)
  //     LoginData.role === "User" ? navigate(`/`):navigate(`/admin`);
  //   })
  //   .catch((err) =>{
  //     toast.error("Failed, try again")
  //     dispatch(loginfaliure())
  //   })
  
  }
   console.log(LoginData.role)
 

  return (
    
    <div id="credential-main">
    <Toaster/>
      {/* <--------------------------Sign Up---------------------------> */}
      <div hidden={signup}>
        <div className="main-signup">
          <div className="signup">
            <div>
               <img src={photo4}/>
              <h3 style={{marginTop : "10px"}}>Sign up</h3>
            </div>
            <div>
              <form onSubmit={handleSignup} className="signup-form">
                <input name="name" type="text" placeholder="User name" onChange={hanldeChangeSignup}  required/>
                <input name="email" type="email" placeholder="Email" onChange={hanldeChangeSignup} required/>
                <input name="password" type="password" placeholder="Password" onChange={hanldeChangeSignup} required/>
                <select name="role" placeholder="select role" onChange={hanldeChangeSignup} required>
                  <option>select role</option>
                  <option value="user">User</option>
                  <option value="admin">Admin</option>
                </select>
                <button type="submit">Sign Up</button>
              </form>
            </div>
            <div className="switch-login">
            <button onClick={handleloginSwitch}> <span>Already an account ?</span> Login !</button>
            </div>
          </div>
        </div>
      </div>

      {/* <-----------------------Login-------------------------> */}

      <div hidden={login}>
        <div className="main-login">
          <div className="login">
            <div>
            <img src={photo4}/>
              <h3 style={{marginTop : "10px"}}>Login</h3>
            </div>
            <div>
              <form onSubmit={handleLogin} className="login-form">
                <input name="email" type="email" placeholder="Email" onChange={handleChangeLogin} required/>
                <input name="password" type="password" placeholder="Password" onChange={handleChangeLogin} required/>
                <select name="role" placeholder="select role" onChange={handleChangeLogin} required>
                  <option>select role</option>
                  <option>User</option>
                  <option>Admin</option>
                </select>
                <button type="submit">Login</button>
              </form>
            </div>
             <br />
            <div className="switch-signup">
            <button onClick={handleSignupSwitch}>Signup ?</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
import { useState, useEffect } from "react";

import { Link } from "react-router-dom";

import React from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import { useNavigate } from 'react-router-dom';
import { FaEnvelope, FaLock } from 'react-icons/fa';
import { Col, Image, Row } from 'react-bootstrap';
import { getUsers, postUser } from "./redux/UserData/action";
import { useDispatch, useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import axios from "axios";
import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuItemOption,
  MenuGroup,
  MenuOptionGroup,
  MenuDivider,
} from '@chakra-ui/react'
import {BiLogOut} from "react-icons/bi"
const Navbar = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const {pathname} = useLocation()
  useEffect(()=>{
    dispatch(getUsers())
  },[])

   const [showSignUpModal, setShowSignUpModal] = useState(false);
   var data = useSelector((store)=>store.userReducer)
    
  const handleShowSignUpModal = () => setShowSignUpModal(true);
  
  const handleHideSignUpModal = () => setShowSignUpModal(false);
  const handleLogout = ()=>{
    localStorage.clear()
    navigate("/")
    window.location.reload()
  }
  
  console.log(pathname)
  return (
  <div>  
    <div id="fullscreen" >
      <div id="top-add">
        <p>
          <span>Score 50% off††</span> your favorite brands.{" "}
          <span>Shop Now▸</span>| Free shipping† on all orders. †Terms apply.
        </p>
        <img
          src="https://www.sephora.com/contentimages/homepage/031423/Homepage/APP/2023-march-oh-snap-site-desktop-global-top-banner-generic-image-only-1226x120-us-1280x1280.jpeg?imwidth=612"
          alt=""
        />
      </div>
      <div id="nav-top">
        <div className="nav-icon">
          <h1>SEPHORA</h1>
        </div>
        <div className="nav-search">
          <input type="text" placeholder="Search" />
        </div>
        <div className="nav-store-comm">
          <div className="nav-small-icons">
            <img
              src="https://cdn-icons-png.flaticon.com/512/869/869687.png"
              alt="err"
            />
          </div>
          <div>
            <Link to={"/admin"}>
              <p className="comm-text">Stores & Services</p>
            </Link>
          </div>
        </div>
        <div className="nav-store-comm">
          <div className="nav-small-icons">
            {/* <img              src="https://cdn-icons-png.flaticon.com/512/10133/10133737.png"
              alt="err"
            /> */}
          <button><BiLogOut/></button>
          </div>
          <div onClick={handleLogout}>
            <p className="comm-text">Logout</p>
          </div>
        </div>

        <div className="nav-signup">
         <div className="nav-signup" >
         <div className="nav-small-icons-sign">
            <img
              className="signin-icon"
              src="https://www.sephora.com/img/ufe/icons/me-active.svg"
              alt=""
            />
          </div>
          <div className="comm-text">
          
          <Link to={"/login"}> <p>
            {pathname=="/admin" ? "Admin"
            : localStorage.getItem("isAuth") ? localStorage.getItem("user") : "Sign In" }   <br /> <span>Free Shipping</span>
            </p></Link>

          </div>
        </div>
      </div>

        <div className="login-cart-options">
         
         <Link to={'/cart'}> <img
            className="login-cart-bag"
            src="https://cdn-icons-png.flaticon.com/512/4903/4903482.png"
            alt=""
          /></Link>

        </div>
      </div>
     
    </div>

<div className="halfscreen">
<div id="top-add">
  <p>
    <span>Score 50% off††</span> your favorite brands.{" "}
    <span>Shop Now▸</span>| Free shipping† on all orders. †Terms apply.
  </p>
  <img
    src="https://www.sephora.com/contentimages/homepage/031423/Homepage/APP/2023-march-oh-snap-site-desktop-global-top-banner-generic-image-only-1226x120-us-1280x1280.jpeg?imwidth=612"
    alt=""
  />
</div>
<div id="nav-top">
  <div className="nav-icon">
    <h1>SEPHORA</h1>
  </div>
  {/* <div className="nav-search">
    <input type="text" placeholder="Search" />
  </div> */}
  
  <Menu>
  <MenuButton as={Button} colorScheme='pink'>
    Profile
  </MenuButton>
  <MenuList>
    <MenuGroup title='Profile'>
      <MenuItem>
          <div className="nav-store-comm">
        <div className="nav-small-icons">
          <img
            src="https://cdn-icons-png.flaticon.com/512/869/869687.png"
            alt="err"
          />
        </div>


        <div>
          <Link to={"/admin"}>
            <p className="comm-text">Stores & Services</p>
          </Link>
        </div>
      </div>
      </MenuItem>
      <MenuItem>
            <div className="nav-store-comm">
          <div className="nav-small-icons">
          <button><BiLogOut/></button>
                    </div>
                    <div onClick={handleLogout}>
                      <p className="comm-text">Logout</p>
                    </div>
                  </div>
                </MenuItem>
                <MenuItem>
                <div className="nav-signup">
            <div className="nav-signup" >
            <div className="nav-small-icons-sign">
                <img
                  className="signin-icon"
                  src="https://www.sephora.com/img/ufe/icons/me-active.svg"
                  alt=""
                />
              </div>
              <div className="comm-text">
              
              <Link to={"/login"}> <p>
                {pathname=="/admin" ? "Admin"
                : localStorage.getItem("isAuth") ? localStorage.getItem("user") : "Sign In" }   <br /> <span>Free Shipping</span>
                </p></Link>

              </div>
            </div>
          </div>
      </MenuItem>
      <MenuItem>
              <div className="login-cart-options">
          
          <Link to={'/cart'}> <img
              className="login-cart-bag"
              src="https://cdn-icons-png.flaticon.com/512/4903/4903482.png"
              alt=""
            /><span></span></Link>

          </div>
      </MenuItem>
    </MenuGroup>
    <MenuDivider />
    
  </MenuList>
</Menu>
  
  {/* <div className="nav-store-comm">
    <div className="nav-small-icons">
      <img
        src="https://cdn-icons-png.flaticon.com/512/869/869687.png"
        alt="err"
      />
    </div>


    <div>
      <Link to={"/admin"}>
        <p className="comm-text">Stores & Services</p>
      </Link>
    </div>
  </div> */}
  {/* <div className="nav-store-comm">
    <div className="nav-small-icons">
      <button><BiLogOut/></button>
    </div>
    <div onClick={handleLogout}>
      <p className="comm-text">Logout</p>
    </div>
  </div> */}

  {/* <div className="nav-signup">
   <div className="nav-signup" >
   <div className="nav-small-icons-sign">
      <img
        className="signin-icon"
        src="https://www.sephora.com/img/ufe/icons/me-active.svg"
        alt=""
      />
    </div>
    <div className="comm-text">
    
    <Link to={"/login"}> <p>
      {pathname=="/admin" ? "Admin"
      : localStorage.getItem("isAuth") ? localStorage.getItem("user") : "Sign In" }   <br /> <span>Free Shipping</span>
      </p></Link>

    </div>
  </div>
</div> */}

  {/* <div className="login-cart-options">
   
   <Link to={'/cart'}> <img
      className="login-cart-bag"
      src="https://cdn-icons-png.flaticon.com/512/4903/4903482.png"
      alt=""
    /></Link>

  </div> */}
</div>

</div>
</div>

    
  );
};

export default Navbar;
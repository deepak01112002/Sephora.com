import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <div>
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
          <Link to={"/admin"}><p className="comm-text">Stores & Services</p></Link>
          </div>
        </div>
        <div className="nav-store-comm">
          <div className="nav-small-icons">
            <img
              src="https://cdn-icons-png.flaticon.com/512/10133/10133737.png"
              alt="err"
            />
          </div>
          <div>
            <p className="comm-text">Community</p>
          </div>
        </div>
        <div className="nav-signup">
          <div className="nav-small-icons-sign">
            <img
              className="signin-icon"
              src="https://www.sephora.com/img/ufe/icons/me-active.svg"
              alt=""
            />
          </div>
          <div className="comm-text">
           <p>
              Sign In <br /> <span>Free Shipping</span>
            </p>
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
  );
};

export default Navbar;

import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import React from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import { useNavigate } from 'react-router-dom';
import { FaEnvelope, FaLock } from 'react-icons/fa';
const Navbar = () => {
   const [showSignUpModal, setShowSignUpModal] = useState(false);
    
  const handleShowSignUpModal = () => setShowSignUpModal(true);
  
  const handleHideSignUpModal = () => setShowSignUpModal(false);
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
            <Link to={"/admin"}>
              <p className="comm-text">Stores & Services</p>
            </Link>
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
        <div className="nav-signup" onClick={handleShowSignUpModal}>
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
        {showSignUpModal && (
            <SignUpModal show={showSignUpModal} onHide={handleHideSignUpModal} />
           )}
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

function SignUpModal({ show, onHide }) {
  const [isSignedUp, setIsSignedUp] = useState(false);
  const [showLoginModal, setShowLoginModal] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  

  

  const handleEmailChange = (event) => setEmail(event.target.value);
  const handlePasswordChange = (event) => setPassword(event.target.value);

  const handleSignUpButtonClick = () => {
    // TODO: Implement logic to handle sign up
    setIsSignedUp(true);
    setShowLoginModal(true);
  };

  const handleHideSignUpModal = () => {
    onHide();
    setIsSignedUp(false);
  };

  const handleShowLoginModal = () => setShowLoginModal(true);

  const handleHideLoginModal = () => setShowLoginModal(false);

  return (
    <Modal show={show} onHide={handleHideSignUpModal}>
      <Modal.Header closeButton>
        <Modal.Title>Sign Up</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Group controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              type="email"
              placeholder="Enter email"
              value={email}
              onChange={handleEmailChange}
            />
          </Form.Group>
          <Form.Group controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Password"
              value={password}
              onChange={handlePasswordChange}
            />
          </Form.Group>
          <Button variant="primary" onClick={handleSignUpButtonClick}>
            Sign Up
          </Button>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <p>
          Already have an account?{' '}
          <Button variant="link" onClick={handleShowLoginModal}>
            Log in
          </Button>
        </p>
      </Modal.Footer>
      {showLoginModal && (
        <LoginModal show={showLoginModal} onHide={handleHideLoginModal} />
      )}
    </Modal>
  );
}

function LoginModal({ show, onHide }) {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
 
  

  const handleEmailChange = (event) => setEmail(event.target.value);
  const handlePasswordChange = (event) => setPassword(event.target.value);

  const handleLoginButtonClick = () => {
    // TODO: Implement logic to handle login
    setIsLoggedIn(true);
    navigate('');
   
  };

  const handleHideLoginModal = () => {
    onHide();
    setIsLoggedIn(false);
  };

  return (
    <Modal show={show} onHide={handleHideLoginModal}>
      <Modal.Header closeButton>
        <Modal.Title>Log In</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Group controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              type="email"
              placeholder="Enter email"
              value={email}
              onChange={handleEmailChange}
            />
          </Form.Group>
          <Form.Group controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
      <Form.Control
        type="password"
        placeholder="Password"
        value={password}
        onChange={handlePasswordChange}
      />
    </Form.Group>
    <Button variant="primary" onClick={handleLoginButtonClick}>
    Log In
    </Button>
    </Form>
  </Modal.Body>
  <Modal.Footer>
    <p>
      Don't have an account?{' '}
      <Button variant="link" onClick={onHide}>
        Sign up
      </Button>
    </p>
  </Modal.Footer>
</Modal>
);
}

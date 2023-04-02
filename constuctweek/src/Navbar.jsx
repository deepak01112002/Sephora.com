import { useState, useEffect } from "react";

import { Link } from "react-router-dom";

import React from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import { useNavigate } from 'react-router-dom';
import { FaEnvelope, FaLock } from 'react-icons/fa';
import { Col, Image, Row } from 'react-bootstrap';
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
          {showSignUpModal && (
            <SignUpModal show={showSignUpModal} onHide={handleHideSignUpModal} />
           )}
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
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [selectedDate, setSelectedDate] = useState('');
  const [selectedMonth, setSelectedMonth] = useState('');
  const [zipCode, setZipCode] = useState('');





  const [showSignUpModal, setShowSignUpModal] = useState(false);
const [modalVisible, setModalVisible] = useState(false);

  const handleFirstNameChange = (event) => setFirstName(event.target.value); //
  const handleLastNameChange = (event) => setLastName(event.target.value);
  const handleEmailChange = (event) => setEmail(event.target.value);
  const handlePasswordChange = (event) => setPassword(event.target.value);//
  const handlePhoneNumberChange = (event) => setPhoneNumber(event.target.value);
  const handleDateChange = (event) => setSelectedDate(event.target.value);
  const handleMonthChange = (event) => setSelectedMonth(event.target.value);
  const handleZipCodeChange = (event) => setZipCode(event.target.value);


  const handleShowSignUpModal = () => {
    setShowSignUpModal(true);
    setModalVisible(true);
  };
  const handleHideSignUpModal = () => {
    onHide();
    setIsSignedUp(false);
    setShowSignUpModal(false);
    setModalVisible(false);
  };

  const obj={
    firstName:firstName,
    lastName:lastName,
    email:email,
    password:password,
    phoneNumber:phoneNumber,
    date:selectedDate,
    Month:selectedMonth,
    zipCode:zipCode
  }


  // write the dispatch code here in handleSignUpButtonClick


  const handleSignUpButtonClick = () => {
    // TODO: Implement logic to handle sign up
    setIsSignedUp(true);
    setShowLoginModal(true);

    console.log(obj);

    
    setPhoneNumber("");
    setSelectedDate("");
    setSelectedMonth("");
    setZipCode("");
    setFirstName("");
    setLastName("");
    setEmail("") ;
    setPassword("");

    
  };

 

  const handleShowLoginModal = () => setShowLoginModal(true);

  const handleHideLoginModal = () => setShowLoginModal(false);


  useEffect(() => {
  if (modalVisible) {
    document.body.classList.add("modal-open");
  } else {
    document.body.classList.remove("modal-open");
  }
}, [modalVisible]);

  return (
    <Modal show={show} onHide={handleHideSignUpModal}>
      <Modal.Header closeButton>
        <Modal.Title style={{testAlign:"center"}}>Create an Account</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
        <Form.Group>
        <Image src="https://www.sephora.com/img/ufe/bi/logo-beauty-insider.svg"width="50%"/>
        <Form.Text>Join the Beauty Insider loyalty program. Earn points, get FREE standard shipping, redeem rewards, and more.</Form.Text>
       
        </Form.Group>
       
          <Row>
            <Col>
              <Form.Group controlId="formBasicFirstName">
                <Form.Label>First Name</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter first name"
                  value={firstName}
                  onChange={handleFirstNameChange}
                />
              </Form.Group>
            </Col>
            <Col>
              <Form.Group controlId="formBasicLastName">
                <Form.Label>Last Name</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter last name"
                  value={lastName}
                  onChange={handleLastNameChange}
                />
              </Form.Group>
            </Col>
          </Row>
          <Form.Group controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              type="email"
              placeholder="Enter email"
              value={email}
              onChange={handleEmailChange}
            />
            <Form.Text className="text-muted">
              We'll never share your email with anyone else.
            </Form.Text>
          </Form.Group>
          <Form.Group controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Enter password (6-12 characters)"
              value={password}
              onChange={handlePasswordChange}
            />
          </Form.Group>
          <Form.Group controlId="formBasicPhoneNumber">
            <Form.Label>Phone Number</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter phone number"
              value={phoneNumber}
              onChange={handlePhoneNumberChange}
            />
          </Form.Group>

          <Form.Group>
        <Form.Control plaintext readOnly defaultValue=" Enter your birthdate to receive a free gift every year." />
        </Form.Group>
        <Row>
            <Col>
              <Form.Group >
              <select value={selectedMonth} onChange={handleMonthChange} style={{ height: "40px", marginBottom: "10px" }}>
        <option value="">Select month</option>
        <option value="Jan">January</option>
        <option value="Feb">February</option>
        <option value="Mar">March</option>
        <option value="Apr">April</option>
        <option value="May">May</option>
        <option value="Jun">June</option>
        <option value="Jul">July</option>
        <option value="Aug">August</option>
        <option value="Sep">September</option>
        <option value="Oct">October</option>
        <option value="Nov">November</option>
        <option value="Dec">December</option>
      </select>
               
              </Form.Group>
            </Col>
            <Col>
              <Form.Group >
              <select value={selectedDate} onChange={handleDateChange} style={{ height: "40px", marginBottom: "10px" , border:"1px"}}>
        <option value="">Select date</option>
        {[...Array(31)].map((_, index) => (
          <option key={index} value={index + 1}>
            {index + 1}
          </option>
        ))}
      </select>

              </Form.Group>
               
            </Col>
        
          </Row>

          <Form.Group controlId="formBasicZipCode">
            <Form.Label>Zip Code</Form.Label>
            <Form.Control
              type="text"
              placeholder="ZIP Code (to hear about store event near you)"
              value={zipCode}
             
              onChange={handleZipCodeChange}
            />
          </Form.Group>

          <Button variant="primary" style={{marginTop:"30px", backgroundColor:"black", color:"white"}} onClick={handleSignUpButtonClick}>
          CREATE ACCOUNT
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
    console.log(email,password)
    
    
    if (email === 'admin@mail.com') {
      window.location.href = '/admin';
    }else
    {
      setIsLoggedIn(true);
      window.location.reload();
    }
   
    // TODO: Implement logic to handle login
   
   
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
        <Form.Group>
        <Image src="https://www.sephora.com/img/ufe/bi/logo-beauty-insider.svg"width="30%"/>
        <Form.Text>Sign in or create an account to enjoy FREE standard shipping on all orders.</Form.Text>
        </Form.Group>
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
    <Button variant="primary" onClick={handleLoginButtonClick} style={{marginTop:"30px", backgroundColor:"black", color:"white"}}>
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


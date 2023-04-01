
import Form from 'react-bootstrap/Form';
import React, { useState } from 'react';
import { Modal, Button } from 'react-bootstrap';
import { FaEnvelope, FaLock } from 'react-icons/fa';

const Login = () => {
    const [showSignUpModal, setShowSignUpModal] = useState(false);
    
    const handleShowSignUpModal = () => setShowSignUpModal(true);
    
    const handleHideSignUpModal = () => setShowSignUpModal(false);
    
    return (
    <div>
    <Button variant="primary" onClick={handleShowSignUpModal}>
    Sign Up
    </Button>
    {showSignUpModal && (
    <SignUpModal show={showSignUpModal} onHide={handleHideSignUpModal} />
    )}
    </div>
    );

    }
export default Login


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
  

  const handleEmailChange = (event) => setEmail(event.target.value);
  const handlePasswordChange = (event) => setPassword(event.target.value);

  const handleLoginButtonClick = () => {
    // TODO: Implement logic to handle login
    setIsLoggedIn(true);
   
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




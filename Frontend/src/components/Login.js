import React, { useState } from 'react';
import './Login.css';
import { useNavigate } from 'react-router-dom';

function Login() {
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (password === '123') {
      setMessage('Login Successful!');
      navigate("/mainpage");

    } else {
      setMessage('Incorrect Password');
    }
  };

  return (
    <div className="body-login">
    <div className="container">
      <div className="offer-banner">
        <img src='/genz-Image.png' alt="GenZ Edition" className="offer-image" />
        <div className="offer-text">
          <h2>FLAT ₹200 OFF</h2>
          <p>+ Free Shipping On 1st Order</p>
          <p className="offer-code"><span>Code: MYNTRA200</span></p>
        </div>
        <div className="offer-badge">NEW</div>
      </div>
      <div className="login-container">
        <h2>Login or Signup</h2>
        <form id="login-form" onSubmit={handleSubmit}>
          <label htmlFor="password">Password</label>
          <div className="input-container">
            <input
              type="password"
              id="password"
              placeholder="Enter Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <p>By continuing, I agree to the <a href="#">Terms of Use</a> & <a href="#">Privacy Policy</a></p>
          <button type="submit" className='button-login'>CONTINUE</button>
        </form>
        {message && <p>{message}</p>}
        <a href="#" className="help-link">Have trouble logging in? <span>Get help</span></a>
        <div className="genz-edition">
          <span>GenZ Edition</span>
        </div>
      </div>
    </div>
    </div>
  );
}

export default Login;
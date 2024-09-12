import React from 'react';
import { NavLink } from 'react-router-dom';
import './Error.css'; // Make sure to create this CSS file

const Error = () => {
  return (
    <div className="error-container">
      <div className="error-content">
        <h1 className="error-code">404</h1>
        <p className="error-message">Oops! The page you're looking for doesn't exist.</p>
        <NavLink to="/" className="home-link">Back to Home</NavLink>
      </div>
    </div>
  );
}

export default Error;

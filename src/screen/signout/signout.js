import React from 'react';
import './signout.css';

function Signout() {
  const handleSignOut = () => {
    window.location.href = 'http://localhost:5000/'; // Redirect to the Flask login page
  };

  return (
    <div className="container">
      <div className="section">
        <button onClick={handleSignOut}>Sign Out</button>
      </div>
    </div>
  );
}

export default Signout;

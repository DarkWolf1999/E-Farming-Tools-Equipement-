// AdminLogin.js
import React, { useState } from 'react';
import './AdminLogin.css'; // Import the CSS file

const AdminLogin = ({ onLogin }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Validate email and password (you can add more validation logic here)
    if (email === 'admin@gmail.com' && password === 'admin123') {
      onLogin(); // Call the onLogin function passed from the parent component
    } else {
      alert('Invalid email or password');
    }
  };

  return (
    <div className="admin-login-container"> {/* Apply CSS class to the container */}
      <h2>Admin Login</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default AdminLogin;

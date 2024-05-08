// AuthProvider.js
import React, { useState } from 'react';
import AdminLogin from './AdminLogin';

const AuthProvider = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    const handleLogin = (email, password) => {
        // Perform authentication logic here
        if (email === 'admin@example.com' && password === 'admin123') {
            setIsLoggedIn(true);
            console.log('Login successful');
        } else {
            console.log('Invalid email or password');
        }
    };

    return (
        <div>
            <h1>Authentication Provider</h1>
            <AdminLogin onLogin={handleLogin} />
        </div>
    );
};

export default AuthProvider;

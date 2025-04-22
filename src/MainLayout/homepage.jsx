import React from 'react';

const Homepage = () => {
    return (
        <div style={{ textAlign: 'center', padding: '20px' }}>
            <h1>Welcome to Our Website</h1>
            <p>This is the homepage. Explore our features and enjoy your stay!</p>
            <div style={{ marginTop: '20px' }}>
                <button 
                style={{ marginRight: '10px', padding: '10px 20px', cursor: 'pointer' }} 
                onClick={() => window.location.href = '/login'}
                >
                Login
                </button>
                <button 
                style={{ padding: '10px 20px', cursor: 'pointer' }} 
                onClick={() => window.location.href = '/signup'}
                >
                Sign Up
                </button>
            </div>
        </div>
    );
};

export default Homepage;
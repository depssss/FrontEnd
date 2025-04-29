import React from 'react';

const Homepage = () => {
    return (
        <div className="min-h-screen bg-gradient-to-br from-blue-50 to-white flex flex-col items-center justify-center px-4">
            <div className="text-center max-w-2xl">
                <h1 className="text-4xl font-bold text-blue-700 mb-4">Welcome to Sky Book</h1>
                <p className="text-gray-600 text-lg mb-8">
                    Discover, plan, and book your next adventure with ease. Let's make traveling a breeze!
                </p>
                <div className="flex justify-center gap-4">
                    <button 
                        className="bg-blue-600 text-white px-6 py-3 rounded-full hover:bg-blue-700 transition duration-300"
                        onClick={() => window.location.href = '/login'}
                    >
                        Login
                    </button>
                    <button 
                        className="border border-blue-600 text-blue-600 px-6 py-3 rounded-full hover:bg-blue-100 transition duration-300"
                        onClick={() => window.location.href = '/signup'}
                    >
                        Sign Up
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Homepage;

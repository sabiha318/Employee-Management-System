import React from 'react'
import { Link } from 'react-router-dom'
import { useState } from 'react'

const Login = ({handleLogin}) => {

    const [formData, setFormData] = useState({ email: '', password: '' });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    const submitHandler = (e) => {
        e.preventDefault();
        handleLogin(formData.email, formData.password); //By doing this we are sending the data to parent from child component highly interesting (technically we are sending sending the function to child component and then calling it from child component providing the data as arguments)
        setFormData({ email: '', password: '' });
    };

    return (
        <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 px-10 py-12">
        <div className="bg-gray-800 shadow-2xl rounded-xl p-8 w-full max-w-lg">
            <h1 className="text-4xl font-extrabold text-center mb-8 text-white">Login</h1>
            <p className="text-center mb-5 text-gray-400">Welcome back! Please login to your account.</p>
            <p className="text-center mb-8 text-gray-400">
                Don't have an account?{' '}
                <Link to="/register" className="text-teal-400 hover:text-teal-300 hover:underline transition-all duration-300">
                Register
                </Link>

            </p>
            <form className="flex flex-col gap-6" onSubmit={(e) => submitHandler(e)}>
                <div>
                    <label htmlFor="email" className="block text-gray-300 font-semibold mb-2">Email</label>
                    <input
                        value={formData.email}
                        onChange={handleChange} 
                        required
                        id="email"
                        name="email"
                        type="email"
                        placeholder="Enter your email"
                        className="w-full border border-gray-700 rounded-md py-3 px-4 bg-gray-700 text-gray-200 focus:ring-2 focus:ring-teal-400 focus:outline-none transition-all duration-300"
                    />
                </div>
                <div>
                    <label htmlFor="password" className="block text-gray-300 font-semibold mb-2">Password</label>
                    <input
                        value={formData.password}
                        onChange={handleChange}
                        required
                        id="password"
                        name="password"
                        type="password"
                        placeholder="Enter your password"
                        className="w-full border border-gray-700 rounded-md py-3 px-4 bg-gray-700 text-gray-200 focus:ring-2 focus:ring-teal-400 focus:outline-none transition-all duration-300"
                    />
                </div>
                <button
                    type="submit"
                    className="w-full bg-teal-500 text-white rounded-md py-3 font-semibold hover:bg-teal-600 focus:ring-2 focus:ring-teal-400 focus:outline-none transition-all duration-300"
                >
                    Login
                </button>
            </form>
        </div>
    </div>
    );
};

export default Login;
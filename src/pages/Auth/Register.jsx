import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const Register = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: '',
        tasks: []
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const employeeData = JSON.parse(localStorage.getItem('employee')) || [];
        const newEmployee = {
            id: employeeData.length > 0 ? employeeData[employeeData.length - 1].id + 1 : 1,
            name: formData.name,
            email: formData.email,
            password: formData.password,
            taskCount: {
                active: 0,
                newTask: 0,
                completed: 0,
                failed: 0
            },
            tasks: []
        };
        employeeData.push(newEmployee);
        localStorage.setItem('employee', JSON.stringify(employeeData));
        alert(`You have been registered with the ID: ${newEmployee.id}`);
        
        setFormData({
            name: '',
            email: '',
            password: '',
            tasks: []
        });
    };

    return (
        <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 px-10 py-12">
            <div className="bg-gray-800 shadow-2xl rounded-xl p-8 w-full max-w-lg">
                <h1 className="text-4xl font-extrabold text-center mb-8 text-white">Register</h1>
                <p className="text-center mb-5 text-gray-400">Create your account to get started!</p>
                <p className="text-center mb-8 text-gray-400">
                    Already have an account?{' '}
                    <Link to="/login" className="text-teal-400 hover:text-teal-300 hover:underline transition-all duration-300">
                    Login
                    </Link>

                </p>
                <form className="flex flex-col gap-6" onSubmit={handleSubmit}>
                    <div>
                        <label htmlFor="name" className="block text-gray-300 font-semibold mb-2">Name</label>
                        <input
                            value={formData.name}
                            onChange={handleChange}
                            required
                            id="name"
                            name="name"
                            type="text"
                            placeholder="Enter your name"
                            className="w-full border border-gray-700 rounded-md py-3 px-4 bg-gray-700 text-gray-200 focus:ring-2 focus:ring-teal-400 focus:outline-none transition-all duration-300"
                        />
                    </div>
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
                        Register
                    </button>
                </form>
            </div>
        </div>
    );
};

export default Register;
import React, { useContext } from 'react';
import { AuthContext } from '../../context/AuthProvider';
import '../../styles/EmployeeTaskPanel.css';

const EmployeeList = () => {
    const authData = useContext(AuthContext);

    return (
        <div className='employee-list-container bg-[#2c2c2c] text-white shadow-md rounded-md p-6 ' >
            <h1 className='text-2xl font-bold mb-4 text-center'>Employee List</h1>
            <div className=' bg-[#222222] shadow-md rounded-lg p-4 overflow-y-auto custom-scrollbar'>
                {authData && authData.employees.map((employee) => (
                    <div
                        key={employee.id}
                        className='flex justify-between items-center mb-3 border-b border-gray-700 pb-2'
                    >
                        <div className='flex items-center'>
                            <i className='fa fa-user text-gray-400 text-2xl mr-3'></i>
                            <div>
                                <h2 className='text-lg font-bold'>{employee.name}</h2>
                                <p className='text-sm  font-bold'>ID: {employee.id}</p>
                            </div>
                        </div>
                        
                    </div>
                ))}
            </div>
        </div>
    );
};

export default EmployeeList;
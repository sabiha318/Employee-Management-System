import React, { useContext } from 'react'
import { AuthContext } from '../../context/AuthProvider';

const AcceptTask = ({ data }) => {
    const { refreshUserData } = useContext(AuthContext);

    const updateTaskStatus = (newStatus) => {
        const employees = JSON.parse(localStorage.getItem('employee'));
        const updatedEmployees = employees.map(emp => {
            if (emp.tasks.some(task => task.taskNumber === data.taskNumber)) {
                // Ensure counts don't go below 0
                emp.taskCount.active = Math.max(0, emp.taskCount.active - 1);
                emp.taskCount[newStatus]++;
                emp.tasks = emp.tasks.map(task => {
                    if (task.taskNumber === data.taskNumber) {
                        return {
                            ...task,
                            status: {
                                active: false,
                                newTask: false,
                                completed: newStatus === 'completed',
                                failed: newStatus === 'failed'
                            }
                        };
                    }
                    return task;
                });
            }
            return emp;
        });
        
        localStorage.setItem('employee', JSON.stringify(updatedEmployees));
        refreshUserData();
    };

    return (
        <div className="h-full w-[300px] bg-gray-800 rounded-xl flex-shrink-0 p-5 shadow-lg">
            <div className="flex justify-between items-center p-5">
                <h3 className="bg-red-600 text-white px-3 py-1 rounded">{data.taskCategory}</h3>
                <h4 className="text-sm text-gray-400">{data.taskDate}</h4>
            </div>
            <h2 className="mt-5 text-2xl font-semibold text-white">{data.taskTitle }</h2>
            <p className="mt-2 text-sm text-gray-300">
                {data.taskDescription || "No description provided for this task."}  
            </p>

            <div className="flex justify-between mt-4">
                <button 
                    onClick={() => updateTaskStatus('completed')}
                    className="bg-green-500 hover:bg-green-600 text-white py-1 px-2 text-sm rounded">
                    Mark as Completed
                </button>
                <button 
                    onClick={() => updateTaskStatus('failed')}
                    className="bg-red-600 hover:bg-red-700 text-white py-1 px-2 text-sm rounded">
                    Mark as Failed
                </button>
            </div>
        </div>
    );
};

export default AcceptTask;
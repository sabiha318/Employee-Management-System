import React, { useState, useContext } from 'react';
import { AuthContext } from '../../context/AuthProvider';


const CreateTask = () => {
  
  const [taskData, setTaskData] = useState({
    taskTitle: '',
    taskDate: '',
    taskAssignTo: '',
    taskCategory: '',
    taskDescription: ''
  });

  const { refreshUserData } = useContext(AuthContext);

  const submitHandler = (e) => {
    e.preventDefault();

    const data = JSON.parse(localStorage.getItem('employee')) || [];
    if (data.length === 0) {
      console.error('No employee data found in localStorage.');
      return;
    }
    data.forEach((employee) => {
      if (String(employee.id) === String(taskData.taskAssignTo)) {
        employee.tasks = employee.tasks || [];
        employee.tasks.push({
          taskNumber: employee.tasks.length + 1,
          status: {
            active: false,
            newTask: true,
            completed: false,
            failed: false
          },
          ...taskData
        });
        console.log(`Task assigned to ${employee.name}:`, taskData);
      }
    });
    localStorage.setItem('employee', JSON.stringify(data));
    setTaskData({
      taskTitle: '',
      taskDate: '',
      taskAssignTo: '',
      taskCategory: '',
      taskDescription: ''
    });
    refreshUserData(); // <-- This will update the context and UI
  };

  return (
    <div className="max-w-4xl mx-auto bg-[#2c2c2c] shadow-md rounded-md p-6">
      <form onSubmit={submitHandler} className="flex flex-col space-y-6">
        <div className="flex justify-between space-x-10">
          <div className="flex flex-col gap-5 w-1/2">
            <div>
              <h3 className="text-lg font-semibold text-gray-400">Task Title</h3>
              <input
                type="text"
                placeholder="Make a UI design"
                value={taskData.taskTitle}
                className="w-full mt-2 p-3 bg-[#3c3c3c] border border-gray-600 rounded-md text-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                onChange={(e) => setTaskData((prev) => ({ ...prev, taskTitle: e.target.value }))}
              />
            </div>

            <div>
              <h3 className="text-lg font-semibold text-gray-400">Date</h3>
              <input
                type="date"
                value={taskData.taskDate}
                className="w-full mt-2 p-3 bg-[#3c3c3c] border border-gray-600 rounded-md text-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                onChange={(e) => setTaskData((prev) => ({ ...prev, taskDate: e.target.value }))}
              />
            </div>

            <div>
              <h3 className="text-lg font-semibold text-gray-400">Assign to</h3>
              <input
                type="text"
                placeholder="Employee ID"
                value={taskData.taskAssignTo}
                className="w-full mt-2 p-3 bg-[#3c3c3c] border border-gray-600 rounded-md text-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                onChange={(e) => setTaskData((prev) => ({ ...prev, taskAssignTo: e.target.value }))}
              />
            </div>

            <div>
              <h3 className="text-lg font-semibold text-gray-400">Category</h3>
              <input
                type="text"
                placeholder="Design, dev, etc"
                value={taskData.taskCategory}
                className="w-full mt-2 p-3 bg-[#3c3c3c] border border-gray-600 rounded-md text-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                onChange={(e) => setTaskData((prev) => ({ ...prev, taskCategory: e.target.value }))}
              />
            </div>
          </div>

          <div className="flex flex-col gap-5 w-1/2">
            <h3 className="text-lg font-semibold text-gray-400">Description</h3>
            <textarea
              cols="30"
              rows="8"
              placeholder="Enter task description"
              value={taskData.taskDescription}
              className="w-full mt-2 p-3 bg-[#3c3c3c] border border-gray-600 rounded-md text-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 h-[85%]"
              onChange={(e) => setTaskData((prev) => ({ ...prev, taskDescription: e.target.value }))}
            ></textarea>
          </div>
        </div>

        <button
          type="submit"
          className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
        >
          Create Task
        </button>
      </form>
    </div>
  );
}


export default CreateTask
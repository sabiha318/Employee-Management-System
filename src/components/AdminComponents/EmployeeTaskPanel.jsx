import React, { useContext } from 'react';
import { AuthContext } from '../../context/AuthProvider';
import '../../styles/EmployeeTaskPanel.css'; //custom scrollbar styles

const EmployeeTaskPanel = () => {
  const authData = useContext(AuthContext);

  const handleDeleteTask = (employeeId, taskNumber) => {
    const employees = JSON.parse(localStorage.getItem('employee')) || [];
    const updatedEmployees = employees.map((employee) => {
      if (employee.id === employeeId) {
        const updatedTasks = employee.tasks.filter((task) => task.taskNumber !== taskNumber);
        return {
          ...employee,
          tasks: updatedTasks,
          taskCount: {
            active: Math.max(0, updatedTasks.filter((task) => task.status.active).length),
            newTask: Math.max(0, updatedTasks.filter((task) => task.status.newTask).length),
            completed: Math.max(0, updatedTasks.filter((task) => task.status.completed).length),
            failed: Math.max(0, updatedTasks.filter((task) => task.status.failed).length),
          },
        };
      }
      return employee;
    });
    localStorage.setItem('employee', JSON.stringify(updatedEmployees));
    authData.refreshUserData();
  };

  return (
    <div className="bg-[#1c1c1c] p-5 max-h-[70vh] overflow-y-auto text-white space-y-4 custom-scrollbar">
      {authData.employees.map((employee) => (
        <div
          key={employee.id}
          className="bg-[#2a2a2a] rounded-lg p-4 shadow-md border border-gray-700"
        >
          <div className="flex justify-between items-start mb-3 border-b border-gray-600 pb-2">
            <div className="flex items-center">
              <i className="fa fa-user text-gray-400 text-2xl mr-3"></i>
              <div>
                <h2 className="text-xl font-bold">{employee.name}</h2>
                <p className="text-sm text-gray-400">{employee.email}</p>
              </div>
            </div>
            <div className="text-right text-sm space-y-1">
              <p>
                <i className="fa fa-circle text-green-500 mr-1"></i> Active: {employee.taskCount.active}
              </p>
              <p>
                <i className="fa fa-plus-circle text-blue-500 mr-1"></i> New: {employee.taskCount.newTask}
              </p>
              <p>
                <i className="fa fa-check-circle text-green-400 mr-1"></i> Completed: {employee.taskCount.completed}
              </p>
              <p>
                <i className="fa fa-times-circle text-red-500 mr-1"></i> Failed: {employee.taskCount.failed}
              </p>
            </div>
          </div>

          <div className="space-y-3">
            {employee.tasks.map((task) => (
              <div
                key={task.taskNumber}
                className="bg-[#3c3c3c] rounded-md p-3 border border-gray-600"
              >
                <div className="flex justify-between">
                  <h3 className="font-semibold">{task.taskTitle}</h3>
                  <span className="text-sm text-gray-400">{task.taskDate}</span>
                </div>

                <div className="text-xs text-gray-400 mt-2 flex justify-between">
                  <span>Category: {task.taskCategory}</span>
                  <span>
                    {task.status.newTask && <i className="fa fa-plus-circle text-blue-500 mr-1"></i>}
                    {task.status.active && <i className="fa fa-circle text-green-500 mr-1"></i>}
                    {task.status.completed && <i className="fa fa-check-circle text-green-400 mr-1"></i>}
                    {task.status.failed && <i className="fa fa-times-circle text-red-500 mr-1"></i>}
                  </span>
                </div>

                <button
                  onClick={() => handleDeleteTask(employee.id, task.taskNumber)}
                  className="mt-2 text-red-500 text-sm hover:underline"
                >
                  Delete Task
                </button>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default EmployeeTaskPanel;
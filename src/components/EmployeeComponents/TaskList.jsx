import React from 'react'
import AcceptTask from './AcceptTask'
import NewTask from './NewTask'
import CompleteTask from './CompleteTask'
import FailedTask from './FailedTask'
const colors = [
  'bg-gradient-to-r from-blue-500 to-blue-700',
  'bg-gradient-to-r from-purple-400 to-purple-600',
  'bg-gradient-to-r from-green-600 to-green-800',
  'bg-gradient-to-r from-red-400 to-red-600'
];

const TaskList = ({ data }) => {
  return (
    <div id='taskList' className='h-auto my-5 w-full flex flex-col gap-10 overflow-y-auto'>
     
      <div id='newTasks' className='flex flex-col gap-5'>
        <h2 className={`text-white text-xl font-bold p-3 rounded ${colors[0]}`}>New Tasks</h2>
        <div className='flex flex-wrap gap-5'>
          {data.tasks
            .filter(task => task.status.newTask)
            .map(task => <NewTask key={task.taskNumber} data={task}  />)}
        </div>
      </div>
      
      <div id='activeTasks' className='flex flex-col gap-5'>
        <h2 className={`text-white text-xl font-bold p-3 rounded ${colors[1]}`}>Active Tasks</h2>
        <div className='flex flex-wrap gap-5'>
          {data.tasks
            .filter(task => task.status.active)
            .map(task => <AcceptTask key={task.taskNumber} data={task} />)}
        </div>
      </div>
      
      <div id='completedTasks' className='flex flex-col gap-5'>
        <h2 className={`text-white text-xl font-bold p-3 rounded ${colors[2]}`}>Completed Tasks</h2>
        <div className='flex flex-wrap gap-5'>
          {data.tasks
            .filter(task => task.status.completed)
            .map(task => <CompleteTask key={task.taskNumber} data={task} />)}
        </div>
      </div>
      
      <div id='failedTasks' className='flex flex-col gap-5'>
        <h2 className={`text-white text-xl font-bold p-3 rounded ${colors[3]}`}>Failed Tasks</h2>
        <div className='flex flex-wrap gap-5'>
          {data.tasks
            .filter(task => task.status.failed)
            .map(task => <FailedTask key={task.taskNumber} data={task} />)}
        </div>
      </div>
    
    </div>
  );
};

export default TaskList
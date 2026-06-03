import React from 'react'
import Header from '../../components/Layouts/Header'
import TaskStatusTracker from '../../components/AdminComponents/TaskStatusTracker'
import TaskList from '../../components/EmployeeComponents/TaskList'
import Footer from '../../components/Layouts/Footer'

function EmployeeDashboard({data, changeUser}) {
  return (
    <div className='p-10 bg-[#1c1c1c] min-h-screen flex flex-col'>
      <Header data={data} changeUser={changeUser}/> 
      <TaskStatusTracker data={data}/>
      <TaskList data={data}/>
      <Footer />
    </div>  
  )
}

export default EmployeeDashboard
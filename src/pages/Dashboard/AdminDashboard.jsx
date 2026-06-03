import React from 'react'
import Header from '../../components/Layouts/Header'
import CreateTask from '../../components/AdminComponents/CreateTask';
import EmployeeTaskPanel from '../../components/AdminComponents/EmployeeTaskPanel';
import EmployeeList from '../../components/AdminComponents/EmployeeList';
import Footer from '../../components/Layouts/Footer'

const AdminDashboard = ({changeUser}) => {
  return (
    <div className="min-h-screen p-6">
      <Header changeUser={changeUser}/>
      <div className='flex items-center justify-center my-5 text-2xl'>Create Task</div>
      <div className="flex gap-6">
        <div className="w-1/2">
          <CreateTask />
        </div>
        <div className="w-1/2">
          <EmployeeList />
        </div>
      </div>
      <div className='flex items-center justify-center mt-5 text-2xl'>All Tasks</div>
      <EmployeeTaskPanel />
      <Footer className="mt-auto"/>
    </div>
  );
}

export default AdminDashboard
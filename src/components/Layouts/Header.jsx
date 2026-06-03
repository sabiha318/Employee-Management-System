import React from 'react'

const Header = ({data,changeUser}) => {

    const logOutUser = () => {
        changeUser('');
        localStorage.setItem('loggedInUser','')   // Clear user data from localStorage
        //window.location.reload(); // Reload the page to reflect the changes
        
    }
    
    return (
        <div className='flex items-center justify-between p-4 mb-5'>
            <div className='text-2xl font-semibold'>Welcome, <span className='text-blue-600'>{data?.name || 'User'}</span></div>
            <button onClick={logOutUser} className='px-4 py-2 bg-gradient-to-r from-blue-500 to-blue-700 text-white rounded shadow-md hover:from-blue-600 hover:to-blue-800 transform transition-transform duration-200 hover:scale-105'>Sign Out</button>
        </div>
    )
}

export default Header
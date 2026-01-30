import React from 'react'
import Sidebar from './Sidebar.jsx'

// 1. ACCEPT THE PROP HERE 👇
const DashboardLayout = ({ children, handleLogout }) => {
    return (
        <div className='flex min-h-screen bg-gray-50'>

            {/* Fixed Sidebar */}
            <Sidebar />
            
            <div className='flex-1 ml-64'>
                
                {/* Main Content Area */}
                <header className='flex items-center justify-between p-6 bg-white shadow-sm'>
                    <h1 className='text-xl font-bold text-gray-800'>Manager Dashboard</h1>
                    
                    {/* 2. NOW THIS BUTTON WILL WORK 👇 */}
                    <button 
                        onClick={handleLogout} 
                        className="px-4 py-2 text-sm font-bold text-red-500 transition-colors border border-red-100 rounded-lg hover:bg-red-50 hover:text-red-700"
                    >
                        Log Out
                    </button>
                </header>

                <main className="p-8">
                    {children}
                </main>
            </div>
        </div>
    )
}

export default DashboardLayout
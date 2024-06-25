import React from 'react'


const AdminCard= ({ children, className = '' }) => {
  return (
    <div className={`bg-white p-4 shadow-md rounded-md ${className}`}>
      {children}
    </div>
  )
}

export default AdminCard


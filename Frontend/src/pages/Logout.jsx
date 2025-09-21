import { useNavigate } from 'react-router-dom'
import React from 'react'

const Logout = () => {
    const Navigate=useNavigate();   
    const handleLogout=()=>{
        localStorage.removeItem("token");
        Navigate("/login")
    }
  return (
    <div>
       <button
      onClick={handleLogout}
      className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
    >
      Logout
    </button>
    </div>
  )
}

export default Logout

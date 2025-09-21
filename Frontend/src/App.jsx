 import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Notes from './components/Notes';

// PrivateRoute component
const PrivateRoute = ({ children }) => {
  const token = localStorage.getItem("token");
  return token ? children : <Navigate to="/register" />;
};

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/register' element={<Register />} />
        <Route path='/login' element={<Login />} />
        <Route 
          path='/notes' 
          element={
            <PrivateRoute>
              <Notes />
            </PrivateRoute>
          } 
        />
        {/* Catch-all route */}
        <Route path='*' element={<Navigate to="/login" />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;

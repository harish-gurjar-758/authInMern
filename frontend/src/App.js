import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Signup from './components/signup/signUp';
import Login from './components/Login/Login';
import Main from './components/Main/Main';

function App() {
  const user = localStorage.getItem("token");

  return (
    <div className="App">
      <Routes>
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route
          path="/"
          element={user ? <Main /> : <Navigate to="/login" replace />}
        />
        {/* Optionally handle unmatched routes */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </div>
  );
}

export default App;

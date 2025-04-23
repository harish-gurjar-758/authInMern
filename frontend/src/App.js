import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Signup from './components/signup/signUp';


function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/signup" element={<Signup />} />
        {/* Add other routes like /login, /home, etc. */}
      </Routes>
    </div>
  );
}

export default App;

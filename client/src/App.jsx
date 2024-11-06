import { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Login from './pages/Login';
import Home from './pages/Home';

function App() {
  const isLoggedIn = localStorage.getItem('token') !== null;

  return (
    <Router>
      <Routes>
        <Route
          path='/login'
          element={isLoggedIn ? <Navigate to="/" /> : <Login />}
        />
        <Route
          path='/'
          element={isLoggedIn ? <Home /> :  <Navigate to="/login" />}
        />
      </Routes>
    </Router>
  );
}

export default App;

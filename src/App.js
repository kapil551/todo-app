import './App.css';
import Dashboard from './components/Dashboard';
import Navbar from './components/Navbar';
import { Routes, Route, Link, useLocation } from "react-router-dom";
import Login from './components/Login';

import { auth } from './firebase/firebase.utils';
import { useEffect, useState } from 'react';

function App() {

  const [currentUser, setCurrentUser] = useState(null);
  console.log(currentUser);

  const location = useLocation();
  console.log(location.pathname);

  // firebase user authentication
  useEffect(
    () => {

      auth.onAuthStateChanged(user => {

        console.log(user);
        setCurrentUser(user);
      })

    }
  )

  return (
    <div className="w-screen h-screen flex flex-col">

      {
        location.pathname !== '/login' ? <Navbar currentUser={currentUser} /> : null
      }
      
      <Routes>

        <Route path='login' element={<Login />} />
        <Route path='dashboard' element={<Dashboard />} />
      </Routes>
    </div>
  );
}

export default App;

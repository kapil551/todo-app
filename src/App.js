import './App.css';
import Dashboard from './components/Dashboard';
import Navbar from './components/Navbar';
import { Routes, Route, Link, useLocation } from "react-router-dom";
import Login from './components/Login';

function App() {

  const location = useLocation();
  console.log(location.pathname);
  return (
    <div className="w-screen h-screen flex flex-col">

      {
        location.pathname !== '/login' ? <Navbar /> : null
      }
      
      <Routes>

        <Route path='login' element={<Login />} />
        <Route path='dashboard' element={<Dashboard />} />
      </Routes>
    </div>
  );
}

export default App;

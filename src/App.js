import './App.css';
import Dashboard from './components/Dashboard';
import Navbar from './components/Navbar';

function App() {
  return (
    <div className="w-screen h-screen flex flex-col">
      <Navbar />
      <Dashboard />
    </div>
  );
}

export default App;

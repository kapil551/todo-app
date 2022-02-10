import './App.css';
import Dashboard from './components/Dashboard';
import Navbar from './components/Navbar';
import { Routes, Route, Link, useLocation } from "react-router-dom";
import Login from './components/Login';

import { auth, createUserProfileDocument } from './firebase/firebase.utils';
import { useEffect, useState } from 'react';

function App() {

  const [currentUser, setCurrentUser] = useState(null);
  // console.log(currentUser);

  const location = useLocation();
  // console.log(location.pathname);

  // firebase user authentication
  useEffect(
    () => {

      auth.onAuthStateChanged( async userAuth => {

        if(userAuth) {

          // creating a user session
          const userRef = await createUserProfileDocument(userAuth);

          userRef.onSnapshot(snapShot => {

            // console.log(snapShot);
            setCurrentUser({
              id: snapShot.id,
              ...snapShot.data()
            });
          })

          // console.log(currentUser);
        }
        else {
          setCurrentUser(null);
        }
      });

    }, []
  )

  return (
    <div className="w-screen h-screen flex flex-col">

      {
        location.pathname !== '/' ? <Navbar currentUser={currentUser} /> : null
      }
      
      <Routes>

        <Route exact path='/' element={<Login currentUser={currentUser} />} />
        <Route exact path='dashboard' element={<Dashboard />} />
      </Routes>
    </div>
  );
}

export default App;

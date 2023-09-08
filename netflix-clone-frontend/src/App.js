import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import Home from './pages/home';
import Login from './pages/login';
import NewAndPopular from './pages/newAndPopular';
import MyList from './pages/myList';
import Register from './pages/register';
import Deafault from './pages/default';
import Watch from './pages/watch';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from 'react-router-dom';
import { useContext } from 'react';
import { AuthContext } from './authContext/AuthContext.js';
import './App.scss';

function App() {
  
  const { user } = useContext(AuthContext);

  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [shouldRedirect, setShouldRedirect] = useState(window.innerWidth < 550);
  useEffect(() => {
    const handleResize = () => {
      const newWindowWidth = window.innerWidth;
      setWindowWidth(newWindowWidth);

      // Check if the user should be redirected
      if (newWindowWidth < 600) {
        setShouldRedirect(true);
      } else {
        setShouldRedirect(false);
      }
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  useEffect(() => {
    // Check the screen size when the component mounts
    if (windowWidth < 600) {
      setShouldRedirect(true);
    } else {
      setShouldRedirect(false);
    }
  }, [windowWidth]);

  return (
    <div>
      {shouldRedirect ? (
        <Deafault /> // Render the default page for small screens
      ) : (
        <Router>
          <Routes>
            <Route
              path="/"
              element={user ? <Home /> : <Navigate to="/login" />}
            />
            <Route
              path="/register"
              element={!user ? <Register /> : <Navigate to="/" />}
            />
            <Route
              path="/login"
              element={!user ? <Login /> : <Navigate to="/" />}
            />
            {user && (
              <>
                <Route path="/movies" element={<Home type="movie" />} />
                <Route path="/series" element={<Home type="series" />} />
                <Route path="/newandpopular" element={<NewAndPopular />} />
                <Route path="/mylist" element={<MyList />} />
                <Route path="/watch" element={<Watch />} />
                <Route path="/default" element={<Deafault />} />
              </>
            )}
          </Routes>
        </Router>
      )}
    </div>
  );
}
export default App;

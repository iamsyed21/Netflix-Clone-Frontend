import React, { useRef, useState, useContext, useEffect } from "react";
import {Link } from 'react-router-dom';
import { login } from "../../authContext/apiCalls";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import notflix from '../../resources/images/notflix.png';
import { AuthContext } from "../../authContext/AuthContext"

import './index.scss'
const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setLoading] = useState(false);
  const { dispatch } = useContext(AuthContext);
  const navigate = useNavigate();
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
  }, [navigate]);

  useEffect(() => {
    // Check the screen size when the component mounts
    if (windowWidth < 600) {
      setShouldRedirect(true);
      navigate("/default");
    } else {
      setShouldRedirect(false);
    }
  }, [windowWidth, navigate]);

  const nameRef = useRef();
  const emailRef = useRef();
  const passwordRef = useRef();

  const handleRegister = async (e) => {
    e.preventDefault();

    setLoading(true);

    try {
      await axios.post("https://notflix-clone-backend-api.onrender.com/api/auth/register", { name, email, password });
      login({ email, password }, dispatch);
      navigate("/");
    } catch (err) {
      console.log(err);
    } finally {
      setLoading(false);
    }
  };
  
    return (
      <div className="register">
        <div className="top">
          <div className="wrapper">
            <img
              className="logo"
              src={notflix}
              alt=""
            />
            <Link to="/login" className='loginButton'>
            <span className="loginButton">Sign In</span>
            </Link>
          </div>
        </div>
        <div className="containerRegister">
          <h1>Unlimited movies, TV shows, and more.</h1>
          <h2>Watch anywhere. Cancel anytime.</h2>
          <p>
            Ready to watch? Enter your email to create or restart your membership.
          </p>
          <div className="inputForm">

          
          <form className="input" onSubmit={handleRegister}>
          <input
            type="text"
            placeholder="Username"
            value={name}
            onChange={(e) => setName(e.target.value)}
            ref={nameRef}
          />
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            ref={emailRef}
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            ref={passwordRef}
          />
          <button type="submit" className="registerButton">
            {isLoading ? "Registering..." : "Register"}
          </button>
        </form>
        </div>
        </div>
      </div>
    );
}

export default Register



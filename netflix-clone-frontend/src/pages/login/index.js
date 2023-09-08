import { useContext, useState, useEffect } from "react";
import { login } from "../../authContext/apiCalls";
import { AuthContext } from "../../authContext/AuthContext"
import {Link} from 'react-router-dom';
import { useNavigate } from "react-router-dom";
import notflix from '../../resources/images/notflix.png';

import './index.scss';
const Login = () => {

  

  const [email, setEmail] = useState("explorenotflix@definitelyrealmail.com");
  const [password, setPassword] = useState("notflixfakesure");
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


  const handleLogin = (e) => {
    e.preventDefault();
    login({ email, password }, dispatch);
    navigate("/");
  };
  
  return (
    
    <div className="login">
      <div className="top">
        <div className="wrapper">
          <img
            className="logo"
            src={notflix}
            alt=""
          />
        </div>
      </div>
      <div className='container'>
      <div className='row'>
        <div className='col-12 col-md-6 introBox'>
          <h1>Hello There!<span class="wave">👋</span></h1>
          <span className='thankyouforvisiting'>
            Thank you for visting my portofolio project:
          </span>
          <img alt='notflixLogo' src={notflix} className='logo22323'/>
          <span className='mainInfo'>
            If You dont want to register, I have PRELOADED CREDENTIALS FOR A TEST USER that you can use. Just hit Sign In. 
            
          <b> However, if you want to register or from from your own credentials, kindly replace the existing one's in the fields.</b> 
          </span>
          <span className='thankyou'>
            Thank you for your time!
          </span>

          <span className='disclaimer'>
          Disclaimer: This Netflix clone is as commercial as a cardboard spaceship – just a fun portfolio project, not for intergalactic streaming purposes!
          </span>

        </div>
        <div className='col-12 col-md-6 mainLogin'>
        <div className="containerLogin">
        <form>
          <h1>Sign In</h1>
          <input
            type="email"
            value={email}
            placeholder="Email or phone number"
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button className="loginButton" onClick={handleLogin}>
            Sign In
          </button>
          <span>
            New to Netflix? 
            <Link to="/register"><b>Sign up now.</b> </Link>
          </span>
          <small>
            This page is protected by Google reCAPTCHA to ensure you're not a
            bot. <b>Learn more</b>.
          </small>
        </form>
      </div>
        </div>
      </div>
      </div>
      
    </div>
  );
}

export default Login
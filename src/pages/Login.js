import React, { useState } from'react';
import { useNavigate } from'react-router-dom';
import { auth, signInWithGoogle, signInWithEmailAndPassword, googleProvider } from '../firebaseConfig';
import { createUserWithEmailAndPassword, signInWithPopup } from 'firebase/auth';
import { firestore } from '../firebaseConfig';
import Header from '../components/Header';
import "./Login.css"

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = async (event) => {
    event.preventDefault();
    try{
      await auth.signInWithEmailAndPassword(email, password);
      navigate('/Profile');
    } catch (error) {
      console.log('Login error: ', error);
    }
  };
  const handleRegister = async (event) => {
    event.preventDefault();
    try{
      await createUserWithEmailAndPassword(auth, email, password);
      navigate('/Profile');
    } catch (error) {
      console.log('Login error: ', error);
    }
  };

  const handleGoogleLogin = async (event) => {
    event.preventDefault();
    try {
      await signInWithPopup(auth, googleProvider);
      navigate('/Profile');
      console.log(auth?.currentUser?.photoURL);
    } catch (error) {
      console.log('Google login error: ', error);
    }
  };
  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };
  return (
    <>
    <div> 
    <Header />
      <div id='stars'></div>
      <div id='stars2'></div>
      <div id='stars3'></div>
      <div className="section">
        <div className="container">
          <div className="row full-height justify-content-center">
            <div className="col-12 text-center align-self-center py-5">
              <div className="section pb-5 pt-5 pt-sm-2 text-center">
                <h6 className="mb-0 pb-3"><span>Log In</span><span>Sign Up</span></h6>
                  <input className="checkbox" type="checkbox" id="reg-log" name="reg-log" />
                  <label htmlFor="reg-log"></label>
            <div className="card-3d-wrap mx-auto">
              <div className="card-3d-wrapper">
                <div className="card-front">
                  <div className="center-wrap">
                    <div className="section text-center">
                      <h4 className="mb-4 pb-3">Log In</h4>
                    <div className="form-group">
                      <input type="email" className="form-style" placeholder="Email" onChange={handleEmailChange} />
                      <i className="input-icon uil uil-at"></i>
                    </div>
                     <div className="form-group mt-2">
                      <input type="password" className="form-style" placeholder="Password" onChange={handlePasswordChange} />
                      <i className="input-icon uil uil-lock-alt"></i>
                     </div>
                     <div className="btn-box">
                     <button className="btn mt-4">Login</button>
                     <button className="btn Google" onClick={handleGoogleLogin}>Sign In with Google</button>
                     </div>
                     
                    </div>
                  </div>
                </div>
                <div className="card-back">
                  <div className="center-wrap">
                    <div className="section text-center">
                      <h4 className="mb-4 pb-3">Sign Up</h4>
                      <div className="form-group">
                        <input type="text" className="form-style" placeholder="Username"/>
                        <i className="input-icon uil uil-user"></i>
                      </div>
                      <div className="form-group mt-2">
                        <input type="email" className="form-style" placeholder="Email"/>
                        <i className="input-icon uil uil-at"></i>
                      </div>
                      <div className="form-group mt-2">
                        <input type="password" className="form-style" placeholder="Password"/>
                        <i className="input-icon uil uil-lock-alt"></i>
                      </div>
                      <button className="btn mt-4" onClick={handleRegister}>Register</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
    )

}

export default Login;
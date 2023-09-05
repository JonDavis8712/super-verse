import { useState, useRef, useEffect } from 'react';
import { createUserWithEmailAndPassword, 
 onAuthStateChanged, signInWithEmailAndPassword, signOut } from 'firebase/auth';
import { auth, googleProvider } from '../firebaseConfig';
import { signInWithGoogle } from '../firebaseConfig';
import { useNavigate } from'react-router-dom';
import Header from '../components/Header';



const Login = () => {
  const navigate = useNavigate();
  const registerEmailRef = useRef(null);
  const registerPasswordRef = useRef(null);
  const [registerEmail, setRegisterEmail] = useState('');
  const [registerPassword, setRegisterPassword] = useState('');
  const [loginEmail, setloginEmail] = useState('');
  const [loginPassword, setloginPassword] = useState('');
  const [isVisible, setIsVisible] = useState(false);
  const [isRegistered, setIsRegistered] = useState(false);
  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser)
      if (currentUser) {
              navigate('/Profile');
            }
  });
   return () => {
    unsubscribe();
   };
  }, [navigate]);

  const registerUser = async (e) => {
        try {
            const user = await createUserWithEmailAndPassword(
                auth,
                registerEmail,
                registerPassword);
                userLoggedIn();
            console.log(user);
            
        } catch (error) {
            console.log(error.message);
        }
        
    }

    const loginUser = async (e) => {
      try {
        const user = await signInWithEmailAndPassword(
            auth,
            loginEmail,
            loginPassword);
            userLoggedIn();
        console.log(user);
        
        
    } catch (error) {
        console.log(error.message);
    }
    
    }

    const handleGoogleLogin = async (e) => {
      try {
        const result  = await signInWithGoogle();
        const user = result.user;
        console.log('Google login successful: ', user);
      } catch (error) {
        console.log('Google login error: ', error.message);
      }
    }
    
    const toggleDisplay = () => {
      setIsVisible(!isVisible)

    }

    const userLoggedIn = () => {
      const divElement = document.createElement('div');
      divElement.innerHTML = `
      <h3 style="color: white;" class="LoggedIn">
        <span class='welcome' style="color: white;">Welcome to the Verse!</span>
        <span class='userEmail' style="color: white;">
          <br />Logged in as:
          <br />
          ${user?.email}
        </span>
      </h3>
    `;
             document.body.appendChild(divElement);
    }
  

  return (
    <div>
    <Header />
      <div className="container">
      
        <div className="LoginBox">
               
               <div style={{ display: isVisible ? 'none' : 'flex' }} className="registerUser">
                <button onClick={toggleDisplay} className="oldUser" >LOGIN</button>
                <button onClick={registerUser} className='regBtn'>REGISTER</button>
                <input type="password" className="password" placeholder='password' ref={registerPasswordRef}  onChange={(event) => {setRegisterPassword(event.target.value)}} />
                <input type="text" className="email"
                placeholder='Email' ref={registerEmailRef} onChange={(event) => {setRegisterEmail(event.target.value)}} />
                <div className="createUser">CREATE USER</div>
            </div>
            <div style={{ display: isVisible ? 'flex' : 'none' }} className="loginUser">
                <button onClick={toggleDisplay} className='regBtn'>REGISTER NEW</button>
                <button className='loginBtn'>ENTER</button>
                <input type="password" className="password" placeholder='Enter password' onChange={(event) => {setloginPassword(event.target.value)}} />
                <input type="text" className="email"
                placeholder='Email' onChange={(event) => {setloginEmail(event.target.value)}} />
                <div className="login">LOGIN EXISTING USER:</div>
                
            </div>
            {/* <h3 className="LoggedIn"><span className='welcome'>Welcome to the Verse!</span> 
            <span className='userEmail'><br />Logged in as</span>: <br />
             {user.email} </h3> */}
             <button className="google" onClick={handleGoogleLogin}>SIGN IN WITH GOOGLE</button>
        </div>
      </div>
    </div>
  )
}

export default Login


import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Login.css';
import { login, signup } from '../../firebase';
import spinner from '../../assets/spinner.gif';

const Login = () => {
  const navigate = useNavigate();
  const [signstate, setsignstate] = useState("Sign in");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const user_auth = async (event) => {
    event.preventDefault();
    setLoading(true);
    try {
      if (signstate === "Sign in") {
        await login(email, password);
      } else {
        await signup(name, email, password);
        // After signup, we need to log in the user
        await login(email, password);
      }
      // If we reach here, it means login/signup was successful
      navigate('/');
    } catch (error) {
      console.error("Authentication error:", error);
      // Handle the error (e.g., show an error message to the user)
    } finally {
      setLoading(false);
    }
  }

  return (
    loading ? <div className='spinner'><img src={spinner} alt="spinner" /></div> :

    <div className='login'>
      <div className="login-form">
        <h1>{signstate}</h1>
        <form>
          {signstate === "Sign up" ? 
            <input value={name} onChange={(e) => {setName(e.target.value)}} 
              type="text" placeholder='Your name' /> : 
            <></>
          }
          <input value={email} onChange={(e) => {setEmail(e.target.value)}} type="email" placeholder="Email ID" />
          <input value={password} onChange={(e) => {setPassword(e.target.value)}} type="password" placeholder="Password (At least six characters)" />
          <button onClick={user_auth} type='submit'>{signstate}</button>
          <div className="form-help">
            <div className="remember">
              <input type="checkbox" id="remember" />
              <label htmlFor="remember">Remember me</label>
            </div>
            <p>Need help?</p>
          </div>
        </form>
        <div className="form-switch">
          {signstate === "Sign in" ?
            <p>New to Cricgeek?<span onClick={() => {setsignstate("Sign up")}}>Sign up now</span></p> :
            <p>Already have account?<span onClick={() => {setsignstate("Sign in")}}>Sign in now</span></p>
          }
        </div>
      </div>
    </div>
  )
}

export default Login

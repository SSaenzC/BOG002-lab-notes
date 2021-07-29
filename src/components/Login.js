import React, { useRef } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext.jsx';
import './Login.css';

export default function Login() {
  const emailRef = useRef();
  const passwordRef = useRef();
  const { logIn } = useAuth();
  const { googleLogIn, facebokLogIn } = useAuth();
  const history = useHistory();

  function formSubmit(event) {
    event.preventDefault();

    logIn(emailRef.current.value, passwordRef.current.value);
    history.push('/');
  }

  function googleButtonSubmit(event) {
    event.preventDefault();
    googleLogIn();
    history.push('/');
  }

  function facebookButtonSubmit(event) {
    event.preventDefault();
    facebokLogIn();
    history.push('/');
  }
  return (
    <div>
      <h1>Welcome back to Remember Me!!</h1>
      <p>
        Guarda tus pensamientos, recordatorios, ideas, hasta la lista de mercado
        en un solo lugar!
      </p>
      <h2>Log In</h2>
      <section className="Authentication">
        <form onSubmit={formSubmit} className="signUpForm">
          <label className="inputs">
            Email
            <input type="email" ref={emailRef} required />
          </label>
          <label className="inputs">
            Password
            <input type="password" ref={passwordRef} required />
          </label>
          <button type="submit">Log In</button>
        </form>
        <h2>ó</h2>
        <div className="loginSocialMedia">
          <button onClick={googleButtonSubmit}>Continue with Google</button><br/>
          <button onClick={facebookButtonSubmit}>Continue with Facebook</button>
        </div>
        <div>
          Need an account? <Link to="/signup">Sign Up</Link>
        </div>
      </section>
    </div>
  );
}

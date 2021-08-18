import React, { useRef } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext.jsx';
import '../App.css';

export default function SignUp() {
  const nameRef = useRef();
  const emailRef = useRef();
  const passwordRef = useRef();
  const { emailAndPasswordSignUp } = useAuth();
  const { googleLogIn, facebokLogIn } = useAuth();
  const history = useHistory();

  async function formSubmit(event) {
    event.preventDefault();

    await emailAndPasswordSignUp(
      emailRef.current.value, passwordRef.current.value, nameRef.current.value,
    );
    history.push('/');
  }

  function googleButtonSubmit(event) {
    event.preventDefault();
    googleLogIn();
  }

  function facebookButtonSubmit(event) {
    event.preventDefault();
    facebokLogIn();
  }
  return (
    <div>
      <h1>Welcome to Remind me</h1>
      <p>A place to store your reminders, notes, even the list of your groceries</p>
      <h2>Sign Up</h2>
      <section className='Authentication'>
        <form onSubmit={formSubmit} className='signUpForm'>
          <label className='inputs' >
            Name
            <input type="text" ref={nameRef} required />
          </label>
          <label className='inputs'>
            Email
            <input type="email" ref={emailRef} required />
          </label>
          <label className='inputs'>
            Password
            <input type="password" ref={passwordRef} required />
          </label>
          <button type="submit" >Sign Up</button>
        </form>
        <h2>ó</h2>
        <button onClick={googleButtonSubmit} className='loginSocialMedia'>Continue with Google</button><br/>
        <button onClick={facebookButtonSubmit} className='loginSocialMedia'>Continue with Facebook</button>
        <div>
          Already have an account? <Link to = "/login">LogIn</Link>
        </div>
      </section>
    </div>
  );
}

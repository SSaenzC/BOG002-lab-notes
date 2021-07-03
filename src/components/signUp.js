import React, { useRef } from 'react';
// import firebaseInit from '../firebase';

export default function SignUp() {
  const nameRef = useRef();
  const emailRef = useRef();
  const passwordRef = useRef();

  return (
    <div>
      <h1>Bienvendio a RememberMe!!</h1>
      <p>Guarda tus pensamientos, recordatorios, ideas,
        hasta la lista de mercado en un solo lugar!</p>
      <h2>Regístrate</h2>
      <section>
        <form>
          <label>
            Nombre
            <input type="text" ref={nameRef} required />
          </label>
          <label>
            Correo
            <input type="email" ref={emailRef} required />
          </label>
          <label>
            Contraseña
            <input type="password" ref={passwordRef} required />
          </label>
          <button type="submit" >Registrarse</button>
        </form>
        {/* <h2>ó</h2>
        <button>Continua con google</button> */}
        <div>
          Ya tienes una cuenta? Ingresa aquí
        </div>
      </section>
    </div>
  );
}
// const SignUp = () => {
//   const [user, setUser] = useState('');
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [emailError, setEmailError] = useState('');
//   const [passwordemailError, setPasswordError] = useState('');
//   const [hasAccount, setHasAccount] = useState(false);

//   const signUpEvent = () => {
//     firebaseInit.auth()
//       .createUserWithEmailAndPassword(email, password)
//       .catch((err) => {
//         // eslint-disable-next-line default-case
//         switch (err.code) {
//           case 'auth/email-already-in-use':
//           case 'auth/invalid-email':
//             setEmailError(err.message);
//             break;
//           case 'auth/weak-password':
//             setPasswordError(err.message);
//             break;
//         }
//       });
//   };

//   const authListener = () => {
//     firebaseInit.auth.onAuhtStateChanged((userAuth) => {
//       if (userAuth) {
//         setUser(userAuth);
//       } else {
//         setUser('');
//       }
//     });
//   };
// };

// export default SignUp;

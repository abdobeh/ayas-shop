import './App.css';
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

function App() {
  const auth = getAuth();

  const singIn = () => {
    signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed in 
      const user = userCredential.user;
      console.log(user)
      // ...
    })
    .catch((error) => {
      const errorCode = error.code;
      // const errorMessage = error.message;
      alert(errorCode)
    });
  }



  return (
    <div className="main">
      <div className= "App">
      <input type={"email"} placeholder="please enter your email" onChange={(e) => setEmail(e.target.value)}/>
      <input type={"password"} placeholder="please enter password" onChange={(e) => setPassword(e.target.value)}/>
      <button onClick={signUp}>Create Account</button>
      <button onClick={singIn}>Sign in</button>
      </div>
      </div>
  );
}

export default App;

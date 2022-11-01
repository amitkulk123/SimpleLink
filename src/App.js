import "./App.css";
import { signinWithGoogle, signinWithMicrosoft, signOut } from "./firebase";

function App() {
  return (
    <div className="App">
      <button id="login-with-google-btn" class="login-with-btn" onClick={signinWithGoogle}>
        Sign in with Google
      </button>
      <button id="login-with-microsoft-btn" class="login-with-btn" onClick={signinWithMicrosoft}>
        Sign in with Microsoft
      </button>
      <h1>{localStorage.getItem("name")}</h1>
      <h1>{localStorage.getItem("email")}</h1>
      <button class="sign-out-btn" onClick={signOut}>
        Sign Out
      </button>
    </div>
  );
}

export default App;

import { GoogleOAuthProvider } from "@react-oauth/google";

// import { GoogleLogin, googleLogout } from '@react-oauth/google'

function App() {
  return (
    <GoogleOAuthProvider clientId="">
      <h1 className="text-3xl font-bold underline">Hello World!</h1>
    </GoogleOAuthProvider>
  );
}

export default App;

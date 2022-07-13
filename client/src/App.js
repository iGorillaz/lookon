import { GoogleOAuthProvider } from "@react-oauth/google";
import { Routes, Route, useNavigate } from "react-router-dom";
import Login from "./components/Login";
import Home from "./container/Home";

function App() {
  return (
    <GoogleOAuthProvider clientId="693583069583-8petef80qng0unvf7d9udlqir4rakbha.apps.googleusercontent.com">
      <Routes>
        <Route path="login" element={<Login />} />
        <Route path="/*" element={<Home />} />
      </Routes>
    </GoogleOAuthProvider>
  );
}

export default App;

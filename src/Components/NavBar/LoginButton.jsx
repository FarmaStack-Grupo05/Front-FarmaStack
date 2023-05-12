import { useAuth0 } from "@auth0/auth0-react";
import { useNavigate } from "react-router-dom";

const LoginButton = () => {
    const navigate = useNavigate();
  const { loginWithPopup } = useAuth0();
  

  const login = (e) => {
    e.preventDefault();
    loginWithPopup().then(()=> navigate(0))
  };

  return (
    <div>
      <button onClick={login}>Log In</button>
     
    </div>
  );
};

export default LoginButton;

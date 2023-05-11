import { useAuth0 } from "@auth0/auth0-react";


const LoginButton = () => {
 
  const { loginWithPopup } = useAuth0();


  const login = (e) => {
   
    e.preventDefault();
    loginWithPopup();
  };

  return (
    <div>
      <button onClick={login}>Log In</button>
     
    </div>
  );
};

export default LoginButton;

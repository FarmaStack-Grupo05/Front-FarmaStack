import { useAuth0 } from "@auth0/auth0-react";
import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getUser } from "../../redux/slices/users/sliceUsers";


const Profile = () => {
  const dispatch = useDispatch();
  const { user, isAuthenticated, isLoading } = useAuth0();
  const  usuario= useSelector(state => state.userState.user)

  useEffect(()=>{
    dispatch(getUser(user))
    console.log("Profile")
  }, [dispatch])


  
  console.log( user)
  if (isLoading) {
    return <div>Loading ...</div>;
  }

  return (
    isAuthenticated && (
      <div>
        <img src={user.picture} alt={user.name} />
        <h2>{user.name}</h2>
        <p>{user.email}</p>
      </div>
    )
  );
};

export default Profile;
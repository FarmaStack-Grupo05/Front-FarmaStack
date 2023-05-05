import React, {useState} from "react"
import { useAuth0} from "@auth0/auth0-react"

const LoginButton = ()=>{
    const [isOpen, setIsOpen] = useState(false)

    const {loginWithRedirect, isAuthenticated} = useAuth0()



    const handleTaggle = ()=> setIsOpen(!isOpen)

    const handleLogin = ()=> {
        loginWithRedirect()
        console.log(isAuthenticated)
        setIsOpen(false)
      
    }

    return(
        <div>
            <button className=""  onClick={ logout} >Logout</button>
            <button className="" onClick={handleTaggle} >Log In</button>
            {!isOpen && (
                <ul>
                    <li onClick={handleLogin}>Log In</li>
                </ul>
            )}
        </div>
    )
}

export default LoginButton
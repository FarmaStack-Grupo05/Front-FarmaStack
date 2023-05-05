import  {useState} from "react"
import { useAuth0} from "@auth0/auth0-react"

const LoginButton = ()=>{
    const [isOpen, setIsOpen] = useState(false)
    const {loginWithRedirect, logout} = useAuth0()


    const handleTaggle = ()=> setIsOpen(!isOpen)

    const handleLogin = ()=> {
        loginWithRedirect()
        setIsOpen(false)
 
      
    }

    return(
        <div>
            
            <button className="" onClick={handleTaggle} >Log In</button>
          
            {!isOpen && (
                <ul>
                    <li onClick={handleLogin}>Log In with Auth0</li>
                </ul>
            )}
              <button className=""  onClick={ logout} >Logout</button>
        </div>
    )
}

export default LoginButton
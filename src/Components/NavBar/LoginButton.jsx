import  {useState} from "react"
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
            
          
            {!isOpen && (
                <button onClick={handleLogin}>
                    Log In
                </button>
            )}
            
        </div>
    )
}

export default LoginButton
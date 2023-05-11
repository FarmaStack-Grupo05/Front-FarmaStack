import { useEffect, useState } from "react"
import { useAuth0 } from "@auth0/auth0-react"

const LoginButton = () => {
    const [isOpen, setIsOpen] = useState(false)
    const { loginWithPopup, isAuthenticated, getAccessTokenWithPopup } = useAuth0()

    useEffect(() => {
        const setToken = async () => {
            const accessToken = await getAccessTokenWithPopup()
            if (accessToken && isAuthenticated) {
                localStorage.setItem("authToken", accessToken)
            }
        }
    }, [isAuthenticated])

    const login = (e) => {
        e.preventDefault();
        loginWithPopup();
      };

    return (
        <div>


            {!isOpen && (
                <button onClick={login} >
                    Log In
                </button>
            )}

        </div>
    )
}

export default LoginButton
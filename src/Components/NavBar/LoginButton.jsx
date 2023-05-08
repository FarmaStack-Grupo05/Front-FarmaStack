import { useEffect, useState } from "react"
import { useAuth0 } from "@auth0/auth0-react"

const LoginButton = () => {
    const [isOpen, setIsOpen] = useState(false)
    const { loginWithRedirect, isAuthenticated, getAccessTokenWithPopup } = useAuth0()

    useEffect(() => {
        const setToken = async () => {
            const accessToken = await getAccessTokenWithPopup()
            if (accessToken && isAuthenticated) {
                localStorage.setItem("authToken", accessToken)
            }
        }
    }, [isAuthenticated])

    const handleTaggle = () => setIsOpen(!isOpen)

    const handleLogin = () => {
        console.log(isAuthenticated)
        loginWithRedirect()
        setIsOpen(false)
    }

    return (
        <div>


            {!isOpen && (
                <button onClick={handleLogin} >
                    Log In
                </button>
            )}

        </div>
    )
}

export default LoginButton
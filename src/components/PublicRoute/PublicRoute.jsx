import { useSelector } from "react-redux"
import { Navigate } from "react-router-dom"


export const PublicRoute = ({ children }) => {
    const {token} = useSelector((state) => state.login.login)
    return token === '' ? children : <Navigate to='/'/>
}
import { Navigate } from "react-router-dom"

export const ProtectedRoutes = ({children}) => {

  const token = JSON.parse(sessionStorage.getItem('jwtToken'))
  return (
     token ? children :<Navigate to= "/login"/>
  )
}


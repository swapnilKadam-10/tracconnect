import { Routes, Route } from "react-router-dom";

import { HomePage,DashboardPage, Login, Register, About } from "../pages";
import { ProtectedRoutes } from "./ProtectedRoutes";

export const AllRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/about" element={<About />} />
      <Route path="/login" element={<Login />} /> 
      <Route path="/register" element={<Register />} />
      <Route path="/dashboard/*" element={<ProtectedRoutes ><DashboardPage /> </ProtectedRoutes>} />
    </Routes>
  )
}

import { useState, useEffect } from 'react'
import { Routes, Route } from 'react-router-dom'
import { SlideBar } from './components/SlideBar'
import { Dashboard } from './components/Dashboard'
import { Profile } from './components/Profile'
import { ClientList } from './components/ClientList'
import { ClientProfile } from './ClientProfile'
import { useTitle } from '../../hooks/useTitle'

export const DashboardPage = () => {
  const [clients, setClients] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const token = JSON.parse(sessionStorage.getItem("jwtToken"));

    useEffect(() => {
      const fetchClients = async () => {
        if (!token) {
          setError("User not authenticated");
          setLoading(false);
          return;
        }
  
        try {
          const url = "http://localhost:8080/api/clients";
          const response = await fetch(url, {
            headers: {
              Authorization: `Bearer ${token}`,
              "Content-Type": "application/json",
            },
          });
  
          if (!response.ok) {
            const errorData = await response.json();
            throw new Error(errorData.message || "Failed to fetch clients");
          }
  
          const data = await response.json();
          // console.log(data);
          setClients(data);
          setLoading(false);
        } catch (err) {
          console.error(err.message);
          setError(err.message);
          setLoading(false);
        }
      };
  
      fetchClients();
    },[token])

    

useTitle('Dashboard');
  return (
    <main>
        <section className='flex'>
        <aside className='max-sm:hidden'>
        <SlideBar />
        
        </aside>
        
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="profile" element={<Profile />} />
          <Route path="client" element={<ClientList clients={clients}/>} />
          <Route path="clientprofile/:id" element={<ClientProfile clients={clients}/>} />
        </Routes>
        </section>
        
    </main>


  )
}

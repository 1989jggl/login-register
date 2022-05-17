import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { UserLogin } from '../types'
export const useDashboard = () => {
  const navigate = useNavigate()
  const [user, setuser] = useState({} as UserLogin)
  useEffect(() => {
    const userLocal = localStorage.getItem('user')
    if (userLocal) {
      const userJson = JSON.parse(userLocal)
      setuser(userJson)
    } else {
      navigate('/login')
    }
    console.log(userLocal)
  }, [])
  const handleLogout = () => {
    localStorage.removeItem('user')
    navigate('/')
  }
  return { user, handleLogout }
}

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { Layout } from './components/Layout'
import { Dashboard } from './pages/Dashboard'
import { Home } from './pages/Home'
import { Login } from './pages/Login'
import { Register } from './pages/Register'

function App () {
  return (
    <main className='flex flex-col md:flex-row min-h-screen'>
     <Layout />
     <div className='flex-1 order-1 md:order-2 bg-white p-10'>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/register/:type" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
      </Router>
      </div>
    </main>
  )
}

export default App

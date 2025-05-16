import { Navigate, Route, Routes } from 'react-router-dom'
import Home from './pages/home/Home.jsx'
import Navbar from './components/navbar/Navbar.jsx'
import Signup from './pages/signup/Signup.jsx'
import Login from './pages/login/Login.jsx'
import { useAuthContext } from './hooks/UseAuthContext.jsx'

function App() {

  const {user} = useAuthContext();
  return (
    <div className='App'>
      <Navbar />
      <div className="pages">
        <Routes>
          <Route path="/" element={user ?<Home /> : <Navigate to='/login'/>} />
          <Route path='/signup' element={!user ? <Signup /> : <Navigate to='/'/>}/>
          <Route path='/login' element={!user ?<Login /> : <Navigate to='/'/>}/>
        </Routes>
      </div>
    </div>
  )
}

export default App

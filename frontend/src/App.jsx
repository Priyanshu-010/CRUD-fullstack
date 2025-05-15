import { Route, Routes } from 'react-router-dom'
import Home from './pages/home/Home.jsx'
import Navbar from './components/navbar/Navbar.jsx'
import Signup from './pages/signup/Signup.jsx'
import Login from './pages/login/Login.jsx'

function App() {

  return (
    <div className='App'>
      <Navbar />
      <div className="pages">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path='/signup' element={<Signup />}/>
          <Route path='/login' element={<Login />}/>
        </Routes>
      </div>
    </div>
  )
}

export default App

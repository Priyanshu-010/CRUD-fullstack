import { Route, Routes } from 'react-router-dom'
import Home from './pages/home/Home.jsx'
import Navbar from './components/navbar/Navbar.jsx'

function App() {

  return (
    <div className='App'>
      <Navbar />
      <div className="pages">
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </div>
    </div>
  )
}

export default App

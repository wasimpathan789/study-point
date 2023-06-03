
import './App.css'
import Navbar from './components/Navbar'
import Add from './components/Add'
import AllMembers from './components/AllMembers'
import { Routes, Route} from 'react-router-dom'
import Home from './components/Home'

function App() {

  return (
    <div>
      <Navbar/>
    
      <Routes>
   
      <Route index element={<Home />} />
      <Route path="/all" element={<AllMembers />} />
      <Route path="/add" element={<Add />} />
    </Routes>

    </div>
  )
}

export default App

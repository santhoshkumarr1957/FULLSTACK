import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import Login from'./pages/login'
import Projects from './pages/project'
import Tasks from './pages/task'
import Calender from './pages/calender'
import Clients from './pages/clients'
import Dashboard from './pages/dashboard'
import Settings from './pages/settings'
import Team from './pages/team'
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login/>} />
        <Route path="/projects" element={<Projects/>} />
        <Route path="/tasks" element={<Tasks/>} />
        <Route path="/calender" element={<Calender/>}/>
        <Route path="/clients" element={<Clients/>}/>
        <Route path="/dashboard" element={<Dashboard/>}/>
        <Route path="/settings" element={<Settings/>}/>
        <Route path="/team" element={<Team/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
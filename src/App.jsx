import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Timeline from './pages/Timeline'
import Golf from './pages/Golf'
import Stay from './pages/Stay'
import NavBar from './components/NavBar'

export default function App() {
  return (
    <BrowserRouter>
      <div className="pb-16">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/timeline" element={<Timeline />} />
          <Route path="/golf" element={<Golf />} />
          <Route path="/stay" element={<Stay />} />
        </Routes>
      </div>
      <NavBar />
    </BrowserRouter>
  )
}

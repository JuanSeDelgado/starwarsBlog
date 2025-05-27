import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './views/Home'
import Detail from './views/Detail'
import NotFound from './views/NotFound'
import Favorites from './views/Favorites'
import Navbar from './components/Navbar'

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <div className="bg-dark min-vh-100">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/:type/:id" element={<Detail />} />
          <Route path="/favorites" element={<Favorites />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App

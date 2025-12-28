import './App.css';
import { Route, Routes } from 'react-router-dom';
import Mainpage from './pages/Mainpage';
import Favorites from './pages/Favorites';
import Header from './components/headers/Header'

function App() {
  return (
    <>
      <Header />
      <div>
        <Routes>
          <Route path="/" element={<Mainpage />} />
          <Route path="/favorites" element={<Favorites />} />
        </Routes>
      </div>
    </>

  )
}

export default App

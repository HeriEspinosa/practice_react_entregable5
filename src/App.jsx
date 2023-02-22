import { Route, Routes } from 'react-router-dom';
import './App.css'
import Footer from './components/footer/Footer';
import NavBar from './components/navbar/NavBar';
import Home from './pages/Home';
import Pokedex from './pages/Pokedex';
import ProtectedRoutes from './pages/ProtectedRoutes';

function App() {

  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Home />} />
        <Route element={<ProtectedRoutes />}>
          <Route element={<NavBar />}>
            <Route path='/pokedex' element={<Pokedex />} />
            <Route path='/pokeCard:id' element={<Pokedex />} />
          </Route>
        </Route>
      </Routes>

      <Footer />
    </div>
  )
}

export default App

import {
  BrowserRouter,
  Routes,
  Route
} from 'react-router-dom'

// CSS
import './assets/css/index.css'

// Components
import { NavBar } from './components'
import { Home } from './pages'

function App() {


  return (
    <BrowserRouter>
      <NavBar />

      <Routes>
        <Route
          path="/"
          Component={Home}
        />
      </Routes>

      <h1>PetLog Main Header</h1>
    </BrowserRouter>

  )
}

export default App

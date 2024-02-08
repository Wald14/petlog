import {
  BrowserRouter,
  Routes,
  Route
} from 'react-router-dom'

// CSS
import './assets/css/index.css'

// Components
import { NavBar } from './components'
import { HomePage, PageNotFound } from './pages'


function App() {


  return (
    <BrowserRouter>
      <NavBar />

      <Routes>
        <Route
          path="/"
          Component={HomePage}
        />

        <Route
          path="*"
          Component={PageNotFound}
        />

      </Routes>
    </BrowserRouter>

  )
}

export default App

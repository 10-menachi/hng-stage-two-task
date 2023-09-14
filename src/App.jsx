import { Route, Routes } from "react-router"
import HomePage from "./pages/HomePage"
import MoviePage from "./pages/MoviePage"
import './App.css'

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/movie" element={<MoviePage />} />
      </Routes>
    </div>
  )
}

export default App
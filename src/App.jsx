import { Route, Routes } from "react-router"
import HomePage from "./pages/HomePage"
import MoviePage from "./pages/MoviePage"
import './App.css'
import { useEffect, useState } from "react"
import axios from "axios"

const App = () => {
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    const fetchMovies = async () => {
      const apiUrl = import.meta.env.VITE_API_URL;
      try {
          const { data } = await axios.get(apiUrl);
          setMovies(data.results)
      } catch (error) {
          console.log(error);
      }
    }
  fetchMovies();
  }, []);
  return (
    <div>
      <Routes>
        <Route path="/" element={<HomePage movies={movies} />} />
        <Route path="/movie/:id" element={<MoviePage movies={movies} />} />
      </Routes>
    </div>
  )
}

export default App
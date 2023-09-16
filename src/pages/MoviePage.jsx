import { useParams } from "react-router-dom"
import SideBar from "../components/SideBar"
import PropTypes from 'prop-types'
import MovieDetails from "../components/MovieDetails";

const MoviePage = ({ movies }) => {
  const { id } = useParams();
  const movie = movies.find(movie => String(movie.id) === id)
  return movie ? (
    <div>
      <SideBar />
      <MovieDetails movie={movie} />
    </div>
  ) : (
    <p>Loading...</p>
  )
}

MoviePage.propTypes = {
  movies: PropTypes.array.isRequired
}

export default MoviePage
import MovieCard from "./MovieCard"
import PropTypes from 'prop-types'

const Movies = ({ movies }) => {
  return (
    <div className="movies">
        <p className="title">Featured Movie</p>
        <div className="movie-cards">
            {movies.map(movie => <MovieCard
            id={movie.id}
              title={movie.original_title}
              key={movie.id}
              release_date={movie.release_date}
              poster={movie.poster_path}
          />)}
        </div>
    </div>
  )
}

Movies.propTypes = {
  movies: PropTypes.array.isRequired
}

export default Movies
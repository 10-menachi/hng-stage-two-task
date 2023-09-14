import { range } from "../utils"
import MovieCard from "./MovieCard"

const Movies = () => {
  return (
    <div className="movies">
        <p className="title">Featured Movie</p>
        <div className="movie-cards">
            {range(1, 30).map(index => <MovieCard key={index} />)}
        </div>
    </div>
  )
}

export default Movies
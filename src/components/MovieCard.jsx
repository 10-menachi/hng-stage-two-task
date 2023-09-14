import CardPoster from "../assets/movie-card-poster.png"
import IMDB from "../assets/imdb.png"
import RottenTomatoes from "../assets/rotten-tomatoes.png"

const MovieCard = () => {
  return (
    <div className="movie-card">
        <img src={CardPoster} alt="" />
        <div className="card-info">
            <div className="country">USA, 2016 - Current</div>
            <div className="movie-title">Stranger Things</div>
            <div className="flex between movie-card-ratings">
                <div className="flex imdb-card">
                    <img src={IMDB} alt="IMDB Logo" />
                    <div>86.0 / 100</div>
                </div>
                <div className="flex rotten-tomatoes-card">
                    <img src={RottenTomatoes} alt="Rotten Tomatoes Logo" />
                    <div>97%</div>
                </div>
            </div>
            <div className="genres">Action, Adventure, Horror</div>
        </div>
    </div>
  )
}

export default MovieCard
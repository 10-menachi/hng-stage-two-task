import { Link } from "react-router-dom";
import IMDB from "../assets/imdb.png"
import RottenTomatoes from "../assets/rotten-tomatoes.png"
import PropTypes from "prop-types";
import { AiFillHeart } from 'react-icons/ai'

const MovieCard = ({ id, title, release_date, poster}) => {
  return (
    <Link to={`/movies/${id}`} data-testid="movie-card">
        <div className="movie-card">
            <div className="image-poster">
                <p className="heart">
                    <AiFillHeart className="heart-icon" />
                </p>
                <img src={`https://image.tmdb.org/t/p/w500/${poster}`} alt="Poster" className="image-poster" data-testid="movie-poster" />
            </div>
            <div className="card-info">
                <div className="country" data-testid="movie-release-date">Release Date: {release_date}</div>
                <div className="movie-title" data-testid="movie-title">{title}</div>
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
    </Link>
  )
}

MovieCard.propTypes = {
    title: PropTypes.string.isRequired,
    release_date: PropTypes.string.isRequired,
    poster: PropTypes.string.isRequired,
    id: PropTypes.number.isRequired
};

export default MovieCard
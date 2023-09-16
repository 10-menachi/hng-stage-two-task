import PropTypes from 'prop-types'
import { AiFillStar } from 'react-icons/ai'
import TwoTickets from '../assets/TwoTickets.png'
import List from '../assets/List.png'
import Picha from '../assets/picha.png'

const MovieDetails = ({ movie }) => {
  return (
    <div className='movie-details'>
      <img className='backdrop' src={`https://image.tmdb.org/t/p/w1280/${movie.backdrop_path}`} alt="Backdrop Image" />
          <div className="title">
          <p>
            <span data-testid="movie-title">{movie.title}</span> . <span data-testid="movie-release-date" >{movie.release_date}</span> . {movie.adult ? '' : 'PG 13'} . <span data-testid="movie-runtime">130 min</span></p>
          <div className="ratings">
            <AiFillStar className='star' />
            8.5 | 350k
          </div>
          </div>
      <div className="details">
        <div className="left">
          <p className="desc" data-testid="movie-overview">{movie.overview}</p>
          <div className="last-div">
            <p className='par-a'>Top rated movie #65</p>
          </div>
        </div>
        <div className="right">
          <div className="showtimes">
            <img className='tickets-icon' src={TwoTickets} alt="" />
            <p>See Showtimes</p>
          </div>
          <div className="watch-options">
            <img className="list-icon" src={List} alt="" />
            <p>More Watch Options</p>
          </div>
          <img src={Picha} alt="" />
        </div>
      </div>
    </div>
  )
}

MovieDetails.propTypes = {
  movie: PropTypes.object.isRequired
}

export default MovieDetails
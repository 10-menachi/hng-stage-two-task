import IMDB from '../assets/imdb.png'
import RottenTomatoes from '../assets/rotten-tomatoes.png'
import Play from '../assets/Play.png'

const Featured = () => {
  return (
    <div className='featured'>
        <p className="title">John Wick 3: Parabellum</p>
        <div className="ratings">
            <div className="imdb">
                <img src={IMDB} alt="IMDB Logo" />
                <p>86.0 / 100</p>
            </div>
            <div className="rotten-tomatoes">
                <img src={RottenTomatoes} alt="Rotten Tomatoes Logo" />
                <p>97%</p>
            </div>
        </div>
        <p className="description">
        John Wick is on the run after killing a member of the international assassins&apos; guild, and with a $14 million price tag on his head, he is the target of hit men and women everywhere.
        </p>
        <div className="watch-trailer-button">
            <img src={Play} alt="Play Button" />
            <p>Watch Trailer</p>
        </div>
    </div>
  )
}

export default Featured
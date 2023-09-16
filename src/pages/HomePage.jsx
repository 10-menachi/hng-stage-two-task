import Header from "../components/Header"
import Movies from "../components/Movies"
import PropTypes from "prop-types"

const HomePage = ({ movies }) => {
  return (
    <div>
        <Header />
        <Movies movies={movies} />
    </div>
  )
}

HomePage.propTypes = {
  movies: PropTypes.array.isRequired
};

export default HomePage
import Logo from './Logo'
import LogOut from '../assets/Logout.png'
import Home from '../assets/Home.png'
import MovieIcon from '../assets/MovieIcon.png'
import TVIcon from '../assets/TVIcon.png'
import Calendar from '../assets/Calendar.png'

const SideBar = () => {
  return (
    <div className='sidebar'>
        <Logo />
        <div className="sidebar-menu">
            <div className="menu-item">
                <img src={Home} alt="" />
                <p>Home</p>
            </div>
            <div className="menu-item active">
                <img src={MovieIcon} alt="" />
                <p>Movies</p>
            </div>
            <div className="menu-item">
                <img src={TVIcon} alt="" />
                <p>TV Series</p>
            </div>
            <div className="menu-item">
                <img src={Calendar} alt="" />
                <p>Upcoming</p>
            </div>
        </div>
        <div className="play-movie-quizzes">
            <p className='c-title'>Play movie quizes and earn free tickets</p>
            <p className='c-desc'>50k people are playing now</p>
            <p className="start-playing">Start Playing</p>
        </div>

        <div className="menu-item">
            <img src={LogOut} alt="" />
            <p>Log Out</p>
        </div>
    </div>
  )
}

export default SideBar
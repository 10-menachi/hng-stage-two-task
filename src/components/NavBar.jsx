import Logo from '../assets/tv.png'
import { AiOutlineSearch } from 'react-icons/ai'
import Menu from '../assets/Menu.png'

const NavBar = () => {
  return (
    <div className='nav-bar'>
        <div className="logo">
            <img src={Logo} alt="Logo" />
            <h3>MovieBox</h3>
        </div>
        <div className="search-bar">
            <input type="text" placeholder="What do you want to watch?" />
            <AiOutlineSearch className='search-icon' />
        </div>
        <div className="buttons">
            <p>Sign in</p>
            <img src={Menu} alt="Menu" />
        </div>
    </div>
  )
}

export default NavBar
import { AiOutlineSearch } from 'react-icons/ai'
import Menu from '../assets/Menu.png'
import Logo from './Logo'

const NavBar = () => {
  return (
    <div className='nav-bar'>
        <Logo />
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
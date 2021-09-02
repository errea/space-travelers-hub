import { NavLink } from 'react-router-dom';
import { ReactComponent as Logo } from '../logo.svg';
import './Header.css';

const Header = () => (
  <header className="main-header">
    <Logo className="logo-img" />
    <h1 className="logo-text">{`Space Travelers${String.fromCharCode(39)} Hub`}</h1>
    <nav className="main-nav">
      <ul>
        <li>
          <NavLink exact to="/">Rockets</NavLink>
        </li>
        <li>
          <NavLink exact to="/missions">Missions</NavLink>
        </li>
        <span>|</span>
        <li>
          <NavLink exact to="/profile">My Profile</NavLink>
        </li>
      </ul>
    </nav>
  </header>
);

export default Header;

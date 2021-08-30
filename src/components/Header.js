import { NavLink } from 'react-router-dom';
import { ReactComponent as Logo } from '../logo.svg';

const Header = () => (
  <header className="main-header">
    <NavLink to="/">
      <Logo className="logo-img" />
    </NavLink>
    <h1 className="logo-text">{`Space Travelers${String.fromCharCode(39)} Hub`}</h1>
    <nav />
  </header>
);

export default Header;

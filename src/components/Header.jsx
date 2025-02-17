import { Link } from "react-router";
import Logo from "../assets/img/platterrushlogo.png";
import { useState } from "react";

const Title = () => {
  return (
    <a>
      <img src={Logo} alt="logo" className="logo" />
    </a>
  );
};

const Header = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  return (
    <div className="header">
      <Title />
      <div className="nav-items">
        <ul>
          <Link to="/">
            <li key="home">Home</li>
          </Link>
          <Link to="/about">
            <li key="about">About</li>
          </Link>
          <Link to="/contact">
            <li key="contact">Contact</li>
          </Link>

          <li key="cart">Cart</li>
        </ul>
      </div>
      {isLoggedIn ? (
        <button onClick={() => setIsLoggedIn(false)}>Logout</button>
      ) : (
        <button onClick={() => setIsLoggedIn(true)}>Login</button>
      )}
    </div>
  );
};

export default Header;

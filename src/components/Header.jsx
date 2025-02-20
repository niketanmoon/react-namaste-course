import { Link } from "react-router";
import Logo from "../assets/img/platterrushlogo.png";
import { useState } from "react";
import useOnlineStatus from "../utils/useOnlineStatus";

const Title = () => {
  return (
    <a>
      <img src={Logo} alt="logo" className="logo" />
    </a>
  );
};

const Header = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const onlineStatus = useOnlineStatus();
  return (
    <div className="header">
      <Title />
      <div className="nav-items">
        <ul>
          <li>Online Status: {onlineStatus ? "✅" : "🔴"}</li>
          <li key="home">
            <Link to="/">Home</Link>
          </li>

          <li key="about">
            <Link to="/about">About</Link>
          </li>

          <li key="contact">
            <Link to="/contact">Contact</Link>
          </li>

          <li key="cart">Cart</li>
          <li key="grocery">
            <Link to="/grocery">Grocery</Link>
          </li>
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

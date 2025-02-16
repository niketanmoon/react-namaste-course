import Logo from "../../platterrushlogo.png";
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
          <li key="home">Home</li>
          <li key="about">About</li>
          <li key="contact">Contact</li>
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

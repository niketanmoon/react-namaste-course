import Logo from "../../platterrushlogo.png";
const Title = () => {
  return (
    <a>
      <img src={Logo} alt="logo" className="logo" />;
    </a>
  );
};

const Header = () => {
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
    </div>
  );
};

export default Header;

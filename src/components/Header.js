import "./Header.css";
import logo from "./download-removebg-preview (10).png";
import search from "./download-removebg-preview (6).png";
import { Link } from "react-router-dom";

function Header() {
  return (
    <header className="header">
      <div className="logo">
        <img src={logo} alt="logo" />
        <p>LuxShade</p>
      </div>

      <nav className="navbar">
        <Link to="/">HOME</Link>
        <Link to="/sunglasses">SUNGLASSES</Link>
        <Link to="/eyeglasses">EYEGLASSES</Link>
        <Link to="/lens">AI GLASSES </Link>
      </nav>
      <div className="search">
        <img src={search} alt="Search" />
      </div>
    </header>
  );
}
export default Header;

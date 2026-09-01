import "./Header.css";
import logo from "../assets/ChatGPT_Image_May_20__2026__03_49_53_PM-removebg-preview.png";
import cartIcon from "../assets/OIP-removebg-preview.png";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import Orders from "../Pages/Orders";


function Header({
  onLoginClick,
  onRegisterClick,
  user,
  onLogout,
  cart,
  setCartOpen,
}) {
  const [showHeader, setShowHeader] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const controlHeader = () => {
      if (window.scrollY > lastScrollY) {
        setShowHeader(false);
      } else {
        setShowHeader(true);
      }
      setLastScrollY(window.scrollY);
    };

    window.addEventListener("scroll", controlHeader);

    return () => {
      window.removeEventListener("scroll", controlHeader);
    };
  }, [lastScrollY]);

  return (
    <header className={showHeader ? "header" : "header hidden"}>
      <div className="logo">
        <Link to="/">
          <img src={logo} alt="Logo" />
        </Link>
      </div>

      <nav className="navbar">
        <Link to="/">HOME</Link>
        <Link to="/sunglasses">SUNGLASSES</Link>
        <Link to="/eyeglasses">EYEGLASSES</Link>
        {/* <Link to="/lens">HEARING AID</Link> */}
        {user && <Link to="/orders">MY ORDERS</Link>}
      </nav>

      <div className="buttons">
        {!user ? (
          <>
            <button className="loginsbtn" onClick={onLoginClick}>
              Login
            </button>

            <button className="registersbtn" onClick={onRegisterClick}>
              Register
            </button>
          </>
        ) : (
          <>
            <span
              style={{
                color: "white",
                fontWeight: "bold",
                marginRight: "10px",
              }}
            >
             
            </span>

            <button className="loginsbtn" onClick={onLogout}>
              Logout
            </button>
          </>
        )}

        <div className="cart" onClick={() => setCartOpen(true)}>
          <img src={cartIcon} alt="cart" className="cart-icon" />

          <span className="cart-count">
            {cart.reduce((total, item) => total + item.quantity, 0)}
          </span>
        </div>
      </div>
    </header>
  );
}

export default Header;

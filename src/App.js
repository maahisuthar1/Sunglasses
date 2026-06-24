import "./App.css";
import { Link, useLocation } from "react-router-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";
import Login from "./components/login";
import Header from "./components/Header";
import Home from "./Pages/Home";
import Sunglasses from "./Pages/Sunglasses";
import Eyeglasses from "./Pages/Eyeglasses";
import Lens from "./Pages/lens";
import Footer from "./components/Footer";
import BlueSunglasses from "./Pages/BlueSunglasses";
import BrownSunglasses from "./Pages/BrownSunglasses";
import PurpleSunglasses from "./Pages/PurpleSunglasses";
import WhiteSunglasses from "./Pages/WhiteSunglasses";
import BlackSunglasses from "./Pages/BlackSunglasses";
import Pay from "./Pages/Pay";
import UpiPayment from "./Pages/UpiPayment";
import CardPayment from "./Pages/CardPayment";
import NetBankingPayment from "./Pages/NetBankingPayment";
import CODPayment from "./Pages/CODPayment";
import GoToTop from "./Pages/GoToTop";

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [authMode, setAuthMode] = useState("login");
  const [user, setUser] = useState(null);
  const [cart, setCart] = useState([]);
  const [cartOpen, setCartOpen] = useState(false);

  const addToCart = (product) => {
    setCart((prevCart) => {
      const existing = prevCart.find((item) => item.id === product.id);

      if (existing) {
        return prevCart.map((item) =>
          item.id === product.id
            ? {
                ...item,
                quantity: item.quantity + 1,
              }
            : item,
        );
      }
      return [
        ...prevCart,
        {
          ...product,
          quantity: 1,
        },
      ];
    });
  };
  const incrementQuantity = (id) => {
    setCart((prevCart) =>
      prevCart.map((item) =>
        item.id === id
          ? {
              ...item,
              quantity: item.quantity + 1,
            }
          : item,
      ),
    );
  };
  const decrementQuantity = (id) => {
    setCart((prevCart) =>
      prevCart
        .map((item) =>
          item.id === id
            ? {
                ...item,
                quantity: item.quantity - 1,
              }
            : item,
        )
        .filter((item) => item.quantity > 0),
    );
  };
  useEffect(() => {
    const savedUser = JSON.parse(localStorage.getItem("currentUser"));

    if (savedUser) {
      setUser(savedUser);
    }
  }, []);

  const openAuth = (mode) => {
    setAuthMode(mode);
    setIsModalOpen(true);
  };

  const handleAuth = (userData) => {
    setUser(userData);
  };

  const handleLogout = () => {
    localStorage.removeItem("currentUser");
    setUser(null);
  };

  const toggleAuthMode = () => {
    setAuthMode((prev) => (prev === "login" ? "register" : "login"));
  };

  const removeFromCart = (id) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== id));
  };

  const subtotal = cart.reduce(
    (total, item) => total + item.price * item.quantity,
    0,
  );

  const shipping = subtotal > 2000 ? 0 : 99;

  const tax = subtotal * 0.18;

  const total = subtotal + shipping + tax;
  useEffect(() => {
    if (cartOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [cartOpen]);

  const ScrollToTop = () => {
    const { pathname } = useLocation();

    useEffect(() => {
      window.scroll(0, 0);
    }, [pathname]);
    return null;
  };

  return (
    <BrowserRouter>
      <ScrollToTop />
      <Header
        onLoginClick={() => openAuth("login")}
        onRegisterClick={() => openAuth("register")}
        user={user}
        onLogout={handleLogout}
        cart={cart}
        setCartOpen={setCartOpen}
      />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/sunglasses"
          element={
            <Sunglasses addToCart={addToCart} setCartOpen={setCartOpen} />
          }
        />
        <Route
          path="/eyeglasses"
          element={
            <Eyeglasses addToCart={addToCart} setCartOpen={setCartOpen} />
          }
        />
        <Route
          path="/Pay"
          element={
            <Pay
              cart={cart}
              removeFromCart={removeFromCart}
              decrementQuantity={decrementQuantity}
              incrementQuantity={incrementQuantity}
            />
          }
        />
        <Route path="/lens" element={<Lens />} />
        <Route path="/BlueSunglasses" element={<BlueSunglasses />} />
        <Route path="/BrownSunglasses" element={<BrownSunglasses />} />
        <Route path="/PurpleSunglasses" element={<PurpleSunglasses />} />
        <Route path="/WhiteSunglasses" element={<WhiteSunglasses />} />
        <Route path="/BlackSunglasses" element={<BlackSunglasses />} />

        <Route path="/upi-payment" element={<UpiPayment />} />

        <Route path="/card-payment" element={<CardPayment />} />

        <Route path="/netbanking-payment" element={<NetBankingPayment />} />

        <Route path="/cod-payment" element={<CODPayment />} />
      </Routes>

      <Login
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        mode={authMode}
        onLogin={handleAuth}
        onSwitchMode={toggleAuthMode}
      />

      <GoToTop />
      <Footer />
      {cartOpen && (
        <div className="cart-overlay" onClick={() => setCartOpen(false)}>
          <div className="cart-drawer" onClick={(e) => e.stopPropagation()}>
            <button onClick={() => setCartOpen(false)}>╳</button>

            <h2 className="cart-title">Your Cart</h2>

            {cart.length === 0 ? (
              <p>Cart is empty</p>
            ) : (
              cart.map((item) => (
                <div className="cart-detail" key={item.id}>
                  <button
                    className="remove-items"
                    onClick={() => removeFromCart(item.id)}
                  >
                    💔
                  </button>

                  <img src={item.image} alt={item.name} />

                  <div className="cart-info">
                    <p className="product-name">{item.name}</p>

                    <p className="cart-price">MRP = ₹{item.price}</p>

                    <div className="cart-quantity">
                      <button
                        className="minus"
                        onClick={() => decrementQuantity(item.id)}
                      >
                        ~
                      </button>

                      <span>{item.quantity}</span>

                      <button
                        className="plus"
                        onClick={() => incrementQuantity(item.id)}
                      >
                        +
                      </button>
                    </div>
                  </div>
                </div>
              ))
            )}

            <div className="cart-summary">
              <div className="summary-row">
                <span>Subtotal</span>
                <span>₹{subtotal.toFixed(2)}</span>
              </div>

              <div className="summary-row">
                <span>Shipping</span>
                <span>{shipping === 0 ? "Free" : `₹${shipping}`}</span>
              </div>

              <div className="summary-row">
                <span>GST (18%)</span>
                <span>₹{tax.toFixed(2)}</span>
              </div>

              <div className="summary-divider"></div>

              <div className="summary-row total-row">
                <span>Total</span>
                <span>₹{total.toFixed(2)}</span>
              </div>
            </div>
            <Link
              className="checkout"
              to="/Pay"
              onClick={() => setCartOpen(false)}
            >
              Proceed to Checkout ➱
            </Link>
            <div className="policys">
              <span>🔒Security</span>
              <span>↺ 7-Day Returns</span>
              <span>🛡️100% Authentic</span>
            </div>
          </div>
        </div>
      )}
    </BrowserRouter>
  );
}

export default App;

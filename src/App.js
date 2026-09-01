import "./App.css";
import { Link, useLocation } from "react-router-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
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
import Orders from "./Pages/Orders";
import OrderDetails from "./Pages/OrderDetails";

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [authMode, setAuthMode] = useState("login");
  const [user, setUser] = useState(null);
  const [cart, setCart] = useState([]);
  const [cartOpen, setCartOpen] = useState(false);

  // const addToCart = (product) => {
  //   setCart((prevCart) => {
  //     const existing = prevCart.find((item) => item.id === product.id);

  //     if (existing) {
  //       return prevCart.map((item) =>
  //         item.id === product.id
  //           ? {
  //               ...item,
  //               quantity: item.quantity + 1,
  //             }
  //           : item,
  //       );
  //     }
  //     return [
  //       ...prevCart,
  //       {
  //         ...product,
  //         quantity: 1,
  //       },
  //     ];
  //   });
  // };

  const addToCart = async (product) => {

    console.log("Button clicked");
  console.log(product);
  
    const token = localStorage.getItem("token");

    // console.log(product);
    console.log("Token being sent:", token);


    try {
      const res = await axios.post(
        "https://sungalsses-backend.onrender.com/api/cart",
        {
          productId: product._id,
          quantity: 1,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        },
      );

      console.log(res.data);

      setCart((prevCart) => {
        const existing = prevCart.find((item) => item._id === product._id);

        if (existing) {
          return prevCart.map((item) =>
            item._id === product._id
              ? {
                  ...item,
                  quantity: item.quantity + 1,
                }
              : item,
          );
        }

        return [...prevCart, { ...product, quantity: 1 }];
      });
    } catch (err) {
      console.log("Status:", err.response?.status);
      console.log("Data:", err.response?.data);
    }
  };

  const removeFromCart = async (id) => {
    try {
      const token = localStorage.getItem("token");

      await axios.delete(
        `https://sungalsses-backend.onrender.com/api/cart/${id}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        },
      );

      // remove from UI immediately
      setCart((prev) => prev.filter((item) => item._id !== id));
    } catch (err) {
      console.log(err.response?.data || err.message);
    }
  };

 const incrementQuantity = async (productId) => {
  const token = localStorage.getItem("token");

  const item = cart.find((p) => p._id === productId);

  try {
    await axios.patch(
      `https://sungalsses-backend.onrender.com/api/cart/${productId}`,
      {
        quantity: item.quantity + 1,
      },
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );

    setCart((prev) =>
      prev.map((item) =>
        item._id === productId
          ? { ...item, quantity: item.quantity + 1 }
          : item
      )
    );

  } catch (err) {
    console.log(err.response?.data);
  }
};
  const decrementQuantity = async (id) => {
    try {
      const token = localStorage.getItem("token");

      const item = cart.find((p) => p._id === id);
      if (!item) return;

      const newQty = item.quantity - 1;

      await axios.patch(
        `https://sungalsses-backend.onrender.com/api/cart/${id}`,
        { quantity: newQty },
        { headers: { Authorization: `Bearer ${token}` } },
      );

      setCart((prev) =>
        prev
          .map((item) =>
            item._id === id ? { ...item, quantity: newQty } : item,
          )
          .filter((item) => item.quantity > 0),
      );
    } catch (err) {
      console.log(err.response?.data || err.message);
    }
  };
  useEffect(() => {
    const userData = localStorage.getItem("currentUser");

    if (userData && userData !== "undefined") {
      setUser(JSON.parse(userData));
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

  const [products, setProducts] = useState([]);
  const [colors, setColors] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const productRes = await axios.get(
          "https://sungalsses-backend.onrender.com/api/products",
        );
        setProducts(productRes.data);

        const colorRes = await fetch(
          "https://sungalsses-backend.onrender.com/api/colors",
        );
        const colorData = await colorRes.json();
        setColors(colorData);
      } catch (err) {
        console.error(err);
      }
    };

    fetchData();
  }, []);
    
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
            <Sunglasses
              addToCart={addToCart}
              setCartOpen={setCartOpen}
              removeFromCart={removeFromCart}
              incrementQuantity={incrementQuantity}
              decrementQuantity={decrementQuantity}
            />
          }
        />
        <Route
          path="/eyeglasses"
          element={
            <Eyeglasses
              addToCart={addToCart}
              setCartOpen={setCartOpen}
              removeFromCart={removeFromCart}
            />
          }
        />
        <Route
          path="/Pay"
          element={
            <Pay
              cart={cart}
              addToCart={addToCart}
              removeFromCart={removeFromCart}
              decrementQuantity={decrementQuantity}
              incrementQuantity={incrementQuantity}
            />
          }
        />
        <Route path="/lens" element={<Lens />} />
        <Route
          path="/BlueSunglasses"
          element={<BlueSunglasses removeFromCart={removeFromCart} />}
        />
        <Route
          path="/BrownSunglasses"
          element={<BrownSunglasses removeFromCart={removeFromCart} />}
        />
        <Route
          path="/PurpleSunglasses"
          element={<PurpleSunglasses removeFromCart={removeFromCart} />}
        />
        <Route
          path="/WhiteSunglasses"
          element={<WhiteSunglasses removeFromCart={removeFromCart} />}
        />
        <Route
          path="/BlackSunglasses"
          element={<BlackSunglasses removeFromCart={removeFromCart} />}
        />

        <Route path="/upi-payment" element={<UpiPayment />} />

        <Route path="/card-payment" element={<CardPayment />} />

        <Route path="/netbanking-payment" element={<NetBankingPayment />} />

        <Route path="/cod-payment" element={<CODPayment />} />
        <Route path="/orders" element={<Orders />} />
        <Route
  path="/order/:id"
  element={<OrderDetails />}
/>
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
              cart.map((product) => (
                <div className="cart-detail" key={product._id}>
                  <button
                    className="remove-items"
                    onClick={() => removeFromCart(product._id)}
                  >
                    💔
                  </button>

                  <img
                    src={`https://sungalsses-backend.onrender.com/${product.image}`}
                    alt={product.name}
                  />

                  <div className="cart-info">
                    <p className="product-name">{product.name}</p>

                    <p className="cart-price">MRP = ₹{product.price}</p>

                    <div className="cart-quantity">
                      <button
                        className="minus"
                        onClick={() => decrementQuantity(product._id)}
                      >
                        ~
                      </button>

                      <span>{product.quantity}</span>

                      <button
                        className="plus"
                        onClick={() => incrementQuantity(product._id)}
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

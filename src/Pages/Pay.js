import "./Pay.css";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Gpay from "./Screenshot_2026-06-10_133558-removebg-preview.png";
import Phonepe from "./Screenshot_2026-06-10_133712-removebg-preview.png";
import Paytm from "./Screenshot_2026-06-10_133807-removebg-preview.png";
import Visa from "./3b38ef8f2bf7505815dbbe732d838ddc-removebg-preview.png";
import Rupay from "./download-removebg-preview (7).png";
import Bank from "./download-removebg-preview (8).png";
import COD from "./download-removebg-preview (9).png";

function Pay({
  cart,
  cartOpen,
  removeFromCart,
  decrementQuantity,
  incrementQuantity,
}) {
  const subtotal = cart.reduce(
    (total, item) => total + item.price * item.quantity,
    0,
  );

  const shipping = subtotal > 2000 ? 0 : 99;
  const tax = subtotal * 0.18;
  const ttl = subtotal + shipping + tax;
  const total = Number(ttl.toFixed(2));

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

  const [paymentMethod, setPaymentMethod] = useState("");
  const navigate = useNavigate();
  // const handlePay = () => {
  //   const rawUser = localStorage.getItem("currentUser");
  //   console.log("currentUser from storage:", rawUser);

  //   const currentUser =
  //     rawUser && rawUser !== "undefined" ? JSON.parse(rawUser) : null;

  //   if (!currentUser) {
  //     alert("Please login first");
  //     return;
  //   }
  //   switch (paymentMethod) {
  //     case "UPI":
  //       navigate("/upi-payment", {
  //         state: {
  //           total,
  //           subtotal,
  //           shipping,
  //           tax,
  //           cart,
  //           paymentMethod,
  //         },
  //       });
  //       break;

  //     case "Card":
  //       navigate("/card-payment");
  //       break;

  //     case "NetBanking":
  //       navigate("/netbanking-payment");
  //       break;

  //     case "COD":
  //       navigate("/cod-payment");
  //       break;

  //     default:
  //       alert("Please select a payment method");
  //   }
  // };

  const handlePay = async () => {
  const rawUser = localStorage.getItem("currentUser");

  const currentUser =
    rawUser && rawUser !== "undefined"
      ? JSON.parse(rawUser)
      : null;

  if (!currentUser) {
    alert("Please login first");
    return;
  }

  if (!paymentMethod) {
    alert("Please select a payment method");
    return;
  }

  try {
    const token = localStorage.getItem("token");

    const response = await axios.post(
      "https://sungalsses-backend.onrender.com/api/checkout",
      {
        paymentMethod: paymentMethod,
      },
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );

    console.log("Order created:", response.data);

    const orderId = response.data.order._id;

    switch (paymentMethod) {
      case "UPI":
        navigate("/upi-payment", {
          state: {
            orderId,
            total,
            subtotal,
            shipping,
            tax,
            cart,
            paymentMethod,
          },
        });
        break;

      case "Card":
        navigate("/card-payment", {
          state: {
            orderId,
            total,
            paymentMethod,
          },
        });
        break;

      case "NetBanking":
        navigate("/netbanking-payment", {
          state: {
            orderId,
            total,
            paymentMethod,
          },
        });
        break;

      case "COD":
        navigate("/cod-payment", {
          state: {
            orderId,
            total,
            paymentMethod,
          },
        });
        break;

      default:
        alert("Invalid payment method");
    }
  } catch (error) {
    console.log(
      "Checkout error:",
      error.response?.data || error.message
    );

    alert(
      error.response?.data?.message ||
        "Unable to create order"
    );
  }
};

  const [, setProducts] = useState([]);
  const [, setColors] = useState([]);
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






// const handlePayment = async () => {
//   try {
//     await axios.post(
//       "https://yourserver/api/orders",
//       {
//         paymentMethod: "UPI",
//       }
//     );
//   } catch (err) {
//     console.log(err);
//   }
// };






  return (
    <>
      <div className="pay">
        <div className="sum-it-up">
          <div className="thecart">
            {cart.length === 0 ? (
              <p>Cart is empty</p>
            ) : (
              cart.map((product) => (
                <div className="carts-details" key={product._id}>
                  <img
                    src={`https://sungalsses-backend.onrender.com/${product.image}`}
                    alt={product.name}
                  />

                  

                  <div className="cart-infos">
                    <p className="product-names">{product.name}</p>

                    <p className="cart-prices">Price = ₹{product.price}</p>

                    <div className="cart-quantitys">
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
                  <button
                    className="removes-items"
                    onClick={() => removeFromCart(product._id)}
                  >
                    ✕
                  </button>
                </div>
              ))
            )}
          </div>
          <div className="summary-cards">
            <p className="order">Order Summary</p>
            <div className="summary-rows">
              <span>Subtotal</span>
              <span>₹{subtotal.toFixed(2)}</span>
            </div>

            <div className="summary-rows">
              <span>Shipping</span>
              <span>{shipping === 0 ? "Free" : `₹${shipping}`}</span>
            </div>

            <div className="summary-rows">
              <span>GST (18%)</span>
              <span>₹{tax.toFixed(2)}</span>
            </div>

            <div className="summary-dividers"></div>

            <div className="summary-rows total-rows">
              <div className="total">
                <span>Total</span>
                <span>₹{total.toFixed(2)}</span>
              </div>
            </div>
          </div>
        </div>

        <div className="payment-panel">
          <div className="blur-text">
            <p>Choose a Payment Method</p>
            <p>Review your order before payment</p>

            <p>
              Please verify your items and billing details before proceeding to
              payment.
            </p>
          </div>
          <div className="payment">
            <label>
              <input
                type="radio"
                name="payment"
                value="UPI"
                onChange={(e) => setPaymentMethod(e.target.value)}
              />
              <div className="pay-option">
                <div>
                  <p>UPI</p>
                  <p>Pay using any UPI app</p>
                </div>
                <div className="pay-pic">
                  <img src={Gpay} alt="gpay" />
                  <img src={Phonepe} alt="phonepe" />
                  <img src={Paytm} alt="paytm" />
                </div>
              </div>
            </label>

            <label>
              <input
                type="radio"
                name="payment"
                value="Card"
                onChange={(e) => setPaymentMethod(e.target.value)}
              />
              <div className="pay-option">
                <div>
                  <p>Credit / Debit Card</p>
                  <p>Pay securely using your card</p>
                </div>
                <div className="pay-pic">
                  <img src={Visa} alt="visa" />
                  <img src={Rupay} alt="rupay" />
                </div>
              </div>
            </label>

            <label>
              <input
                type="radio"
                name="payment"
                value="NetBanking"
                onChange={(e) => setPaymentMethod(e.target.value)}
              />
              <div className="pay-option">
                <div>
                  <p>Net Banking</p>
                  <p>Pay using your bank account</p>
                </div>
                <div className="pay-pic">
                  <img src={Bank} alt="bank" />
                </div>
              </div>
            </label>

            <label>
              <input
                type="radio"
                name="payment"
                value="COD"
                onChange={(e) => setPaymentMethod(e.target.value)}
              />
              <div className="pay-option">
                <div>
                  <p>Cash on Delivery</p>
                  <p>Pay using popular wallets</p>
                </div>
                <div className="pay-pic">
                  <img src={COD} alt="bank" />
                </div>
              </div>
            </label>
            <div className="secure">
              🔒 Your payment is secured with 256-bit SSL encryption
            </div>
            <button onClick={handlePay}>Pay ₹{total}</button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Pay;

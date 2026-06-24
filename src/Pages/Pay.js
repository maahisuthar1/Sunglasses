import "./Pay.css";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
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

  const [paymentMethod, setPaymentMethod] = useState("");
  const navigate = useNavigate();
  const handlePay = () => {
    const currentUser = JSON.parse(localStorage.getItem("currentUser"));

    if (!currentUser) {
      alert("Please login first");
      return;
    }
    switch (paymentMethod) {
      case "UPI":
        navigate("/upi-payment", {
          state: {
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
        navigate("/card-payment");
        break;

      case "NetBanking":
        navigate("/netbanking-payment");
        break;

      case "COD":
        navigate("/cod-payment");
        break;

      default:
        alert("Please select a payment method");
    }
  };

  return (
    <>
      <div className="pay">
        <div className="sum-it-up">
          <div className="thecart">
            {cart.length === 0 ? (
              <p>Cart is empty</p>
            ) : (
              cart.map((item) => (
                <div className="carts-details" key={item.id}>
                  <img src={item.image} alt={item.name} />

                  <button
                    className="removes-items"
                    onClick={() => removeFromCart(item.id)}
                  >
                    ✕
                  </button>

                  <div className="cart-infos">
                    <p className="product-names">{item.name}</p>

                    <p className="cart-prices">Price = ₹{item.price}</p>

                    <div className="cart-quantitys">
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

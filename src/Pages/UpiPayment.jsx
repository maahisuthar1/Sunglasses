import "./UpiPayment.css";
import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Gpay from "./Screenshot_2026-06-10_133558-removebg-preview.png";
import Phonepe from "./Screenshot_2026-06-10_133712-removebg-preview.png";
import Paytm from "./Screenshot_2026-06-10_133807-removebg-preview.png";
import QR from "./WhatsApp Image 2026-06-12 at 1.48.54 PM.jpeg";
import Extra from "./Screenshot 2026-06-12 151852.png";

function UpiPayment() {
  const location = useLocation();
  const { total, cart, paymentMethod } = location.state || {};
  const [upiId, setUpiId] = useState("");
  const navigate = useNavigate();
  // const [isProcessing, setIsProcessing] = useState(false);
  const [status, setStatus] = useState("idle");

  const handleUpiPayment = () => {
    if (status !== "idle") return;
    const currentUser = JSON.parse(localStorage.getItem("currentUser"));

    if (!currentUser) {
      alert("Please login first");
      return;
    }
    if (!upiId.trim()) {
      alert("Please enter your UPI ID");
      return;
    }
    setStatus("processing");

    //  setIsProcessing(true);
    const items = cart
      .map((item) => `${item.name} x${item.quantity}`)
      .join(", ");

    const url =
      "https://script.google.com/macros/s/AKfycbykdUA9M3lMSKgfOqSY-rOWMR-GLSFU_5GJRq4osZaHcL3q0n_-BKc6Rb2McQIK4plW/exec";

    fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body:
        `Name=${encodeURIComponent(currentUser.name)}` +
        `&Email=${encodeURIComponent(currentUser.email)}` +
        `&Items=${encodeURIComponent(items)}` +
        `&Total=${encodeURIComponent(total)}` +
        `&PaymentMethod=${encodeURIComponent(paymentMethod)}` +
        `&UPI=${encodeURIComponent(upiId)}`,
    })
      .then((res) => res.text())
      .then((data) => {
        setStatus("success");

        alert("Payment Successful ✅");

        setTimeout(() => {
          navigate("/");
        }, 1000);
      })
      .catch((err) => {
        console.log(err);
        alert("Failed to save payment");
        setStatus("idle");
      });
  };

  return (
    <>
      <div className="upi-page">
        <div className="upiPay">
          <div className="top-text">
            <p> UPI Payment</p>
            <p>Pay Securely using UPI Payment</p>
            <div className="divider"></div>
            <p>Preferred UPI Apps</p>
          </div>

          <div className="app-logo">
            <div className="gpay">
              <img src={Gpay} alt="gpay" />
              <p>Gpay</p>
            </div>
            <div className="phonepe">
              <img src={Phonepe} alt="phonepe" />
              <p>Phonepe</p>
            </div>
            <div className="paytm">
              <img src={Paytm} alt="paytm" />
              <p>Paytm</p>
            </div>
          </div>

          <div className="using-id">
            <p>Pay with UPI ID</p>
            <p>Enter Your UPI ID</p>
            <input
              type="text"
              placeholder="example@upi"
              value={upiId}
              onChange={(e) => setUpiId(e.target.value)}
            />
            <p>
              Example: yourname@okhdfcbank || yourname@oksbi || yourname@paytm
            </p>
            <div className="or">
              <p>
                ------------------------------------------------------------
              </p>
              <p>OR</p>
              <p>
                -------------------------------------------------------------
              </p>
            </div>
            <div className="using-QR">
              <div className="QR-pic">
                <p>Scan QR Code to pay</p>
                <p>Open any UPI app and scan QR Code</p>
                <img src={QR} alt="qr" />
              </div>
              <div className="qr-inst">
                1. Open any UPI app <br />
                2. Tap on 'Scan QR Code'
                <br />
                3. Scan this QR Code
                <br />
                4. Enter amount and pay
              </div>
            </div>
            <button
              className="pay-now"
              onClick={handleUpiPayment}
              disabled={status !== "idle"}
            >
              {status === "processing"
                ? "Processing..."
                : status === "success"
                  ? "Payment Successful ✓"
                  : `Pay ₹${total}`}
            </button>
          </div>
        </div>
        <div className="extra">
          <img src={Extra} alt="extra" />
        </div>
      </div>
    </>
  );
}

export default UpiPayment;

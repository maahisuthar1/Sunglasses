import "./CardPayment.css";
import Visa from "./3b38ef8f2bf7505815dbbe732d838ddc-removebg-preview.png";
import Rupay from "./download-removebg-preview (7).png";
import { useLocation, useNavigate } from "react-router-dom";
import axios from "axios";

function CardPayment() {

  const location = useLocation();
const navigate = useNavigate();

const { orderId, total } = location.state || {};


const handleCardPayment = async () => {
  const token = localStorage.getItem("token");

  if (!token) {
    alert("Please login first");
    return;
  }

  if (!orderId) {
    alert("Order ID is missing");
    return;
  }

  try {
    await axios.patch(
      `https://sungalsses-backend.onrender.com/api/order/${orderId}/pay`,
      {
        paymentMethod: "Card",
      },
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );

    alert("Payment Successful ✅");
    navigate("/");
  } catch (error) {
    console.log(error.response?.data || error.message);

    alert(
      error.response?.data?.message ||
        "Payment failed"
    );
  }
};
  return (
    <>
    <div className="cardpay">
      <div className="cardoptions">
        <h1>Card Payment</h1>
        <p>Accepted Cards</p>
      </div>
<div className="cardtypes">
        <img src={Visa} alt="visa" />
        <img src={Rupay} alt="rupay" />
        
      <div>
        <input type="text" placeholder="Card Number" />

        <input type="text" placeholder="Expiry Date" />

        <input type="password" placeholder="CVV" />

        <button onClick={handleCardPayment}>
  Pay ₹{total}
</button>
      </div>
      </div>
      </div>
    </>
  );
}

export default CardPayment;

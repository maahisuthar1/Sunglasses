import "./NetBankingPayment";
import { useLocation, useNavigate } from "react-router-dom";
import axios from "axios";

function NetBankingPayment() {

  const location = useLocation();
const navigate = useNavigate();

const { orderId, total } = location.state || {};

const handleNetBankingPayment = async () => {
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
        paymentMethod: "NetBanking",
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
    <div>
      <h1>Net Banking</h1>

      <select>
        <option>Select Bank</option>
        <option>SBI</option>
        <option>HDFC</option>
        <option>ICICI</option>
        <option>Axis</option>
      </select>

      <button onClick={handleNetBankingPayment}>
  Continue
</button>
    </div>
  );
}

export default NetBankingPayment;
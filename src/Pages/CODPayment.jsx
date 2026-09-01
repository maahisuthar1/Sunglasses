import "./CODPayment";
import { useLocation, useNavigate } from "react-router-dom";
import axios from "axios";

function CODPayment() {

const location = useLocation();
const navigate = useNavigate();

const { orderId } = location.state || {};

const handleCOD = async () => {
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
        paymentMethod: "COD",
      },
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );

    alert("Order Placed Successfully ✅");
    navigate("/");
  } catch (error) {
    console.log(error.response?.data || error.message);

    alert(
      error.response?.data?.message ||
        "Unable to place order"
    );
  }
};

  return (
    <div>
      <h1>Cash On Delivery</h1>

      <p>
        Payment will be collected when your order arrives.
      </p>

      <button onClick={handleCOD}>
  Place Order
</button>
    </div>
  );
}

export default CODPayment;
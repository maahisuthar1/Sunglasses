import "./Orders.css";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function Orders() {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchOrders = async () => {
      const token = localStorage.getItem("token");

      if (!token) {
        alert("Please login first");
        navigate("/");
        return;
      }

      try {
        const response = await axios.get(
          "https://sungalsses-backend.onrender.com/api/order",
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );

        setOrders(response.data.order);
      } catch (error) {
        console.log(
          "Error fetching orders:",
          error.response?.data || error.message
        );

        alert(
          error.response?.data?.message ||
            "Unable to fetch orders"
        );
      } finally {
        setLoading(false);
      }
    };

    fetchOrders();
  }, [navigate]);

  if (loading) {
    return <div>Loading orders...</div>;
  }

  return (
    <div className="orders-page">
      <h1>My Orders</h1>

      {orders.length === 0 ? (
        <div className="no-orders">
          <p>You haven't placed any orders yet.</p>
        </div>
      ) : (
        <div className="orders-list">
          {orders.map((order) => (
            <div className="order-card" key={order._id}>
              <div className="order-header">
                <div>
                  <p>Order ID</p>
                  <strong>{order._id}</strong>
                </div>

                <div>
                  <p>Order Status</p>
                  <strong>{order.orderStatus}</strong>
                </div>

                <div>
                  <p>Payment</p>
                  <strong>{order.paymentStatus}</strong>
                </div>
              </div>

              <div className="order-info">
                <p>
                  <strong>Items:</strong> {order.totalItems}
                </p>

                <p>
                  <strong>Total:</strong> ₹
                  {order.totalPrice}
                </p>

                <p>
                  <strong>Payment Method:</strong>{" "}
                  {order.paymentMethod}
                </p>
              </div>

              <button
  onClick={() =>
    navigate(`/order/${order._id}`, {
      state: { order },
    })
  }
>
  View Order
</button> 
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Orders;
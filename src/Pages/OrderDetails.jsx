import "./OrderDetails.css";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";

function OrderDetails() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [order, setOrder] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchOrder = async () => {
      const token = localStorage.getItem("token");

      if (!token) {
        alert("Please login first");
        navigate("/");
        return;
      }

      try {
        const response = await axios.get(
          `https://sungalsses-backend.onrender.com/api/order/${id}`,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          },
        );

        setOrder(response.data);
      } catch (error) {
        console.log(
          "Error fetching order:",
          error.response?.data || error.message,
        );

        alert(error.response?.data?.message || "Unable to fetch order");

        navigate("/orders");
      } finally {
        setLoading(false);
      }
    };

    fetchOrder();
  }, [id, navigate]);

  if (loading) {
    return <div>Loading order...</div>;
  }

  if (!order) {
    return <div>Order not found</div>;
  }

  const handleCancelOrder = async () => {
    const token = localStorage.getItem("token");

    if (!token) {
      alert("Please login first");
      navigate("/");
      return;
    }

    try {
      const response = await axios.patch(
        `https://sungalsses-backend.onrender.com/api/order/${id}/cancel`,
        {},
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        },
      );

      alert(response.data.message);

      setOrder(response.data.order);
    } catch (error) {
      console.log("Cancel order error:", error.response?.data || error.message);

      alert(error.response?.data?.message || "Unable to cancel order");
    }
  };




  const handleDownloadInvoice = async () => {
  const token = localStorage.getItem("token");

  if (!token) {
    alert("Please login first");
    navigate("/");
    return;
  }

  try {
    const response = await axios.get(
      `https://sungalsses-backend.onrender.com/api/order/${id}/invoice`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
        responseType: "blob",
      }
    );

    const blob = new Blob([response.data], {
      type: "application/pdf",
    });

    const url = window.URL.createObjectURL(blob);

    const link = document.createElement("a");
    link.href = url;
    link.download = `invoice-${id}.pdf`;

    document.body.appendChild(link);
    link.click();

    link.remove();
    window.URL.revokeObjectURL(url);
  } catch (error) {
    console.log(
      "Invoice error:",
      error.response?.data || error.message
    );

    alert("Unable to download invoice");
  }
};

  return (
    <div className="order-details-page">
      <button onClick={() => navigate("/orders")}>← Back to My Orders</button>

      <h1>Order Details</h1>

      <div className="order-details-card">
        <h2>Order ID</h2>
        <p>{order._id}</p>

        <p>
          <strong>Order Status:</strong> {order.orderStatus}
        </p>

        <p>
          <strong>Payment Status:</strong> {order.paymentStatus}
        </p>

        <p>
          <strong>Payment Method:</strong> {order.paymentMethod}
        </p>

        <hr />

        <h2>Items</h2>

        {order.items.map((item) => (
          <div className="order-item" key={item._id}>
            <div>
              <strong>{item.product.name}</strong>
              <p>Quantity: {item.quantity}</p>
            </div>

            <p>
              ₹{item.price} × {item.quantity}
            </p>
          </div>
        ))}

        <hr />

        <div className="order-total">
          <strong>Total Items:</strong>
          <span>{order.totalItems}</span>
        </div>

        <div className="order-total">
          <strong>Total:</strong>
          <span>₹{order.totalPrice}</span>
        </div>
      </div>



      {order.orderStatus !== "Cancelled" &&
 order.orderStatus !== "Shipped" &&
 order.orderStatus !== "Delivered" && (
  <button onClick={handleCancelOrder}>
    Cancel Order
  </button>
)}




<button onClick={handleDownloadInvoice}>
  Download Invoice
</button>   
    </div>
  );
}

export default OrderDetails;

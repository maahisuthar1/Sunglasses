import "./CardPayment";

function CardPayment() {
  return (
    <div>
      <h1>Card Payment</h1>

      <input
        type="text"
        placeholder="Card Number"
      />

      <input
        type="text"
        placeholder="Expiry Date"
      />

      <input
        type="password"
        placeholder="CVV"
      />

      <button>Pay Now</button>
    </div>
  );
}

export default CardPayment;
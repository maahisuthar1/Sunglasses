import "./NetBankingPayment";

function NetBankingPayment() {
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

      <button>Continue</button>
    </div>
  );
}

export default NetBankingPayment;
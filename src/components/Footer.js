import "./Footer.css";
import { useState } from "react";
import facebook from "../assets/Screenshot 2026-04-08 202829.png";
import insta from "../assets/Screenshot 2026-04-08 202847.png";
import x from "../assets/Screenshot 2026-04-08 203055.png";
import linkdin from "../assets/Screenshot 2026-04-08 202951.png";

function Footer() {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");

  return (
    <div className="footersection">
      <div className="Aboutus">
        <b>NEWSLETTER</b>
        <p>sign up to our newsletter to receive exclusive offers and updates</p>
        <input
          type="email"
          name="email"
          placeholder="Email Address"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
            setError("");
          }}
          required
        />
        {error && <div className="error-message">{error}</div>}

        <div className="footimg">
          <img src={facebook} className="fimg" alt="facebook"></img>
          <img src={insta} className="fimg" alt="insta"></img>
          <img src={x} className="fimg" alt=""></img>
          <img src={linkdin} className="fimg" alt=""></img>
        </div>
      </div>
      <div className="info">
        <div className="policy">
          <p>
            <b>Policy'S</b>
          </p>
          <p>Return/ Replacement</p>
          <p>Privacy Policy</p>
          <p>Terms of Use</p>
          <p>Warrenty Policy</p>
          <p>Cancelation Policy</p>
        </div>
        <div className="information">
          <p>
            <b>Information</b>
          </p>
          <p>Payment and Shipping</p>
          <p>Track Your Order</p>
          <p>Store Location</p>
          <p>Compliance</p>
        </div>
        <div className="NeedHelp">
          <p>
            <b>Need Help</b>
          </p>
          <p>Email</p>
          <p>Contact no.</p>
        </div>
      </div>
    </div>
  );
}
export default Footer;

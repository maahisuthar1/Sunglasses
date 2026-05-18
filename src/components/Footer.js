import "./Footer.css";
import facebook from "../assets/Screenshot 2026-04-08 202829.png";
import insta from "../assets/Screenshot 2026-04-08 202847.png";
import x from "../assets/Screenshot 2026-04-08 203055.png";
import linkdin from "../assets/Screenshot 2026-04-08 202951.png";

function Footer() {
  return (
    <div className="footersection">
      <div className="Aboutus">
        <b>About Us</b>
        <p>
          Sunglasses is a global eyewear brand commited to providing the latest
          fashion and eye-wear products in all possible price ranges. We offer a
          vast protfolio of premium products, and our main target is casual
          sunglasses for every day usage, but we also sell safety glasses,
          prescription lenses as well as fashion goggles
        </p>
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

import "./Home.css";
import Scroll from "../components/scroll";
import hero from "./Hero.jpg";
import bcreamf from "../assets/bcream f.png";
import bcreams from "../assets/bcream s.png";
import lbluef from "../assets/lblue f.png";
import lblues from "../assets/lblue s.png";
import whitef from "../assets/White f.png";
import whites from "../assets/white s.png";
import tigerf from "../assets/tiger f.png";
import tigers from "../assets/tiger s.png";
import greenf from "../assets/green f.png";
import greens from "../assets/green s.png";
import creamf from "../assets/cream f.png";
import creams from "../assets/cream s.png";
import spic from "../assets/wmremove-transformed-removebg-preview.png";
import sspic from "../assets/Untitled design (6).png";
import bluef from "../assets/blue f (3).png";
import blues from "../assets/blue f.png";
import Home1 from "./Untitled design (2).png";
import Home2 from "./home2.png";

function Home() {
  return (
    <>
      <div className="hero">
        <img src={hero} alt="hero" />
      </div>
      <div className="bestsection">
        <div className="cardstext">
          <h1 className="mcardstext">Best Sellers</h1>
          <p className="scardstext">Stay up to date on the hottest styles</p>
        </div>
        <div className="cards">
          <div className="container">
            <div className="new">
              <img src={bcreamf} className="front" alt="bcreamf" />
              <img src={bcreams} className="side" alt="bcreams" />
            </div>
            <div className="text">
              <p className="price">₹50</p>
              <p className="name">Timeless Noir</p>
            </div>
          </div>
          <div className="container">
            <div className="new">
              <img src={lbluef} className="front" alt="lbluef" />
              <img src={lblues} className="side" alt="lblues" />
            </div>
            <div className="text">
              <p className="price">₹500</p>
              <p className="name">Aqua gold</p>
            </div>
          </div>
          <div className="container">
            <div className="new">
              <img src={whitef} className="front" alt="whitef" />
              <img src={whites} className="side" alt="whites" />
            </div>
            <div className="text">
              <p className="price">₹500</p>
              <p className="name">White Cat</p>
            </div>
          </div>
          <div className="container">
            <div className="new">
              <img src={tigerf} className="front" alt="tigerf" />
              <img src={tigers} className="side" alt="tigers" />
            </div>
            <div className="text">
              <p className="price">₹500</p>
              <p className="name">Tiger</p>
            </div>
          </div>
          <div className="container">
            <div className="new">
              <img src={greenf} className="front" alt="greenf" />
              <img src={greens} className="side" alt="greens" />
            </div>
            <div className="text">
              <p className="price">₹500</p>
              <p className="name">Emerald Edge</p>
            </div>
          </div>
          <div className="container">
            <div className="new">
              <img src={creamf} className="front" alt="creamf" />
              <img src={creams} className="side" alt="creams" />
            </div>
            <div className="text">
              <p className="price">₹500</p>{" "}
              <p className="name">Champagne Luxe</p>
            </div>
          </div>
          <div className="container">
            <div className="new">
              {" "}
              <img src={bluef} className="front" alt="creamf" />
              <img src={blues} className="side" alt="creams" />
            </div>
            <div className="text">
              <p className="price">₹500</p>
              <p className="name">Royal</p>
            </div>
          </div>
        </div>
        <div className="midsection">
          <img className="spic" src={spic} alt="spic" />
          <div className="midtext">
            <p className="midhead">The 2025 Collection: Luminal Flow</p>
            <p className="midmid">Effortless Elegance, Perfectly Framed</p>
            <p className="midend">
              These sunglasses are crafted for versatility. The smooth, rounded
              shape complements a wide range of face types, while the subtle
              tortoiseshell accents introduce a touch of character without
              overwhelming your look. The lenses provide comfortable shading for
              bright days, making them as practical as they are stylish. Whether
              paired with casual wear or something more polished, they adapt
              effortlessly.
            </p>
          </div>
        </div>
        <div className="midsection2">
          <div className="midtext2">
            <p className="midhead2">The Art Of Seeing:</p>
            <p className="midmid2">And Being Seen</p>
            <p className="midend2">
              These sunglasses are crafted for versatility. The smooth, rounded
              shape complements a wide range of face types, while the subtle
              tortoiseshell accents introduce a touch of character without
              overwhelming your look. The lenses provide comfortable shading for
              bright days, making them as practical as they are stylish. Whether
              paired with casual wear or something more polished, they adapt
              effortlessly.
            </p>
          </div>
          <img className="sspic" src={sspic} alt="sspic" />
        </div>

        <div className="home">
          <img src={Home2} alt="Home1" />
        </div>
        <Scroll />
        <div className="home">
          <img src={Home1} alt="Home1" />
        </div>
      </div>

    </>
  );
}
export default Home;

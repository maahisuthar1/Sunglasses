import "./scroll.css"


import img1 from "./Screenshot 2026-03-20 222652.png";
import img2 from "./Screenshot 2026-03-20 233919.png";
import img3 from "./Screenshot 2026-03-20 221935.png";
import img4 from "./Screenshot 2026-03-20 222245.png";
import img5 from "./Screenshot 2026-03-20 233910.png";
import img6 from "./Screenshot 2026-03-20 221948.png";
import img7 from "./Screenshot 2026-03-20 222026.png";
import img8 from "./Screenshot 2026-03-20 222302.png";
import img9 from "./Screenshot 2026-03-20 222703.png";
import img10 from "./Screenshot 2026-03-20 223141.png";
import img11 from "./Screenshot 2026-03-20 233851.png";
import img12 from "./Screenshot 2026-03-20 223108.png";
import img13 from "./Screenshot 2026-03-20 233929.png";
import img14 from "./Screenshot 2026-03-20 222635.png";
import img15 from "./Screenshot 2026-03-20 221911.png";

import { useRef, useEffect } from "react";

function Scroll() 
{
  const scrollRef = useRef();

  useEffect(() => {
    const container = scrollRef.current;

    const interval = setInterval(() => {
      if (container) {
        container.scrollBy({
          left: 1, 
          behavior: "smooth",
        });
      }
    }, 15);

    return () => clearInterval(interval);
  }, []);


  return (
    <div className="brands-section">
      <h2 className="title">Featured Collection</h2>
      <p className="subtitle">Pick Your Style</p>


      <div className="scroll-container" ref={scrollRef}>
        
        <div className="card">
          <img src={img1} alt="" />
          <div className="overlay">
            <h3>ARISTO</h3>
            <p>Timeless Gold Frames</p>
          </div>
        </div>

        <div className="card">
          <img src={img2} alt="" />
          <div className="overlay">
            <h3>SEPIA</h3>
            <p>Bold & Lightweight</p>
          </div>
        </div>

        <div className="card">
          <img src={img3} alt="" />
          <div className="overlay">
            <h3>TOM FORD</h3>
            <p>Iconic Style</p>
          </div>
        </div>

        <div className="card">
          <img src={img4} alt="" />
          <div className="overlay">
            <h3>SILHOUETTE</h3>
            <p>Ultra Light</p>
          </div>
        </div>

        <div className="card">
          <img src={img5} alt="" />
          <div className="overlay">
            <h3>TITAN</h3>
            <p>Elegant Vision</p>
          </div>
        </div>
        <div className="card">
          <img src={img6} alt="" />
          <div className="overlay">
            <h3>TITAN</h3>
            <p>Elegant Vision</p>
          </div>
        </div>
        <div className="card">
          <img src={img7} alt="" />
          <div className="overlay">
            <h3>TITAN</h3>
            <p>Elegant Vision</p>
          </div>
        </div>
        <div className="card">
          <img src={img8} alt="" />
          <div className="overlay">
            <h3>TITAN</h3>
            <p>Elegant Vision</p>
          </div>
        </div>
        <div className="card">
          <img src={img9} alt="" />
          <div className="overlay">
            <h3>TITAN</h3>
            <p>Elegant Vision</p>
          </div>
        </div>
        <div className="card">
          <img src={img10} alt="" />
          <div className="overlay">
            <h3>TITAN</h3>
            <p>Elegant Vision</p>
          </div>
        </div>
        <div className="card">
          <img src={img11} alt="" />
          <div className="overlay">
            <h3>TITAN</h3>
            <p>Elegant Vision</p>
          </div>
        </div>
        <div className="card">
          <img src={img12} alt="" />
          <div className="overlay">
            <h3>TITAN</h3>
            <p>Elegant Vision</p>
          </div>
        </div>
        <div className="card">
          <img src={img13} alt="" />
          <div className="overlay">
            <h3>TITAN</h3>
            <p>Elegant Vision</p>
          </div>
        </div>
        <div className="card">
          <img src={img14} alt="" />
          <div className="overlay">
            <h3>TITAN</h3>
            <p>Elegant Vision</p>
          </div>
        </div>
        <div className="card">
          <img src={img15} alt="" />
          <div className="overlay">
            <h3>TITAN</h3>
            <p>Elegant Vision</p>
          </div>
        </div>

      </div>
    </div>
  );
}

export default Scroll;
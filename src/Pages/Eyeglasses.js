import "./Eyeglasses.css";
import { useState } from "react";
import { Link } from "react-router-dom";
import Hero from "./Eyeglasseshero.png";
import img1 from "../assets/Screenshot 2026-05-15 213434.png";
import img2 from "../assets/Screenshot 2026-05-15 213454.png";
import img3 from "../assets/Screenshot 2026-05-15 213719.png";
import img4 from "../assets/Screenshot 2026-05-15 213729.png";
import img5 from "../assets/Screenshot 2026-05-15 214005.png";
import img6 from "../assets/Screenshot 2026-05-15 214014.png";
import img7 from "../assets/Screenshot 2026-05-15 214217.png";
import img8 from "../assets/Screenshot 2026-05-15 214240.png";
import img9 from "../assets/Screenshot 2026-05-15 214303.png";
import img10 from "../assets/Screenshot 2026-05-15 214312.png";
import img11 from "../assets/Screenshot 2026-05-15 214341.png";
import img12 from "../assets/Screenshot 2026-05-15 214349.png";
import img13 from "../assets/Screenshot 2026-05-15 214416.png";
import img14 from "../assets/Screenshot 2026-05-15 214425.png";
import img15 from "../assets/Screenshot 2026-05-15 214525.png";
import img16 from "../assets/Screenshot 2026-05-15 214533.png";
import img17 from "../assets/Screenshot 2026-05-15 215111.png";
import img18 from "../assets/Screenshot 2026-05-15 215119.png";
import img19 from "../assets/Screenshot 2026-05-15 215141.png";
import img20 from "../assets/Screenshot 2026-05-15 215148.png";
import img21 from "../assets/Screenshot 2026-05-15 215213.png";
import img22 from "../assets/Screenshot 2026-05-15 215221.png";
import img23 from "../assets/Screenshot 2026-05-15 215815.png";
import img24 from "../assets/Screenshot 2026-05-15 215824.png";
import img25 from "../assets/Screenshot 2026-05-15 215923.png";
import img26 from "../assets/Screenshot 2026-05-15 215932.png";
import img27 from "../assets/Screenshot 2026-05-15 220818.png";
import img28 from "../assets/Screenshot 2026-05-15 220827.png";

function Eyeglasses({ addToCart, setCartOpen }) {
  const [likedItems, setLikedItems] = useState({});
  function handleLike(index) {
    setLikedItems((prev) => ({
      ...prev,
      [index]: !prev[index],
    }));
  }
  return (
    <>
      <div className="Hero">
        <img src={Hero} alt="Hero" />
      </div>
      <div className="heading">
        <h1 className="mheading">Eyeglasses</h1>
        <p className="sheading">
          Glasses with style and comfort. Find your pair!!!
        </p>
      </div>
      <div className="Sunglasses">
        <div className="suntext">
          <p className="sunhead">Choose From Our Premium Collection</p>
          <p className="scategory">
            <b>Colors Available</b>
          </p>
          <div className="color">
            <Link to="/BlueSunglasses">Blue</Link>
            <br />
            <Link to="/BrownSunglasses">Brown</Link>
            <br />
            <Link to="/PurpleSunglasses">Purple</Link>
            <br />
            <Link to="/WhiteSunglasses">White</Link>
            <br />
            <Link to="/BlackSunglasses">Black</Link>
          </div>
          <p className="scategory">
            <b>Styles</b>
          </p>
          <ul>
            <li>Wayfarer</li>
            <li>Round</li>
            <li>Square</li>
            <li>Cat-Eye</li>
          </ul>
          <p className="scategory">
            <b>Category</b>
          </p>
          <ul>
            <li>Mens</li>
            <li>Womens</li>
            <li>Children</li>
          </ul>
        </div>
        <div className="cards">
          <div className="containers">
            <div className="options">
              <img src={img1} className="front" alt="sfgreen" />
              <img src={img2} className="side" alt="ssgreem" />
            </div>
            <div className="optext">
              <div className="right">
                <div className="costs">
                  <p className="cost">₹ 899</p>
                </div>
                <button
                  className="sbtn"
                  onClick={() => {
                    addToCart({
                      id: 101,
                      name: "Eyeglasses 1",
                      price: 899,
                      image: img1,
                    });
                    setCartOpen(true);
                  }}
                >
                  Add to Cart
                </button>
                <button className="likebtn" onClick={() => handleLike(0)}>
                  {likedItems[0] ? "❤️ " : "🤍 "}
                </button>
              </div>
            </div>
          </div>
          <div className="containers">
            <div className="options">
              <img src={img3} className="front" alt="sfcut" />
              <img src={img4} className="side" alt="sscut" />
            </div>
            <div className="optext">
              <div className="right">
                <div className="costs">
                  <p className="cost">₹ 899</p>
                </div>
                <button
                  className="sbtn"
                  onClick={() => {
                    addToCart({
                      id: 102,
                      name: "Eyeglasses 1",
                      price: 899,
                      image: img3,
                    });
                    setCartOpen(true);
                  }}
                >
                  Add to Cart
                </button>
                <button className="likebtn" onClick={() => handleLike(1)}>
                  {likedItems[1] ? "❤️ " : "🤍 "}
                </button>
              </div>
            </div>
          </div>

          <div className="containers">
            <div className="options">
              <img src={img5} className="front" alt="sfwave" />
              <img src={img6} className="side" alt="sswave" />
            </div>
            <div className="optext">
              <div className="right">
                <div className="costs">
                  <p className="cost">₹ 899</p>
                </div>
                <button
                  className="sbtn"
                  onClick={() => {
                    addToCart({
                      id: 103,
                      name: "Eyeglasses 1",
                      price: 899,
                      image: img5,
                    });
                    setCartOpen(true);
                  }}
                >
                  Add to Cart
                </button>
                <button className="likebtn" onClick={() => handleLike(2)}>
                  {likedItems[2] ? "❤️ " : "🤍 "}
                </button>
              </div>
            </div>
          </div>
          <div className="containers">
            <div className="options">
              <img src={img7} className="front" alt="sfbrown" />
              <img src={img8} className="side" alt="ssbrown" />
            </div>
            <div className="optext">
              <div className="right">
                <div className="costs">
                  <p className="cost">₹ 899</p>
                </div>
                <button
                  className="sbtn"
                  onClick={() => {
                    addToCart({
                      id: 104,
                      name: "Eyeglasses 1",
                      price: 899,
                      image: img7,
                    });
                    setCartOpen(true);
                  }}
                >
                  Add to Cart
                </button>
                <button className="likebtn" onClick={() => handleLike(3)}>
                  {likedItems[3] ? "❤️ " : "🤍 "}
                </button>
              </div>
            </div>
          </div>
          <div className="containers">
            <div className="options">
              <img src={img9} className="front" alt="sforbit" />
              <img src={img10} className="side" alt="ssorbit" />
            </div>
            <div className="optext">
              <div className="right">
                <div className="costs">
                  <p className="cost">₹ 899</p>
                </div>
                <button
                  className="sbtn"
                  onClick={() => {
                    addToCart({
                      id: 105,
                      name: "Eyeglasses 1",
                      price: 899,
                      image: img9,
                    });
                    setCartOpen(true);
                  }}
                >
                  Add to Cart
                </button>
                <button className="likebtn" onClick={() => handleLike(4)}>
                  {likedItems[4] ? "❤️ " : "🤍 "}
                </button>
              </div>
            </div>
          </div>
          <div className="containers">
            <div className="options">
              <img src={img11} className="front" alt="sfsstyle" />
              <img src={img12} className="side" alt="sssstyle" />
            </div>
            <div className="optext">
              <div className="right">
                <div className="costs">
                  <p className="cost">₹ 899</p>
                </div>
                <button
                  className="sbtn"
                  onClick={() => {
                    addToCart({
                      id: 106,
                      name: "Eyeglasses 1",
                      price: 899,
                      image: img11,
                    });
                    setCartOpen(true);
                  }}
                >
                  Add to Cart
                </button>
                <button className="likebtn" onClick={() => handleLike(5)}>
                  {likedItems[5] ? "❤️ " : "🤍 "}
                </button>
              </div>
            </div>
          </div>
          <div className="containers">
            <div className="options">
              <img src={img13} className="front" alt="sfblack" />
              <img src={img14} className="side" alt="ssblack" />
            </div>
            <div className="optext">
              <div className="right">
                <div className="costs">
                  <p className="cost">₹ 899</p>
                </div>
                <button
                  className="sbtn"
                  onClick={() => {
                    addToCart({
                      id: 107,
                      name: "Eyeglasses 1",
                      price: 899,
                      image: img13,
                    });
                    setCartOpen(true);
                  }}
                >
                  Add to Cart
                </button>
                <button className="likebtn" onClick={() => handleLike(6)}>
                  {likedItems[6] ? "❤️ " : "🤍 "}
                </button>
              </div>
            </div>
          </div>
          <div className="containers">
            <div className="options">
              <img src={img15} className="front" alt="sfdgreen" />
              <img src={img16} className="side" alt="ssdgreen" />
            </div>
            <div className="optext">
              <div className="right">
                <div className="costs">
                  <p className="cost">₹ 899</p>
                </div>
                <button
                  className="sbtn"
                  onClick={() => {
                    addToCart({
                      id: 108,
                      name: "Eyeglasses 1",
                      price: 899,
                      image: img15,
                    });
                    setCartOpen(true);
                  }}
                >
                  Add to Cart
                </button>
                <button className="likebtn" onClick={() => handleLike(7)}>
                  {likedItems[7] ? "❤️ " : "🤍 "}
                </button>
              </div>
            </div>
          </div>

          <div className="containers">
            <div className="options">
              <img src={img17} className="front" alt="sfwood" />
              <img src={img18} className="side" alt="sswood" />
            </div>
            <div className="optext">
              <div className="right">
                <div className="costs">
                  <p className="cost">₹ 899</p>
                </div>
                <button
                  className="sbtn"
                  onClick={() => {
                    addToCart({
                      id: 109,
                      name: "Eyeglasses 1",
                      price: 899,
                      image: img17,
                    });
                    setCartOpen(true);
                  }}
                >
                  Add to Cart
                </button>
                <button className="likebtn" onClick={() => handleLike(8)}>
                  {likedItems[8] ? "❤️ " : "🤍 "}
                </button>
              </div>
            </div>
          </div>
          <div className="containers">
            <div className="options">
              <img src={img19} className="front" alt="sfpurple" />
              <img src={img20} className="side" alt="sspurple" />
            </div>
            <div className="optext">
              <div className="right">
                <div className="costs">
                  <p className="cost">₹ 899</p>
                </div>
                <button
                  className="sbtn"
                  onClick={() => {
                    addToCart({
                      id: 110,
                      name: "Eyeglasses 1",
                      price: 899,
                      image: img19,
                    });
                    setCartOpen(true);
                  }}
                >
                  Add to Cart
                </button>
                <button className="likebtn" onClick={() => handleLike(9)}>
                  {likedItems[9] ? "❤️ " : "🤍 "}
                </button>
              </div>
            </div>
          </div>

          <div className="containers">
            <div className="options">
              <img src={img21} className="front" alt="sfcircle" />
              <img src={img22} className="side" alt="sscircle" />
            </div>
            <div className="optext">
              <div className="right">
                <div className="costs">
                  <p className="cost">₹ 899</p>
                </div>
                <button
                  className="sbtn"
                  onClick={() => {
                    addToCart({
                      id: 111,
                      name: "Eyeglasses 1",
                      price: 899,
                      image: img21,
                    });
                    setCartOpen(true);
                  }}
                >
                  Add to Cart
                </button>
                <button className="likebtn" onClick={() => handleLike(10)}>
                  {likedItems[10] ? "❤️ " : "🤍 "}
                </button>
              </div>
            </div>
          </div>
          <div className="containers">
            <div className="options">
              <img src={img23} className="front" alt="sfblue" />
              <img src={img24} className="side" alt="ssblue" />
            </div>
            <div className="optext">
              <div className="right">
                <div className="costs">
                  <p className="cost">₹ 899</p>
                </div>
                <button
                  className="sbtn"
                  onClick={() => {
                    addToCart({
                      id: 112,
                      name: "Eyeglasses 1",
                      price: 899,
                      image: img23,
                    });
                    setCartOpen(true);
                  }}
                >
                  Add to Cart
                </button>
                <button className="likebtn" onClick={() => handleLike(12)}>
                  {likedItems[12] ? "❤️ " : "🤍 "}
                </button>
              </div>
            </div>
          </div>
          <div className="containers">
            <div className="options">
              <img src={img25} className="front" alt="sfoctal" />
              <img src={img26} className="side" alt="ssoctal" />
            </div>
            <div className="optext">
              <div className="right">
                <div className="costs">
                  <p className="cost">₹ 899</p>
                </div>
                <button
                  className="sbtn"
                  onClick={() => {
                    addToCart({
                      id: 113,
                      name: "Eyeglasses 1",
                      price: 899,
                      image: img25,
                    });
                    setCartOpen(true);
                  }}
                >
                  Add to Cart
                </button>
                <button className="likebtn" onClick={() => handleLike(12)}>
                  {likedItems[12] ? "❤️ " : "🤍 "}
                </button>
              </div>
            </div>
          </div>

          <div className="containers">
            <div className="options">
              <img src={img27} className="front" alt="sfcream" />
              <img src={img28} className="side" alt="sscream" />
            </div>
            <div className="optext">
              <div className="right">
                <div className="costs">
                  <p className="cost">₹ 899</p>
                </div>
                <button
                  className="sbtn"
                  onClick={() => {
                    addToCart({
                      id: 114,
                      name: "Eyeglasses 1",
                      price: 899,
                      image: img27,
                    });
                    setCartOpen(true);
                  }}
                >
                  Add to Cart
                </button>
                <button className="likebtn" onClick={() => handleLike(13)}>
                  {likedItems[13] ? "❤️ " : "🤍 "}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default Eyeglasses;

import "./Sunglasses.css";
import { useState } from "react";
import { Link } from "react-router-dom";
import Hero from "./Sunglasseshero.png";
import img1 from "./sfgreen.png";
import img2 from "./ssgreem.png";
import img3 from "./sfcut.png";
import img4 from "./sscut.png";
import img5 from "./sfwave.png";
import img6 from "./sswave.png";
import img7 from "./sfbrown.png";
import img8 from "./ssbrown.png";
import img9 from "./sforbit.png";
import img10 from "./ssorbit.png";
import img11 from "./sfsstyle.png";
import img12 from "./sssstyle.png";
import img13 from "../assets/sfblack.png";
import img14 from "../assets/ssblack.png";
import img15 from "./sfdgreen.png";
import img16 from "./ssdgreen.png";
import img17 from "./sfwood.png";
import img18 from "./sswood.png";
import img19 from "./sfpurple.png";
import img20 from "./sspurple.png";
import img21 from "./sfcircle.png";
import img22 from "./sscircle.png";
import img23 from "./sfblue.png";
import img24 from "./ssblue.png";
import img25 from "./sfoctal.png";
import img26 from "./ssoctal.png";
import img27 from "./sfcream.png";
import img28 from "./sscream.png";

function Sunglasses({ addToCart, setCartOpen }) {
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
        <img src={Hero} alt="hero" />
      </div>
      <div className="heading">
        <h1 className="mheading">Sunglasses</h1>
        <p className="sheading">
          Sunglasses that enhance style and comfort. Find your perfect pair!
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
          <div className="color">
            <li>Wayfarer</li>
            <li>Round</li>
            <li>Square</li>
            <li>Cat-Eye</li>
          </div>
          <p className="scategory">
            <b>Category</b>
          </p>
          <div className="color">
            <li>Mens</li>
            <li>Womens</li>
            <li>Children</li>
          </div>
        </div>
        <div className="cards">
          <div className="contain">
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
                      id: 1,
                      name: "Green breeze",
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

          <div className="contain">
            <div className="options">
              <img src={img3} className="front" alt="sfcut" />
              <img src={img4} className="side" alt="sscut" />
            </div>
            <div className="optext">
              <div className="right">
                <div className="costs">
                  <p className="cost">₹ 999</p>
                </div>
                <button
                  className="sbtn"
                  onClick={() => {
                    addToCart({
                      id: 2,
                      name: "Cut Sunglasses",
                      price: 999,
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
          <div className="contain">
            <div className="options">
              <img src={img5} className="front" alt="sfwave" />
              <img src={img6} className="side" alt="sswave" />
            </div>
            <div className="optext">
              <div className="right">
                <div className="costs">
                  <p className="cost">₹ 799</p>
                </div>
                <button
                  className="sbtn"
                  onClick={() => {
                    addToCart({
                      id: 3,
                      name: "Wave Sunglasses",
                      price: 799,
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
          <div className="contain">
            <div className="options">
              <img src={img7} className="front" alt="sfbrown" />
              <img src={img8} className="side" alt="ssbrown" />
            </div>
            <div className="optext">
              <div className="right">
                <div className="costs">
                  <p className="cost">₹ 999</p>
                </div>
                <button
                  className="sbtn"
                  onClick={() => {
                    addToCart({
                      id: 4,
                      name: "Brown Sunglasses",
                      price: 999,
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
          <div className="contain">
            <div className="options">
              <img src={img9} className="front" alt="sforbit" />
              <img src={img10} className="side" alt="ssorbit" />
            </div>
            <div className="optext">
              <div className="right">
                <div className="costs">
                  <p className="cost">₹ 1199</p>
                </div>
                <button
                  className="sbtn"
                  onClick={() => {
                    addToCart({
                      id: 5,
                      name: "Orbit glass",
                      price: 1199,
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
          <div className="contain">
            <div className="options">
              <img src={img11} className="front" alt="sfsstyle" />
              <img src={img12} className="side" alt="sssstyle" />
            </div>
            <div className="optext">
              <div className="right">
                <div className="costs">
                  <p className="cost">₹ 799</p>
                </div>
                <button
                  className="sbtn"
                  onClick={() => {
                    addToCart({
                      id: 6,
                      name: "Style Sunglasses",
                      price: 799,
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
          <div className="contain">
            <div className="options">
              <img src={img13} className="front" alt="sfblack" />
              <img src={img14} className="side" alt="ssblack" />
            </div>
            <div className="optext">
              <div className="right">
                <div className="costs">
                  <p className="cost">₹ 599</p>
                </div>
                <button
                  className="sbtn"
                  onClick={() => {
                    addToCart({
                      id: 7,
                      name: "Black Sunglasses",
                      price: 599,
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
          <div className="contain">
            <div className="options">
              <img src={img15} className="front" alt="sfdgreen" />
              <img src={img16} className="side" alt="ssdgreen" />
            </div>
            <div className="optext">
              <div className="right">
                <div className="costs">
                  <p className="cost">₹ 599</p>
                </div>
                <button
                  className="sbtn"
                  onClick={() => {
                    addToCart({
                      id: 8,
                      name: "Dark Green Sunglasses",
                      price: 599,
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
          <div className="contain">
            <div className="options">
              <img src={img17} className="front" alt="sfwood" />
              <img src={img18} className="side" alt="sswood" />
            </div>
            <div className="optext">
              <div className="right">
                <div className="costs">
                  <p className="cost">₹ 699</p>
                </div>
                <button
                  className="sbtn"
                  onClick={() => {
                    addToCart({
                      id: 9,
                      name: "Wood Sunglasses",
                      price: 699,
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
          <div className="contain">
            <div className="options">
              <img src={img19} className="front" alt="sfpurple" />
              <img src={img20} className="side" alt="sspurple" />
            </div>
            <div className="optext">
              <div className="right">
                <div className="costs">
                  <p className="cost">₹ 799</p>
                </div>
                <button
                  className="sbtn"
                  onClick={() => {
                    addToCart({
                      id: 10,
                      name: "Purple Sunglasses",
                      price: 799,
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
          <div className="contain">
            <div className="options">
              <img src={img21} className="front" alt="sfcircle" />
              <img src={img22} className="side" alt="sscircle" />
            </div>
            <div className="optext">
              <div className="right">
                <div className="costs">
                  <p className="cost">₹ 599</p>
                </div>
                <button
                  className="sbtn"
                  onClick={() => {
                    addToCart({
                      id: 11,
                      name: "Circle Sunglasses",
                      price: 599,
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
          <div className="contain">
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
                      id: 12,
                      name: "Blue Sunglasses",
                      price: 899,
                      image: img23,
                    });
                    setCartOpen(true);
                  }}
                >
                  Add to Cart
                </button>
                <button className="likebtn" onClick={() => handleLike(11)}>
                  {likedItems[11] ? "❤️ " : "🤍 "}
                </button>
              </div>
            </div>
          </div>
          <div className="contain">
            <div className="options">
              <img src={img25} className="front" alt="sfoctal" />
              <img src={img26} className="side" alt="ssoctal" />
            </div>
            <div className="optext">
              <div className="right">
                <div className="costs">
                  <p className="cost">₹ 999</p>
                </div>
                <button
                  className="sbtn"
                  onClick={() => {
                    addToCart({
                      id: 13,
                      name: "Octal Sunglasses",
                      price: 999,
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
          <div className="contain">
            <div className="options">
              <img src={img27} className="front" alt="sfcream" />
              <img src={img28} className="side" alt="sscream" />
            </div>
            <div className="optext">
              <div className="right">
                <div className="costs">
                  <p className="cost">₹ 1299</p>
                </div>
                <button
                  className="sbtn"
                  onClick={() => {
                    addToCart({
                      id: 14,
                      name: "Cream Sunglasses",
                      price: 1299,
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
export default Sunglasses;

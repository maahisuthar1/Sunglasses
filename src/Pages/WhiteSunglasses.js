import "./WhiteSunglasses.css";
import { useState } from "react";
import { Link } from "react-router-dom";
import Hero from "./Sunglasseshero.png";
import img1 from "./Screenshot_2026-05-20_223355-removebg-preview.png";
import img2 from "./Screenshot_2026-05-20_223418-removebg-preview.png";
import img3 from "./Screenshot_2026-05-20_223520-removebg-preview.png";
import img4 from "./Screenshot_2026-05-20_223544-removebg-preview.png";
import img5 from "./Screenshot_2026-05-20_223612-removebg-preview.png"; 
import img6 from "./Screenshot_2026-05-20_223700-removebg-preview.png";
import img7 from "./Screenshot_2026-05-20_223806-removebg-preview.png";
import img8 from "./Screenshot_2026-05-20_223941-removebg-preview.png";
import img9 from "./Screenshot_2026-05-20_224024-removebg-preview.png";
import img10 from "./Screenshot_2026-05-20_223500-removebg-preview.png";

function WhiteSunglasses() {
     function handleClick() {
      console.log("Button Clicked!");
    }
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
          <div className="containing">
            <div className="options">
              <img src={img1} className="fronts" alt="sfgreen" />
            </div>
            <div className="optext">
              <div className="right">
                <div className="costs">
                  <p className="cost">₹ 899</p>
                </div>
                <button className="sbtn" onClick={handleClick}>
                  Buy Now
                </button>
                <button className="likebtn" onClick={() => handleLike(0)}>
                  {likedItems[0] ? "❤️ " : "🤍 "}
                </button>
              </div>
            </div>
          </div>

          <div className="containing">
            <div className="options">
              <img src={img2} className="fronts" alt="sfcut" />
            </div>
            <div className="optext">
              <div className="right">
                <div className="costs">
                  <p className="cost">₹ 999</p>
                </div>
                <button className="sbtn" onClick={handleClick}>
                  Buy Now
                </button>
                <button className="likebtn" onClick={() => handleLike(1)}>
                  {likedItems[1] ? "❤️ " : "🤍 "}
                </button>
              </div>
            </div>
          </div>
          <div className="containing">
            <div className="options">
              <img src={img3} className="fronts" alt="sfwave" />
            </div>
            <div className="optext">
              <div className="right">
                <div className="costs">
                  <p className="cost">₹ 799</p>
                </div>
                <button className="sbtn" onClick={handleClick}>
                  Buy Now
                </button>
                <button className="likebtn" onClick={() => handleLike(2)}>
                  {likedItems[2] ? "❤️ " : "🤍 "}
                </button>
              </div>
            </div>
          </div>
          <div className="containing">
            <div className="options">
              <img src={img4} className="fronts" alt="sfbrown" />
            </div>
            <div className="optext">
              <div className="right">
                <div className="costs">
                  <p className="cost">₹ 999</p>
                </div>
                <button className="sbtn" onClick={handleClick}>
                  Buy Now
                </button>
                <button className="likebtn" onClick={() => handleLike(3)}>
                  {likedItems[3] ? "❤️ " : "🤍 "}
                </button>
              </div>
            </div>
          </div>
          <div className="containing">
            <div className="options">
              <img src={img5} className="fronts" alt="sforbit" />
            </div>
            <div className="optext">
              <div className="right">
                <div className="costs">
                  <p className="cost">₹ 1199</p>
                </div>
                <button className="sbtn" onClick={handleClick}>
                  Buy Now
                </button>
                <button className="likebtn" onClick={() => handleLike(4)}>
                  {likedItems[4] ? "❤️ " : "🤍 "}
                </button>
              </div>
            </div>
          </div>
          <div className="containing">
            <div className="options">
              <img src={img6} className="fronts" alt="sfsstyle" />
            </div>
            <div className="optext">
              <div className="right">
                <div className="costs">
                  <p className="cost">₹ 799</p>
                </div>
                <button className="sbtn" onClick={handleClick}>
                  Buy Now
                </button>
                <button className="likebtn" onClick={() => handleLike(5)}>
                  {likedItems[5] ? "❤️ " : "🤍 "}
                </button>
              </div>
            </div>
          </div>
          <div className="containing">
            <div className="options">
              <img src={img7} className="fronts" alt="sfblack" />
            </div>
            <div className="optext">
              <div className="right">
                <div className="costs">
                  <p className="cost">₹ 599</p>
                </div>
                <button className="sbtn" onClick={handleClick}>
                  Buy Now
                </button>
                <button className="likebtn" onClick={() => handleLike(6)}>
                  {likedItems[6] ? "❤️ " : "🤍 "}
                </button>
              </div>
            </div>
          </div>
          <div className="containing">
            <div className="options">
              <img src={img8} className="fronts" alt="sfdgreen" />
            </div>
            <div className="optext">
              <div className="right">
                <div className="costs">
                  <p className="cost">₹ 599</p>
                </div>
                <button className="sbtn" onClick={handleClick}>
                  Buy Now
                </button>
                <button className="likebtn" onClick={() => handleLike(7)}>
                  {likedItems[7] ? "❤️ " : "🤍 "}
                </button>
              </div>
            </div>
          </div>
          <div className="containing">
            <div className="options">
              <img src={img9} className="fronts" alt="sfwood" />
            </div>
            <div className="optext">
              <div className="right">
                <div className="costs">
                  <p className="cost">₹ 699</p>
                </div>
                <button className="sbtn" onClick={handleClick}>
                  Buy Now
                </button>
                <button className="likebtn" onClick={() => handleLike(8)}>
                  {likedItems[8] ? "❤️ " : "🤍 "}
                </button>
              </div>
            </div>
          </div>
          <div className="containing">
            <div className="options">
              <img src={img10} className="fronts" alt="sfpurple" />
            </div>
            <div className="optext">
              <div className="right">
                <div className="costs">
                  <p className="cost">₹ 799</p>
                </div>
                <button className="sbtn" onClick={handleClick}>
                  Buy Now
                </button>
                <button className="likebtn" onClick={() => handleLike(9)}>
                  {likedItems[9] ? "❤️ " : "🤍 "}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default WhiteSunglasses;
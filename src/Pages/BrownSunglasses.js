import "./BrownSunglasses.css";
import { useState, useEffect } from "react";
import axios from "axios";
import Hero from "./Sunglasseshero.png";

function BrownSunglasses({ addToCart, setCartOpen }) {
  const [likedItems, setLikedItems] = useState({});
  function handleLike(id) {
    setLikedItems((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  }

  const [products, setProducts] = useState([]);
  const [colors, setColors] = useState([]);
  const [selectedColors, setSelectedColors] = useState([]);

  // FETCH DATA
  useEffect(() => {
    const fetchData = async () => {
      try {
        const productRes = await axios.get(
          "https://sungalsses-backend.onrender.com/api/products",
        );
        setProducts(productRes.data);

        const colorRes = await fetch(
          "https://sungalsses-backend.onrender.com/api/colors",
        );
        const colorData = await colorRes.json();
        setColors(colorData);
      } catch (err) {
        console.error(err);
      }
    };

    fetchData();
  }, []);

  // CHECKBOX HANDLER
  const handleColorChange = (e) => {
    const { value, checked } = e.target;

    if (checked) {
      setSelectedColors((prev) => [...prev, value]);
    } else {
      setSelectedColors((prev) => prev.filter((c) => c !== value));
    }
  };

  // FILTER PRODUCTS
  const filteredProducts =
    selectedColors.length === 0
      ? products
      : products.filter((p) => selectedColors.includes(p.color));

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
            {colors.map((color) => (
              <label key={color} style={{ display: "block" }}>
                <input
                  type="checkbox"
                  value={color}
                  onChange={handleColorChange}
                />
                {color}
              </label>
            ))}
          </div>

          {/* <div className="color">
            {[...colors]
            .sort((a,b) => a.localeCompare(b)).map((color) => (
              <div key={color}>
                <Link to={`/${color}Sunglasses`}>{color}</Link>
              </div>
            ))}
          </div> */}
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
          {filteredProducts.map((product) => (
            <div className="containing" key={product._id}>
              <div className="options">
                <p>{product.image}</p>
                <img
                  src={`https://sungalsses-backend.onrender.com/${product.src}`}
                  className="fronts"
                  alt={product.name}
                />
              </div>

              <div className="optext">
                <div className="right">
                  <div className="costs">
                    <p className="cost">₹ {product.price}</p>
                  </div>

                  <button
                    className="sbtn"
                    onClick={() => {
                      addToCart({
                        id: product._id,
                        name: product.name,
                        price: product.price,
                        image: product.src,
                      });
                      setCartOpen(true);
                    }}
                  >
                    Add to Cart
                  </button>

                  <button
                    className="likebtn"
                    onClick={() => handleLike(product._id)}
                  >
                    {likedItems[product._id] ? "❤️" : "🤍"}
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
        {/* <div className="cards">
              {filteredProducts.map((product) => (
                <div className="containing" key={product._id}>
                  <div className="options">
                    <p>{product.image}</p>
                    <img
                      src={`https://sungalsses-backend.onrender.com/${product.src}`}
                      className="fronts"
                      alt={product.name}
                    />
                  </div>

                  <div className="optext">
                    <div className="right">
                      <div className="costs">
                        <p className="cost">₹ {product.price}</p>
                      </div>

                      <button className="sbtn" onClick={handleClick}>
                        Buy Now
                      </button>

                      <button
                        className="likebtn"
                        onClick={() => handleLike(index)}
                      >
                        {likedItems[index] ? "❤️" : "🤍"}
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div> */}
        {/* <div className="cards">
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
        </div> */}
      </div>
    </>
  );
}
export default BrownSunglasses;

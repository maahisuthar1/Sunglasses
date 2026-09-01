import "./Sunglasses.css";
import { useState, useEffect } from "react";
import axios from "axios";
import Hero from "./Sunglasseshero.png";

function Sunglasses({ addToCart, setCartOpen, removeFromCart }) {
  const [likedItems, setLikedItems] = useState({});

  const [hoveredItem, setHoveredItem] = useState(null);

  function handleLike(index) {
    setLikedItems((prev) => ({
      ...prev,
      [index]: !prev[index],
    }));
  }

  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get(
          "https://sungalsses-backend.onrender.com/api/products",
        );

        console.log("Data:", response.data);

        setProducts(response.data);
      } catch (error) {
        console.error("Fetch Error:", error);
      }
    };

    fetchProducts();
  }, []);

  const [selectedColors, setSelectedColors] = useState([]);
  const handleColorChange = (e) => {
    const { value, checked } = e.target;

    if (checked) {
      setSelectedColors((prev) => [...prev, value]);
    } else {
      setSelectedColors((prev) => prev.filter((c) => c !== value));
    }
  };

  const sectionProducts =
    selectedColors.length === 0
      ? products.filter((p) => p.section === "Sunglasses")
      : products.filter((p) =>
          selectedColors.includes((p.color || "").toLowerCase()),
        );

  console.log("FIRST PRODUCT:", products[0]);
  console.log(
    "ALL COLORS:",
    products.map((p) => p.color),
  );
  console.log("SELECTED:", selectedColors);

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
            <label>
              <input
                type="checkbox"
                value="blue"
                onChange={handleColorChange}
              />
              Blue
            </label>

            <br />

            <label>
              <input
                type="checkbox"
                value="brown"
                onChange={handleColorChange}
              />
              Brown
            </label>

            <br />

            <label>
              <input
                type="checkbox"
                value="purple"
                onChange={handleColorChange}
              />
              Purple
            </label>

            <br />

            <label>
              <input
                type="checkbox"
                value="white"
                onChange={handleColorChange}
              />
              White
            </label>

            <br />

            <label>
              <input
                type="checkbox"
                value="black"
                onChange={handleColorChange}
              />
              Black
            </label>
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
          {sectionProducts.map((product, index) => (
            <div className="containing" key={product._id}>
              <div className="options">
                <img
                  src={`https://sungalsses-backend.onrender.com/${
                    hoveredItem === product._id && product.hoverSrc
                      ? product.hoverSrc
                      : product.src
                  }`}
                  className="fronts"
                  alt=""
                  onMouseEnter={() => setHoveredItem(product._id)}
                  onMouseLeave={() => setHoveredItem(null)}
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
                        _id: product._id,
                        name: product.name,
                        price: product.price,
                        image: product.src,
                      });

                      setCartOpen(true);
                    }}
                  >
                    Add to Cart
                  </button>

                  <button className="likebtn" onClick={() => handleLike(index)}>
                    {likedItems[index] ? "❤️" : "🤍"}
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
export default Sunglasses;

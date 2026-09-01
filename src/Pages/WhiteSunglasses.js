import "./WhiteSunglasses.css";
import { useState, useEffect } from "react";
import axios from "axios";
import Hero from "./Sunglasseshero.png";

function WhiteSunglasses({ addToCart, setCartOpen }) {
    
    const [likedItems, setLikedItems] = useState({});
    function handleLike(index) {
      setLikedItems((prev) => ({
        ...prev,
        [index]: !prev[index],
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
          "https://sungalsses-backend.onrender.com/api/products"
        );
        setProducts(productRes.data);

        const colorRes = await fetch(
          "https://sungalsses-backend.onrender.com/api/colors"
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
      setSelectedColors((prev) =>
        prev.filter((c) => c !== value)
      );
    }
  };

  // FILTER PRODUCTS
  const filteredProducts =
    selectedColors.length === 0
      ? products
      : products.filter((p) =>
          selectedColors.includes(p.color)
        );
    
      const whiteProducts = products.filter((product) => product.color === "White");
      console.log(products);
      console.log(whiteProducts);

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
        <p>{product.name}</p>
        {/* <img
          src={`https://sungalsses-backend.onrender.com/${product.src}`}
          className="globe"
          alt={product.name}
        /> */}
        <img
  src={`https://sungalsses-backend.onrender.com/${product.src}`}
  className="test-image"
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
      </div>
    </>
  );
}
export default WhiteSunglasses;
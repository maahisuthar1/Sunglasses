import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Header from "./components/Header";
import Home from "./Pages/Home";
import Sunglasses from "./Pages/Sunglasses";
import Eyeglasses from "./Pages/Eyeglasses";
import Lens from "./Pages/lens";
import Footer from "./components/Footer";

function App() {
  return (
    <BrowserRouter>
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sunglasses" element={<Sunglasses />} />
        <Route path="/eyeglasses" element={<Eyeglasses />} />
        <Route path="/lens" element={<Lens />} />
      </Routes>

      <Footer />
    </BrowserRouter>
  );
}

export default App;

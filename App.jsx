import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import Home from "./Pages/Home";
import DressCollection from "./Pages/DressCollection";
import Accessories from "./Pages/Accessoires";
import Cart from "./Pages/Cart";
import { useState } from "react";

function App() {
  const [cart, setCart] = useState([]);

  const addToCart = (item) => {
    setCart([...cart, item]);
  };

  const removeFromCart = (index) => {
    const newCart = [...cart];
    newCart.splice(index, 1);
    setCart(newCart);
  };

  return (
    <Router>
      <Navbar cartCount={cart.length} />
      <div className="container my-4">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/dresscollection" element={<DressCollection addToCart={addToCart} />} />
          <Route path="/accessories" element={<Accessories addToCart={addToCart} />} />
          <Route path="/cart" element={<Cart cart={cart} removeFromCart={removeFromCart} />} />
        </Routes>
      </div>
      <Footer />
    </Router>
  );
}

export default App;

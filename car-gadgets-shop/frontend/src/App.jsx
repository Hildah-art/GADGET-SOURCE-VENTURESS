import { useState } from "react";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import ProductList from "./components/ProductList";
import AdminPanel from "./components/AdminPanel";
import Cart from "./components/Cart";
import AboutSection from "./components/AboutSection";
import ContactSection from "./components/ContactSection"; 
import Footer from "./components/Footer";
import "./index.css";

function App() {
  const [activePage, setActivePage] = useState("home");
  const [products, setProducts] = useState([
    { id: 1, name: "Smart Dash Cam", price: 4500, image: "https://via.placeholder.com/200x150" },
    { id: 2, name: "Bluetooth FM Transmitter", price: 1800, image: "https://via.placeholder.com/200x150" },
    { id: 3, name: "Car Vacuum Cleaner", price: 3200, image: "https://via.placeholder.com/200x150" },
  ]);
  const [cart, setCart] = useState([]);

  const handleAddProduct = (newProduct) => {
    setProducts([...products, newProduct]);
  };

  const handleAddToCart = (product) => {
    setCart([...cart, product]);
  };

  const handleRemoveFromCart = (id) => {
    setCart(cart.filter((item) => item.id !== id));
  };

  return (
    <div className="app">
      <Navbar onNavigate={setActivePage} activePage={activePage} />

      {activePage === "home" && (
        <HeroSection onShopNow={() => setActivePage("products")} />
      )}

      {activePage === "products" && (
        <ProductList products={products} onAddToCart={handleAddToCart} />
      )}

      {activePage === "admin" && (
        <AdminPanel onAddProduct={handleAddProduct} />
      )}

      {activePage === "cart" && (
        <Cart cart={cart} onRemove={handleRemoveFromCart} />
      )}

      {activePage === "about" && <AboutSection />}
      {activePage === "contact" && <ContactSection />}

      <Footer onNavigate={setActivePage} />
    </div>
  );
}

export default App;

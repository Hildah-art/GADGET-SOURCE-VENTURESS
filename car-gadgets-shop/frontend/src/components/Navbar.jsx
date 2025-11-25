function Navbar({ onNavigate, activePage }) {
  return (
    <nav className="navbar">
     <div className="logo">
  <img
    src="/carlogo.webp"
    alt="Gadget Source Logo"
    className="logo-image"
  />
  <span>Gadget Source</span>
</div>

      <ul className="nav-links">
        <li
          className={activePage === "home" ? "active" : ""}
          onClick={() => onNavigate("home")}
        >
          Home
        </li>
        <li
          className={activePage === "products" ? "active" : ""}
          onClick={() => onNavigate("products")}
        >
          Products
        </li>
        <li
          className={activePage === "cart" ? "active" : ""}
          onClick={() => onNavigate("cart")}
        >
          Cart
        </li>
        <li
          className={activePage === "about" ? "active" : ""}
          onClick={() => onNavigate("about")}
        >
          About
        </li>
        <li
          className={activePage === "admin" ? "active" : ""}
          onClick={() => onNavigate("admin")}
        >
          Admin Panel
        </li>
        <li
          className={activePage === "contact" ? "active" : ""}
          onClick={() => onNavigate("contact")}
        >
          Contact
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;

import { useState } from "react";

function Cart() {
  const [cartItems, setCartItems] = useState([
    { id: 1, name: "Car Charger", price: 1200, quantity: 1 },
    { id: 2, name: "Dashboard Camera", price: 8500, quantity: 2 },
  ]);

  const total = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  const handleRemove = (id) => {
    setCartItems(cartItems.filter((item) => item.id !== id));
  };

  return (
    <div className="cart">
      <h2>Your Cart</h2>
      {cartItems.length === 0 ? (
        <p>Your cart is empty 🛒</p>
      ) : (
        <div className="cart-items">
          {cartItems.map((item) => (
            <div key={item.id} className="cart-item">
              <div>
                <h4>{item.name}</h4>
                <p>Ksh {item.price} × {item.quantity}</p>
              </div>
              <button onClick={() => handleRemove(item.id)}>Remove</button>
            </div>
          ))}
        </div>
      )}
      <h3>Total: Ksh {total}</h3>
      <button className="checkout-btn">Proceed to Checkout</button>
    </div>
  );
}

export default Cart;

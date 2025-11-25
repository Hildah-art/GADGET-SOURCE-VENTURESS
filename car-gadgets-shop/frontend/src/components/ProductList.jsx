import { useState } from "react";

function ProductList({ products, onAddToCart }) {
  const [quantities, setQuantities] = useState(
    products.reduce((acc, product) => {
      acc[product.id] = 1; // default quantity 1
      return acc;
    }, {})
  );

  const increment = (id) => {
    setQuantities((q) => ({ ...q, [id]: q[id] + 1 }));
  };

  const decrement = (id) => {
    setQuantities((q) => {
      const newQty = q[id] - 1;
      return { ...q, [id]: newQty < 0 ? 0 : newQty };
    });
  };

  return (
    <section className="products" style={{ padding: "2rem" }}>
      <h2>Popular Car Gadgets</h2>
      <div
        className="product-grid"
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
          gap: "1.5rem",
        }}
      >
        {products.map(({ id, name, price, image }) => (
          <div
            key={id}
            className="product-card"
            style={{
              backgroundColor: "#fff",
              borderRadius: "12px",
              boxShadow: "0 2px 8px rgb(0 0 0 / 0.1)",
              padding: "1rem",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
            }}
          >
            <img
              src={image}
              alt={name}
              style={{
                width: "100%",
                borderRadius: "12px 12px 0 0",
                objectFit: "cover",
                height: "150px",
              }}
            />
            <h4 style={{ fontWeight: "700", margin: "1rem 0 0.5rem" }}>{name}</h4>

            <div style={{ display: "flex", alignItems: "center", marginBottom: "0.5rem" }}>
              <span style={{ flexGrow: 1 }}>Quantity</span>
              <button
                onClick={() => decrement(id)}
                style={{
                  borderRadius: "20px",
                  border: "1px solid #ddd",
                  backgroundColor: "#fff",
                  padding: "0 10px",
                  fontSize: "1.3rem",
                  cursor: "pointer",
                  marginRight: "0.5rem",
                }}
              >
                −
              </button>
              <span style={{ minWidth: "25px", textAlign: "center" }}>{quantities[id]}</span>
              <button
                onClick={() => increment(id)}
                style={{
                  borderRadius: "20px",
                  border: "1px solid #ddd",
                  backgroundColor: "#fff",
                  padding: "0 10px",
                  fontSize: "1.3rem",
                  cursor: "pointer",
                  marginLeft: "0.5rem",
                }}
              >
                +
              </button>
            </div>

            <p style={{ fontWeight: "700", marginBottom: "0.75rem" }}>{price}</p>

            <button
              onClick={() =>
                onAddToCart({ id, name, price, quantity: quantities[id], image })
              }
              disabled={quantities[id] === 0}
              style={{
                backgroundColor: "#533a91",
                color: "#fff",
                borderRadius: "30px",
                border: "none",
                padding: "0.5rem 1rem",
                cursor: "pointer",
                fontWeight: "600",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                gap: "0.5rem",
              }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
                style={{ width: "18px", height: "18px" }}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13l-1.35 2.7a1 1 0 001.35 1.5H17m-5 0v2a1 1 0 11-2 0v-2m6-8h2"
                />
              </svg>
              Add to Cart
            </button>
          </div>
        ))}
      </div>
    </section>
  );
}

export default ProductList;

// src/components/AdminPanel.jsx
import { useState } from "react";

function AdminPanel() {
  return (
    <div className="admin-panel">
      <h2>Admin Dashboard</h2>
      <p>Manage products, orders, and inventory here.</p>

      <div className="admin-actions">
        <button>Add Product</button>
        <button>Edit Product</button>
        <button>View Orders</button>
      </div>
    </div>
  );
}

export default AdminPanel;

import React from "react";

export default function ProductCard({ product, onDelete }) {
  return (
    <div className="border p-4 rounded shadow">
      <img src={product.image} alt="" className="h-24 w-full object-contain mb-3" />
      <h2>{product.name}</h2>
      <p>Qty: {product.quantity}</p>
      <p>${product.price}</p>
      <button onClick={() => onDelete(product._id)}>Delete</button>
    </div>
  );
}

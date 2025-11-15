import React, { useEffect, useState } from "react";
import { getProducts, createProduct, deleteProduct } from "../api/products";
import ProductCard from "../components/ProductCard";

export default function Home() {
  const [products, setProducts] = useState([]);
  const [newProduct, setNewProduct] = useState({
    name: "",
    quantity: "",
    price: "",
    image: "",
  });

  useEffect(() => {
    loadProducts();
  }, []);

  const loadProducts = () => {
    getProducts()
      .then((res) => setProducts(res.data))
      .catch((err) => console.error("Error loading:", err));
  };

  const handleCreate = (e) => {
    e.preventDefault();
    createProduct(newProduct).then(() => {
      setNewProduct({ name: "", quantity: "", price: "", image: "" });
      loadProducts();
    });
  };

  return (
    <div className="p-8">
      <h1 className="text-2xl mb-5">Product Manager</h1>

      <form onSubmit={handleCreate} className="flex gap-2 mb-6">
        <input name="name" placeholder="Name" value={newProduct.name}
          onChange={(e) => setNewProduct({ ...newProduct, name: e.target.value })} />
        <input name="quantity" placeholder="Qty" value={newProduct.quantity}
          onChange={(e) => setNewProduct({ ...newProduct, quantity: e.target.value })} />
        <input name="price" placeholder="Price" value={newProduct.price}
          onChange={(e) => setNewProduct({ ...newProduct, price: e.target.value })} />
        <input name="image" placeholder="Image URL" value={newProduct.image}
          onChange={(e) => setNewProduct({ ...newProduct, image: e.target.value })} />
        <button type="submit">Add</button>
      </form>

      <div className="grid grid-cols-3 gap-4">
        {products.map((p) => (
          <ProductCard key={p._id} product={p} onDelete={deleteProduct} />
        ))}
      </div>
    </div>
  );
}

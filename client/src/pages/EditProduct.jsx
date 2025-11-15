import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { getProduct, updateProduct } from "../api/products";
import { ProductForm } from "../components/ProductForm";

const blankProduct = { name: "", quantity: "", price: "", image: "" };

export default function EditProduct() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [product, setProduct] = useState(blankProduct);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getProduct(id).then(({ data }) => {
      setProduct(data);
      setLoading(false);
    });
  }, [id]);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setProduct((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    updateProduct(id, product).then(() => navigate("/"));
  };

  if (loading) {
    return <div className="p-8 text-center">Loading product...</div>;
  }

  return (
    <div className="p-8 flex flex-col items-center gap-4">
      <h1 className="text-2xl font-semibold">Edit Product</h1>
      <ProductForm
        product={product}
        onChange={handleChange}
        onSubmit={handleSubmit}
      />
    </div>
  );
}

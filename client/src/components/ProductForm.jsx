export const ProductForm = ({ product, onSubmit, onChange }) => {
  return (
    <form onSubmit={onSubmit} className="bg-white p-6 shadow-md rounded-xl max-w-lg w-full border">
      <h2 className="text-xl font-semibold mb-4">
        {product._id ? "Edit Product" : "Create Product"}
      </h2>

      <div className="flex flex-col gap-4">
        <input
          type="text"
          name="name"
          placeholder="Product Name"
          value={product.name}
          onChange={onChange}
          className="border p-2 rounded-md focus:ring-2 focus:ring-blue-400"
        />

        <input
          type="number"
          name="quantity"
          placeholder="Quantity"
          value={product.quantity}
          onChange={onChange}
          className="border p-2 rounded-md focus:ring-2 focus:ring-blue-400"
        />

        <input
          type="number"
          name="price"
          placeholder="Price"
          value={product.price}
          onChange={onChange}
          className="border p-2 rounded-md focus:ring-2 focus:ring-blue-400"
        />

        <input
          type="text"
          name="image"
          placeholder="Image URL"
          value={product.image}
          onChange={onChange}
          className="border p-2 rounded-md focus:ring-2 focus:ring-blue-400"
        />

        <button
          type="submit"
          className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600"
        >
          {product._id ? "Update Product" : "Add Product"}
        </button>
      </div>
    </form>
  );
};

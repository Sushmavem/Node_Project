import axios from "axios";

const API_URL = "/api/products";

// Get all products
export const getProducts = () => axios.get(API_URL);

// Get single product
export const getProduct = (id) => axios.get(`${API_URL}/${id}`);

// Create product
export const createProduct = (data) => axios.post(API_URL, data);

// Update product
export const updateProduct = (id, data) => axios.put(`${API_URL}/${id}`, data);

// Delete product
export const deleteProduct = (id) => axios.delete(`${API_URL}/${id}`);

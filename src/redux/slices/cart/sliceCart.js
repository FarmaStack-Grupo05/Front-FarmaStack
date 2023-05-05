import axios from "axios";
import { addProduct, deleteProduct } from "."

const URL = import.meta.env.VITE_BACK_URL || "http://localhost:3001";

export function addProducts(product, quantity = 1) {
  const productWithQuantity = { ...product, quantity };
  return async function (dispatch) {
    //const result = await axios.post(`${URL}/cart/add-item`, product);
    if (true) { // Remplazar true por result cuando haya la ruta del back
      dispatch(addProduct(productWithQuantity));
    } else {
      console.error("No se pudo agregar el producto");
    }
  }
}

export function deleteProducts(productId) {
  return async function (dispatch) {
    //const result = await axios.delete(`${URL}/cart/delete-item`, productId);
    if (true) { // Remplazar true por result cuando haya la ruta del back
      dispatch(deleteProduct(productId));
    } else {
      console.error("No se pudo eliminar el producto");
    }
  }
}
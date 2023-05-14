import axios from "axios";
import { setCart } from ".";
import { API_URL } from "../../../utils/api";

export function addProducts(userId, product, quantity = 1) {
	return async function (dispatch) {
		const result = await axios.post(`${API_URL}/cart/add`, {
			userId,
			productId: product.id,
			quantity,
		});
		if (result) {
			// dispatch(addProduct(productWithQuantity));
			dispatch(setCart(result.data));
		} else {
			console.error("No se pudo agregar el producto");
		}
	};
}

export function deleteProducts(userId, productId) {
	return async function (dispatch) {
		const result = await axios.delete(`${API_URL}/cart/remove`, {
			params: {
				userId,
				productId,
			},
		});
		if (result) {
			// dispatch(deleteProduct(productId));
			dispatch(setCart(result.data));
		} else {
			console.error("No se pudo eliminar el producto");
		}
	};
}

export function modifyProducts(userId, productId, quantity) {
	return async function (dispatch) {
		const result = await axios.put(`${API_URL}/cart/update`, {
			userId,
			productId,
			quantity
		});
		if (result) {
			dispatch(setCart(result.data))
		} else {
			console.error("No se pudo modificar el producto");
		}
	};
}


export function getCart(userId) {
	return async function (dispatch) {
		const result = await axios.get(`${API_URL}/cart`, {
			params: { userId },
		});
		if (result) {
			dispatch(setCart(result.data));
		} else {
			console.error("No se pudo obtener el carrito");
		}
	};
}

export function clearCart() {
	return function (dispatch) {
		dispatch(setCart({ products: [], total_price: 0 }));
	};
}

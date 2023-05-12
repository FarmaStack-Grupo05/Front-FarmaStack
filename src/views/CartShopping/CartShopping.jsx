import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import CheckOut from "../../Components/Cart/CheckOut";
import ShoppingContainer from "../../Components/Cart/ShoppingContainer";
import { total } from "../../redux/slices/carts";

const CartShopping = () => {
	const { cartItems } = useSelector((state) => state.cartState);
	console.log(cartItems);
	const dispatch = useDispatch();
	useEffect(() => {
		dispatch(total());
	}, [cartItems]);
	return (
		<div>
			<h1>cartShopping</h1>
			<CheckOut />
			<ShoppingContainer />
		</div>
	);
};

export default CartShopping;

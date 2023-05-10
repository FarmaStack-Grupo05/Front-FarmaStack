import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import CheckOut from '../../Components/Cart/CheckOut';
import ShoppingContainer from '../../Components/Cart/ShoppingContainer';
import ItemDetails from '../../Components/Cart/ItemDetails';
import { total } from '../../redux/slices/carts';
import { Outlet, createBrowserRouter } from "react-router-dom";
import checkOut from "../../redux/slices/checkOut";
// const Layout = () => {
//   const { isOpen } = useSelector((state) => state.checkout);
//   return (
//     <div>
//       <NavBar />
//       {isOpen && <CheckOut />}
//       <Outlet />
//     </div>
//   );
// };
// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <Layout />,
//     children: [
//       {
//         path: "/",
//         element: <ShoppingContainer />,
//       },
//       {
//         path: "/ItemDetails/:id",
//         element: <ItemDetails />,
//       },
//     ],
//   },
// ])

const CartShopping = () => {
    const {cartItems}  = useSelector((state) => state.cartState);
	console.log(cartItems)
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
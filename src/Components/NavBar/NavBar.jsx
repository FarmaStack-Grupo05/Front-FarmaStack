import Logo from "../../assets/logo1.png";
import { Link } from "react-router-dom";
import {  useSelector } from "react-redux";
// import { searchProducts } from "../../redux/slices/products/sliceProducts";
import { Cart } from "../../views";

// import LoginButton from "./LoginButton";

import ProfileButton from "./ProfileButton";
import { useState } from "react";
import { ShoppingCartIcon } from "@heroicons/react/24/outline";

const NavBar = () => {
//   const dispatch = useDispatch();
//   const handlerChange = (event) => {
//     event.preventDefault();
//     dispatch(searchProducts(event.target.value));
//   };

  const [showCart, setShowCart] = useState(false);

  const { products } = useSelector((state) => state.cartState);

  return (
    <>
      <header aria-label="Site Header" className="border-b border-gray-100">
        <div className="flex items-center justify-between px-4 py-2 bg-green-500">
          <div className="flex items-center gap-4">
            <Link to={"/"} className="flex">
              <img
                src={Logo}
                alt="Logo"
                className="pl-20 h-16 w-30 object-contain"
              />
            </Link>
            <button
              type="button"
              className="bg-green-500 text-white py-2 px-0 rounded"
            >
              <svg
                className="h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>

          <div></div>

          <div className="flex flex-1 items-center justify-end gap-8">
            <nav
              aria-label="Site Nav"
              className="hidden lg:flex lg:gap-4 lg:text-xs lg:font-bold lg:uppercase lg:tracking-wide lg:text-gray-500 text-white"
            >
              {window.location.pathname !== "/" && (
                <Link
                  to="/"
                  className="block h-16 border-b-4 border-transparent leading-[4rem] hover:border-current  text-white"
                >
                  Home
                </Link>
              )}
              <Link
                to="/farmastack/aboutus"
                className="block h-16 border-b-4 border-transparent leading-[4rem] hover:border-current  text-white"
              >
                About Us
              </Link>

              <Link
                className="block h-16 border-b-4 border-transparent leading-[4rem] hover:border-current text-white"
                to={"/farmastack/products"}
              >
                Products
              </Link>

              <Link
                className="block h-16 border-b-4 border-transparent leading-[4rem] hover:border-current text-white"
                to={"/farmastack/contact"}
              >
                contact
              </Link>



            </nav>

            <div className="flex items-center pr-20">
              <div className="pt-3 pl-2 pr-2 h-16 place-content-center border-x border-gray-100">
                <ProfileButton />
              </div>

              <div className="flex items-center border-x border-gray-100">
                <span className="border-e border-e-gray-100">
                  <button
                    onClick={() => setShowCart(!showCart)}
                    className="relative grid h-16 w-16  place-content-center border-b-4 border-transparent leading-[4rem] hover:border-current text-white"
                  >
                    <span className="sr-only">Shopping</span>
                    {products.length >= 1 && (
                      <>
                        <span className="absolute top-0 right-0 h-2 w-2 mt-1 mr-2 bg-red-500 rounded-full"></span>
                        <span className="absolute top-0 right-0 h-2 w-2 mt-1 mr-2 bg-red-500 rounded-full animate-ping"></span>
                      </>
                    )}

                    <ShoppingCartIcon className="w-8 h-8 text-white" />
                    {showCart && <Cart />}
                  </button>
                </span>

                {/* <span className="border-e border-e-gray-100">
									<a
										href="/farmastack/auth"
										className="grid h-16 w-16  place-content-center border-b-4 border-transparent leading-[4rem] hover:border-current text-white"
									>
										<svg
											className="h-4 w-4"
											xmlns="http://www.w3.org/2000/svg"
											fill="none"
											viewBox="0 0 24 24"
											stroke="currentColor"
										>
											<path
												strokeLinecap="round"
												strokeLinejoin="round"
												strokeWidth="2"
												d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
											/>
										</svg>

										<span className="sr-only"> Account </span>

										<span className="sr-only">cart</span>
									</a>
								</span> */}
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default NavBar;

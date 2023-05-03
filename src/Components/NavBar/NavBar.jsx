
import Logo from "../../assets/logo1.png";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { searchProducts } from "../../redux/slices/products/sliceProducts";

const NavBar = () => {
  const dispatch = useDispatch();

  const handlerChange = (event) => {
    event.preventDefault();
    dispatch(searchProducts(event.target.value));
  };

  return (
    <>
      <header aria-label="Site Header" className="border-b border-gray-100">
        <div className="flex items-center justify-between px-4 py-2 bg-green-500">
          <div className="flex items-center gap-4">
            <Link to={"/"} className="flex">
              <img
                src={Logo}
                alt="Logo"
                className="h-16 w-48 object-contain "
              />
            </Link>
            <button
              type="button"
              className="bg-green-500 text-white py-2 px-4 rounded"
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
            <button className="text-white">Category Menu</button>
          </div>

          <div></div>

          <div className="flex flex-1 items-center justify-end gap-8">
            <nav
              aria-label="Site Nav"
              className="hidden lg:flex lg:gap-4 lg:text-xs lg:font-bold lg:uppercase lg:tracking-wide lg:text-gray-500 text-white"
            >
              <a
                href="/farmastack/aboutus"
                className="block h-16 border-b-4 border-transparent leading-[4rem] hover:border-current  text-white"
              >
                About
              </a>

              <a
                href="/news"
                className="block h-16 border-b-4 border-transparent leading-[4rem] hover:border-current text-white"
              >
                News
              </a>

              <Link
                className="block h-16 border-b-4 border-transparent leading-[4rem] hover:border-current text-white"
                to={"/farmastack/products"}
              >
                Products
              </Link>

              <a
                href="/farmastack/registrarse"
                className="block h-16 border-b-4 border-transparent leading-[4rem] hover:border-current text-white"
              >
                Registrarse 
              </a>
              
              
                 <Link
               className="block h-16 border-b-4 border-transparent leading-[4rem] hover:border-current text-white"
               to={"/farmastack/contact"}
              >
                Contact
                </Link>

              <div className="relative">
                <input
                  type="search"
                  id="Search"
                  name="search"
                  className="mt-3 rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm border-2 h-10 px-5 pr-10 rounded-lg text-sm focus:outline-none"
                  placeholder="Search ..."
                  onChange={handlerChange}
                />
                <button
                  type="submit"
                  className="absolute right-0 top-0 mt-5 mr-2"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="w-6 h-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
                    />
                  </svg>
                </button>
              </div>
            </nav>

            <div className="flex items-center">
              <div className="flex items-center border-x border-gray-100">
                <span className="border-e border-e-gray-100">
                  <a
                    href="/cart"
                    className="grid h-16 w-16  place-content-center border-b-4 border-transparent leading-[4rem] hover:border-current text-white"
                  >
                    <svg
                      className="h-4 w-4"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
                      />
                    </svg>

                    <span className="sr-only">Cart</span>
                  </a>
                </span>

                <span className="border-e border-e-gray-100">
                  <a
                    href="/account"
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
                  </a>
                </span>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default NavBar;

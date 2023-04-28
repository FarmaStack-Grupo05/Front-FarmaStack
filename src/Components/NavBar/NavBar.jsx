import { useDispatch, useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import Logo from "../../assets/FarmaStackLogo.png";

const NavBar = () => {
  const location = useLocation();

//   const dispatch = useDispatch();
//   const [searchText, setSearchText] = React.useState("");

//   const handleSearch = (event) => {
//     const text = event.target.value;
//     setSearchText(text);
//     dispatch(getproductByName(text));
//   };

//   const courseById = useSelector((state) => state.productState.productByName);

  return (
    <>
      <header aria-label="Site Header" className="border-b border-gray-100">
        <div className="mx-auto flex h-16 max-w-screen-2xl items-center justify-between sm:px-6 lg:px-8">
          {/* <!--Logo--> */}

          <div className="flex-1 md:flex md:items-center md:gap-12">
            <a className="block text-teal-600" href="/">
              <span className="sr-only">Home</span>
              <svg className="h-8" viewBox="0 0 24 24" fill="none">
                <image
                  href={Logo}
                  x="0"
                  y="0"
                  width="30"
                  height="30"
                />
              </svg>
            </a>
          </div>

          {/* <!--aboutUs, Products routes--> */}

          <div className="flex flex-1 items-center justify-end gap-8">
            <nav
              aria-label="Site Nav"
              className="hidden lg:flex lg:gap-4 lg:text-xs lg:font-bold lg:uppercase lg:tracking-wide lg:text-gray-500"
            >
              {location.pathname !== "/" && (
                <a
                  href="/"
                  className="block h-16 border-b-4 border-transparent leading-[4rem] hover:border-current hover:text-red-700"
                >
                  Home
                </a>
              )}

              <a
                href="/farmastack/aboutus"
                className="block h-16 border-b-4 border-transparent leading-[4rem] hover:border-current hover:text-red-700"
              >
                About
              </a>

              <a
                href="/farmastack/products"
                className="block h-16 border-b-4 border-transparent leading-[4rem] hover:border-current hover:text-red-700"
              >
                Products
              </a>

              <a
                href="/contact"
                className="block h-16 border-b-4 border-transparent leading-[4rem] hover:border-current hover:text-red-700"
              >
                Contact
              </a>
            </nav>

            {/* <!--Cart Icon--> */}

            <div className="flex items-center">
              <div className="flex items-center border-x border-gray-100">
                <span className="border-e border-e-gray-100">
                  <a
                    href="/cart"
                    className="grid h-16 w-16 place-content-center border-b-4 border-transparent hover:border-red-700"
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

                {/* <!--Profile account--> */}

                <span className="border-e border-e-gray-100">
                  <a
                    href="/account"
                    className="grid h-16 w-16 place-content-center border-b-4 border-transparent hover:border-red-700"
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

                {/* <!--SearchBar--> */}

                <form className="mb-0 hidden lg:flex">
                  <div className="relative">
                    <input
                      className="h-10 rounded-lg border-gray-200 pe-10 text-sm placeholder-gray-300 focus:z-10"
                      placeholder="Search..."
                      type="text"
                    />

                    <button
                      type="submit"
                      className="absolute inset-y-0 end-0 rounded-r-lg p-2 text-gray-600"
                    >
                      <span className="sr-only">Submit Search</span>
                      <svg
                        className="h-5 w-5"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          clipRule="evenodd"
                          d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                          fillRule="evenodd"
                        ></path>
                      </svg>
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default NavBar;

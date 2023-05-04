import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  filterProduct,
  getProducts,
} from "../../redux/slices/products/sliceProducts";
import Pagination from "../../Components/Pagination/Pagination";

const Products = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch]);
  const { results } = useSelector((state) => state.productsState.list);
  const onChange = (event) => {
    const { value } = event.target;
    const text = event.target.selectedOptions[0].label;
    dispatch(getProducts(value, text));
  };
  const filterChange = (event) => {
    const { name } = event.target;
    dispatch(filterProduct(name));
  };

  const detail = useSelector((state) => state.productsState.detail);
  // console.log(detail);
  const handlerProduct = () => {
    dispatch(setProduct(detail));
  };

  return (
    <div>
      {/*
	Heads up! 👋
  
	This component comes with some `rtl` classes. Please remove them if they are not needed in your project.
  
	Plugins:
	  - @tailwindcss/forms
  */}

      <section>
        <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8">
          <header>
            <h2 className="text-xl font-bold text-gray-900 sm:text-3xl pl-5">
              Product Collection
            </h2>

            <p className="mt-4 w-auto text-gray-500 shadow-xl p-5 rounded-3xl">
              Welcome to our pharmaceuticals page. here You will find a wide
              variety of medicines and products high-quality and reliable
              healthcare, designed to help improve their well-being and quality
              of life.
            </p>
          </header>

          <div
            style={{
              display: "flex",
              justifyContent: "center",
              paddingTop: 30,
            }}
          >
            <Pagination />
          </div>

          <div className="mt-8 block lg:hidden">
            <button className="flex cursor-pointer items-center gap-2 border-b border-gray-400 pb-1 text-gray-900 transition hover:border-gray-600">
              <span className="text-sm font-medium"> Filters & Sorting </span>

              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="h-4 w-4 rtl:rotate-180"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M8.25 4.5l7.5 7.5-7.5 7.5"
                />
              </svg>
            </button>
          </div>

          <div className="mt-4 lg:mt-8 lg:grid lg:grid-cols-4 lg:items-start lg:gap-8">
            <div className="hidden space-y-4 lg:block shadow-xl h-full p-5 rounded-3xl">
              <div>
                <label
                  htmlFor="SortBy"
                  className="block text-xs font-medium text-gray-700"
                >
                  Sort By Name
                </label>

                <select
                  id="SortBy"
                  className="w-full mt-1 rounded border-gray-300 text-gray-700 text-sm font-medium"
                  onChange={onChange}
                >
                  <option>Sort By</option>
                  <option value="sortName">des</option>
                  <option value="sortName">asc</option>
                </select>
              </div>
              <div>
                <label
                  htmlFor="SortBy"
                  className="block text-xs font-medium text-gray-700"
                >
                  Sort By Price
                </label>

                <select
                  id="SortBy"
                  className="w-full mt-1 rounded border-gray-300 text-gray-700 text-sm font-medium"
                  onChange={onChange}
                >
                  <option>Sort By Price</option>
                  <option value="sortPrice">asc</option>
                  <option value="sortPrice">des</option>
                </select>
              </div>

              <div>
                <p className="block text-xs font-medium text-gray-700">
                  Filters
                </p>

                <div className="mt-1 space-y-2 ">
                  <details className="overflow-hidden rounded border border-gray-300 [&_summary::-webkit-details-marker]:hidden">
                    <summary className="bg-white flex cursor-pointer items-center justify-between gap-2 p-2 text-gray-700 transition">
                      <span className="text-sm font-medium"> Category </span>

                      <span className="transition group-open:-rotate-180">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth="1.5"
                          stroke="currentColor"
                          className="h-4 w-4"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                          />
                        </svg>
                      </span>
                    </summary>

                    <div className="border-t border-gray-200 bg-white">
                      <header className="flex items-center justify-between p-4">
                        <span className="text-sm text-gray-700">
                          {" "}
                          0 Selected{" "}
                        </span>

                        <button
                          type="button"
                          className="text-sm text-gray-900 underline underline-offset-4"
                        >
                          Reset
                        </button>
                      </header>

                      <ul className="space-y-1 border-t border-gray-200 p-4">
                        <li>
                          <label
                            htmlFor="FilterInStock"
                            className="inline-flex items-center gap-2"
                          >
                            <input
                              type="checkbox"
                              id="FilterInStock"
                              className="h-5 w-5 rounded border-gray-300"
                              name="medicines"
                              onChange={filterChange}
                            />

                            <span className="text-sm font-medium text-gray-700">
                              Medicines (5+)
                            </span>
                          </label>
                        </li>

                        <li>
                          <label
                            htmlFor="FilterPreOrder"
                            className="inline-flex items-center gap-2"
                          >
                            <input
                              type="checkbox"
                              id="FilterPreOrder"
                              className="h-5 w-5 rounded border-gray-300"
                              name="sexual"
                              onChange={filterChange}
                            />

                            <span className="text-sm font-medium text-gray-700">
                              Sexual health (3+)
                            </span>
                          </label>
                        </li>

                        <li>
                          <label
                            htmlFor="FilterOutOfStock"
                            className="inline-flex items-center gap-2"
                          >
                            <input
                              type="checkbox"
                              id="FilterOutOfStock"
                              className="h-5 w-5 rounded border-gray-300"
                              name="personal"
                              onChange={filterChange}
                            />

                            <span className="text-sm font-medium text-gray-700">
                              Personal care (10+)
                            </span>
                          </label>
                        </li>

                        <li>
                          <label
                            htmlFor="FilterOutOfStock"
                            className="inline-flex items-center gap-2"
                          >
                            <input
                              type="checkbox"
                              id="FilterOutOfStock"
                              className="h-5 w-5 rounded border-gray-300"
                              name="maternity"
                              onChange={filterChange}
                            />

                            <span className="text-sm font-medium text-gray-700">
                              Maternity (10+)
                            </span>
                          </label>
                        </li>
                      </ul>
                    </div>
                  </details>
                </div>
              </div>
            </div>

            <div className="no-underline text-decoration-none lg:col-span-3 shadow-xl h-full p-5 rounded-3xl">
              <ul className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3 text-decoration-none">
                {results?.map((product) => {
                  return (
                    <li
                      key={product.name}
                      className="card no-underline text-decoration-none bg-white shadow-xl h-full p-5 rounded-3xl transition duration-500 hover:bg-green-500 hover:text-white group-hover:text-white hover:transform hover:scale-105"
                    >
                      <a
                        href={`/farmastack/details/${product.id}`}
                        className="group block overflow-hidden"
                      >
                        <div className="card rounded-xl relative bg-white mb-3">
                          <img
                            src={product.image}
                            alt=""
                            className="h-auto w-auto mx-auto p-3 object-cover transition duration-500 group-hover:scale-105 sm:h-[120px]"
                          />
                        </div>

                        <div className="flex flex-row cursor-pointer items-center justify-between">
                          <div className="duration-500 hover:text-white group-hover:text-white">
                            <h1 className="text-xl text-gray-700 group-hover:text-white">
                              {product.name}
                            </h1>

                            <h3 className="text-xs text-gray-700 group-hover:text-white">
                              {product.category}
                            </h3>

                            <p className="mt-2">
                              <span className="sr-only"> Regular Price </span>
                              <span className="tracking-wider text-gray-900 group-hover:text-white">
                                ${product.price}
                              </span>
                            </p>
                          </div>
                          <div>
                            <button
                              onClick={handlerProduct}
                              className="block w-auto rounded bg-yellow-400 p-2 text-sm font-medium transition hover:scale-105"
                            >
                              Add to cart
                            </button>
                          </div>
                        </div>
                      </a>
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Products;

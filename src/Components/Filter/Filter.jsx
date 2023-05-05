import { useContext } from "react";
import { FilterContext } from "./FilterContext";

const Filter = () => {
  const {
    categoryFilter,
    priceFilter,
    setCategoryFilter,
    setPriceFilter,
    resetFilters,
  } = useContext(FilterContext);

  const handleCategoryFilter = (event) => {
    setCategoryFilter(event.target.value);
  };

  const handlePriceFilter = (event) => {
    setPriceFilter(event.target.value);
  };

  const handleResetFilters = () => {
    resetFilters();
  };

  return (
    <div>
      {/*
  Heads up! 👋

  Plugins:
    - @tailwindcss/forms
*/}
      <>
        <h2>Filter By:</h2>
        <label htmlFor="category-filter">Category:</label>
        <select
          id="category-filter"
          value={categoryFilter}
          onChange={handleCategoryFilter}
        >
          <option value="">All</option>
          <option value="electronics">Electronics</option>
          <option value="clothing">Clothing</option>
          <option value="home">Home</option>
        </select>
        <br />
        <label htmlFor="price-filter">Price:</label>
        <select
          id="price-filter"
          value={priceFilter}
          onChange={handlePriceFilter}
        >
          <option value="">All</option>
          <option value="under-50">Under $50</option>
          <option value="50-100">$50 - $100</option>
          <option value="over-100">Over $100</option>
        </select>
        <br />
        <button onClick={handleResetFilters}>Reset Filters</button>
      </>
      <div className="space-y-2">
        <details className="overflow-hidden rounded border border-gray-300 [&_summary::-webkit-details-marker]:hidden">
          <summary className="flex cursor-pointer items-center justify-between gap-2 bg-white p-4 text-gray-900 transition">
            <span className="text-sm font-medium"> Categoria </span>

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
              <span className="text-sm text-gray-700"> 0 Selected </span>

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
                  />

                  <span className="text-sm font-medium text-gray-700">
                    In Stock (5+)
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
                  />

                  <span className="text-sm font-medium text-gray-700">
                    Pre Order (3+)
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
                  />

                  <span className="text-sm font-medium text-gray-700">
                    Out of Stock (10+)
                  </span>
                </label>
              </li>
            </ul>
          </div>
        </details>

        <details className="overflow-hidden rounded border border-gray-300 [&_summary::-webkit-details-marker]:hidden">
          <summary className="flex cursor-pointer items-center justify-between gap-2 bg-white p-4 text-gray-900 transition">
            <span className="text-sm font-medium"> Price </span>

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
                The highest price is $600{" "}
              </span>

              <button
                type="button"
                className="text-sm text-gray-900 underline underline-offset-4"
              >
                Reset
              </button>
            </header>

            <div className="border-t border-gray-200 p-4">
              <div className="flex justify-between gap-4">
                <label
                  htmlFor="FilterPriceFrom"
                  className="flex items-center gap-2"
                >
                  <span className="text-sm text-gray-600">$</span>

                  <input
                    type="number"
                    id="FilterPriceFrom"
                    placeholder="From"
                    className="w-full rounded-md border-gray-200 shadow-sm sm:text-sm"
                  />
                </label>

                <label
                  htmlFor="FilterPriceTo"
                  className="flex items-center gap-2"
                >
                  <span className="text-sm text-gray-600">$</span>

                  <input
                    type="number"
                    id="FilterPriceTo"
                    placeholder="To"
                    className="w-full rounded-md border-gray-200 shadow-sm sm:text-sm"
                  />
                </label>
              </div>
            </div>
          </div>
        </details>
      </div>
    </div>
  );
};

export default Filter;

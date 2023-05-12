import { searchProducts } from "../../redux/slices/products/sliceProducts";
import { useDispatch } from "react-redux";

const Search = () => {
  const dispatch = useDispatch();

  const handleChange = (event) => {
    event.preventDefault();
    dispatch(searchProducts(event.target.value));
  };

  return (
    <div className="flex justify-end">
      <div className="relative">
        <input
          type="search"
          id="Search"
          name="search"
          className=  "border-gray-200 bg-white text-gray-700 shadow-sm border-2 h-10 px-5 pr-10 rounded-lg text-sm focus:outline-none flex justify-end"
          placeholder="Search ..."
          onChange={handleChange}
        />
        <a to={`/farmastack/products?name=${searchProducts}`}>
          <button
            type="submit"
            className="absolute right-0 top-0 mt-2 mr-2"
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
        </a>
      </div>
    </div>
  );
};

export default Search;

import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getProducts } from "../../redux/slices/products/sliceProducts";

const CardsHome = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch]);
  const { results } = useSelector((state) => state.productsState.list);
  const limitResults = results?.slice(0, 8);
  return (
    <>
      <div className=" w-4/5 mx-auto grid grid-cols-2 md:grid-cols-4 gap-6 rounded-md">
        {limitResults?.map((product) => {
          return (
            <div
              key={product.name}
              className="relative bg-white p-3 rounded-md hover:bg-green-500 hover:transform hover:scale-105 transition duration-300"
              style={{ boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)" }}
            >
              <li key={product.name} className="list-none rounded-lg">
                <Link
                  to={`/farmastack/products`}
                  className="bg-white no-underline group block overflow-hidden border border-slate-200 rounded-md"
                >
                  <img
                    src={product.image}
                    alt=""
                    className="no-underline border-none mx-auto h-[250px] w-[250px] object-cover transition duration-500 group-hover:scale-105 sm:h-[250px] rounded-md"
                  />
                </Link>

                <div>
                  <p className="text-xs text-gray-700 group-hover:underline group-hover:underline-offset-4">
                    {product.category}
                  </p>

                  <Link
                    to={`/farmastack/products`}
                    className="group block overflow-hidden no-underline"
                  >
                    <p className="text-xl text-gray-700 group-hover:underline group-hover:underline-offset-4 text-center no-underline">
                      {product.name}
                    </p>
                  </Link>

                  <p className="mt-2">
                    <span className="sr-only"> Regular Price </span>
                    <span className="tracking-wider text-gray-900">
                      ${product.price}
                    </span>
                  </p>
                </div>
              </li>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default CardsHome;

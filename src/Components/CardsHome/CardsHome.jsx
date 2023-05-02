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
  

      <ul className=" w-4/5 mx-auto grid grid-cols-2 md:grid-cols-4 gap-4 ">
        {limitResults?.map((product) => {
          return (
            <li key={product.name}>
              <Link
                to={`/farmastack/products`}
                className="group block overflow-hidden border border-slate-200   "
              >
                <img
                  src={product.image}
                  alt=""
                  className=" mx-auto h-[250px] w-[250px] object-cover transition duration-500 group-hover:scale-105 sm:h-[250px] "
                />
              </Link>

              <div className="relative bg-white pt-3">
                <p className="text-xs text-gray-700 group-hover:underline group-hover:underline-offset-4">
                  {product.category}
                </p>

                <Link
                to={`/farmastack/products`}
                className="group block overflow-hidden "
              >
                <p className="text-xl text-gray-700 group-hover:underline group-hover:underline-offset-4 text-center">
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
          );
        })}
      </ul>
  
  );
};

export default CardsHome;

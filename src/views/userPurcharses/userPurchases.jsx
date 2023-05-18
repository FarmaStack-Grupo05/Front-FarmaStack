import axios from "axios";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { API_URL } from "../../utils/api";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";

function UserPurchases() {
  const [info, setInfo] = useState(null);
  const [ratings, setRatings] = useState({});
  const [ratedProducts, setRatedProducts] = useState([]);
  const { dataBaseUser: user } = useSelector((state) => state.userState);
  const [isReviewEnabled, setIsReviewEnabled] = useState(false);

  const getUserPurchases = async () => {
    try {
      const { data } = await axios.get(`${API_URL}/order?userId=${user.id}`);
      setInfo(data);
    } catch (error) {
      console.error(error);
    }
  };

  const postReviews = async () => {
    try {
      const selectedProducts = Object.keys(ratings).filter(
        (productId) => ratings[productId] > 0
      );

      if (selectedProducts.length === 0) {
        Swal.fire({
          icon: "error",
          title: "No Ratings Selected",
          text: "Please select a rating for at least one product before sending the review.",
        });
        return;
      }

      const promises = selectedProducts.map((productId) => {
        const body = {
          userID: user.id,
          productId,
          rating: ratings[productId],
        };
        return axios.post(`${API_URL}/review`, body);
      });

      await Promise.all(promises);

      Swal.fire({
        icon: "success",
        title: "Review Sent",
        text: "Your review has been successfully sent.",
      });
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (user) {
      getUserPurchases();
    }
  }, [user]);

  const handleRatingChange = (productId, value) => {
    if (isProductRated(productId)) {
      setRatings((prevRatings) => ({
        ...prevRatings,
        [productId]: value,
      }));
    } else {
      setRatedProducts((prevRatedProducts) => [
        ...prevRatedProducts,
        productId,
      ]);
      setRatings((prevRatings) => ({
        ...prevRatings,
        [productId]: value,
      }));
    }

    const hasRating = Object.values({
      ...ratings,
      [productId]: value,
    }).some((rating) => rating > 0);
    setIsReviewEnabled(hasRating);
  };

  const isProductRated = (productId) => ratedProducts.includes(productId);

  const handleProductRating = (productId) => {
    if (isProductRated(productId)) {
      setRatings((prevRatings) => {
        const updatedRatings = { ...prevRatings };
        delete updatedRatings[productId];
        return updatedRatings;
      });
    } else {
      setRatedProducts((prevRatedProducts) => [
        ...prevRatedProducts,
        productId,
      ]);
    }

    const hasRating = Object.values(ratings).some((rating) => rating > 0);
    setIsReviewEnabled(hasRating);
  };

  return (
    <div>
      <h2 className="text-4xl font-bold text-center mb-4">Shopping</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8 md:gap-10">
        {info?.flatMap((cualquierCosa) =>
          cualquierCosa.OrderItems?.map((e, index) => {
            const productId = e.Product.id;
            const isSingleProduct = cualquierCosa.OrderItems.length === 1;

            return (
              <div
                key={index}
                className={`border border-gray-200 rounded-md p-4 flex flex-col ${
                  isSingleProduct ? "mx-auto" : ""
                }`}
              >
                <Link to={`/farmastack/details/${e.ProductId}`}>
                  <img
                    className="no-underline border-none mx-auto h-auto w-auto object-cover transition duration-500 group-hover:scale-105 sm:h-[250px] rounded-md"
                    src={e.Product.image}
                    alt={e.Product.name}
                  />
                </Link>

                <h3 className="text-lg font-bold mt-2">{e.Product.name}</h3>
                <p className="text-gray-500">${e.Product.price}</p>
                <div className="mt-2">
                  <label htmlFor={`rating-${productId}`} className="mr-2">
                    Rating:
                  </label>
                  <div className="flex items-center">
                    {[1, 2, 3, 4, 5].map((value) => (
                      <button
                        key={value}
                        onClick={() => {
                          handleRatingChange(productId, value);
                        }}
                        className={`text-xl focus:outline-none ${
                          isProductRated(productId) &&
                          ratings[productId] >= value
                            ? "text-yellow-500"
                            : "text-gray-400"
                        }`}
                      >
                        ★
                      </button>
                    ))}

                    <button
                      onClick={postReviews}
                      className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 ml-2 rounded"
                      disabled={
                        !isReviewEnabled ||
                        Object.values(ratings).every((rating) => rating === 0)
                      }
                    >
                      Send Review
                    </button>
                  </div>
                </div>
              </div>
            );
          })
        )}
      </div>
    </div>
  );
}

export default UserPurchases;

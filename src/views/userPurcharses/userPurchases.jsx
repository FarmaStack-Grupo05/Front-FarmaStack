import axios from "axios";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { API_URL } from "../../utils/api";
import Swal from "sweetalert2";

function UserPurchases() {
  const [info, setInfo] = useState(null);
  const [ratings, setRatings] = useState(1);
  const { dataBaseUser: user } = useSelector((state) => state.userState);

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
      const rantingsArray = Object.values(ratings);
      const productArray = Object.keys(ratings);

      const promises = rantingsArray.map((e, index) => {
        const body = {
          userID: user.id,
          productId: productArray[index],
          rating: e,
        };
        return axios.post(`${API_URL}/review`, body);
      });

      await axios.all(promises);

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

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Compras</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {info?.flatMap((cualquierCosa) =>
          cualquierCosa.OrderItems?.map((e, index) => (
            <div key={index} className="border border-gray-200 rounded-md p-4">
              <img
                className="no-underline border-none mx-auto h-auto w-auto object-cover transition duration-500 group-hover:scale-105 sm:h-[250px] rounded-md"
                src={e.Product.image}
                alt={e.Product.name}
              />
              <h3 className="text-lg font-bold mt-2">{e.Product.name}</h3>
              <p className="text-gray-500">${e.Product.price}</p>
              <div className="mt-2">
                <label htmlFor={`rating-${e.Product.id}`} className="mr-2">
                  Rating:
                </label>
                <select
                  id={`rating-${e.Product.id}`}
                  value={ratings[e.Product.id] || 1}
                  onChange={(event) =>
                    setRatings((prevRatings) => ({
                      ...prevRatings,
                      [e.Product.id]: parseInt(event.target.value),
                    }))
                  }
                  className="border border-gray-300 rounded px-2 py-1"
                >
                  {[1, 2, 3, 4, 5].map((value) => (
                    <option key={value} value={value}>
                      {value}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          ))
        )}
      </div>
      <button
        onClick={postReviews}
        className="mt-4 bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded"
      >
        Enviar Reviews
      </button>
    </div>
  );
}

export default UserPurchases;


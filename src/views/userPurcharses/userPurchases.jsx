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
            const ratingsArray = Object.values(ratings);
            const productArray = Object.keys(ratings);

            const promises = ratingsArray.map((e, index) => {
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

    const handleRatingChange = (productId, value) => {
        setRatings((prevRatings) => ({
            ...prevRatings,
            [productId]: value,
        }));
    };

    const isProductRated = (productId) => ratedProducts.includes(productId);

    const handleProductRating = (productId) => {
        if (!isProductRated(productId)) {
            setRatedProducts((prevRatedProducts) => [...prevRatedProducts, productId]);
        }
    };

    return (
        <div>
            <h2 className="text-2xl font-bold mb-4">Shopping</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                {info?.flatMap((cualquierCosa) =>
                    cualquierCosa.OrderItems?.map((e, index) => {
                        const productId = e.Product.id;
                        return (
                            <div key={index} className="border border-gray-200 rounded-md p-4">
                                <Link
                                to={`/farmastack/details/${e.ProductId}`}>
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
                                                    handleProductRating(productId);
                                                }}
                                                className={`text-xl focus:outline-none ${ratings[productId] === value ? 'text-yellow-500' : 'text-gray-400'
                                                    }`}
                                                disabled={isProductRated(productId)}
                                            >
                                                ★
                                            </button>
                                        ))}
                                        <button
                                            onClick={postReviews}
                                            className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 ml-2 rounded"
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


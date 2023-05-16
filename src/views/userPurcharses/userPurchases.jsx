import axios from "axios";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { API_URL } from "../../utils/api";

//esto debería traer las comprar hechas por el usuario: precio, producto; Y ahí mismo poder setear la calificación con un desplegable de 1 a 5. Las compras se mostrarían como en una lista descendente
//hacer un axios a la ruta /order?userId={}  y desestructurar los datos que voy a requerir idproducto nameproduct, precio y otro componente donde le den click y me traiga ese producto por id y me lleve al detalle y poder volver a comprarlo

function UserPurchases() {
    const [info, setInfo] = useState(null)
    const [ratings, setRatings] = useState(1);
    const { dataBaseUser: user } = useSelector((state) => state.userState);
    console.log(user)

    const getUserPurchases = async () => {
        try {
            const { data } = await axios.get(`${API_URL}/order?userId=${user.id}`);
            setInfo(data);
        } catch (error) {
            // Manejo del error de la llamada a la API
            console.error(error);
            // Puedes agregar una lógica adicional para mostrar un mensaje de error al usuario, por ejemplo.
        }
    };
    const postReviews = async () => {

        try {
            const body = {
                userID: user.id,
                productId: info?.map(f => f.OrderItems?.map(e => e.ProductId)),
                rating: ratings
            }
            const { cosa } = await axios.post(`${API_URL}/review`, body)
            console.log(cosa)
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        if (user) {
            getUserPurchases();
        }
    }, [user]);


    console.log(info)




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


export default UserPurchases
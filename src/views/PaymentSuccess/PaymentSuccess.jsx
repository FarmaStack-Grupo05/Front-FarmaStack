import { useEffect, useState } from "react"
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import axios from "axios";

function PaymentSuccess() {
  const { paymentId } = useParams();
  const [payment, setPayment] = useState(null);
  const cart = useSelector((state) => state.cartState);
  const { dataBaseUser: user } = useSelector((state) => state.userState);

  useEffect(() => {
    const getPayment = async () => {
      const { data } = await axios.get(`http://localhost:3001/order`, {
        params: {
          paymentId,
        },
      });
      setPayment(data);
    }

    if (user) {
      getPayment();
    }
  }, [cart.products, paymentId, user])

  return (
    <div className="py-6 px-4 flex flex-col">
      <h1 className="text-2xl font-bold">Payment Success</h1>
      <div className="flex flex-col mt-4">
        <div className="flex flex-col">
          <h2 className="text-xl font-bold">Order Details</h2>
          <div className="flex flex-col mt-4">
            <div className="flex flex-col">
              <h3 className="text-lg font-bold">Products</h3>
              <div className="flex flex-col mt-4">
                {payment?.OrderItems.map((product) => (
                  <div className="flex flex-col" key={product.id}>
                    <div className="flex flex-col">
                      <h4 className="text-md font-bold">{product.name}</h4>
                      <div className="flex flex-col mt-4">
                        <div className="flex flex-col">
                          <p className="text-md font-bold">Quantity: {product.quantity}</p>
                          <p className="text-md font-bold">Price: ${product.price}</p>
                          <p className="text-md font-bold">Subtotal: ${product.subtotal}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
                <div className="flex flex-col">
                  <h4 className="text-md font-bold">Total: ${payment?.total_price}</h4>
                  <h4 className="text-md font-bold">Payment ID: {payment?.payment_id}</h4>
                  {/* <h4 className="text-md font-bold">Status: {payment?.status}</h4> */}
                </div>
              </div>
            </div>
            <div className="flex flex-col mt-4">
              <h3 className="text-lg font-bold">User</h3>
              <div className="flex flex-col mt-4">
                <div className="flex flex-col">
                  <p className="text-md font-bold">Name: {user.name}</p>
                  <p className="text-md font-bold">Address: {user.address}</p>
                  {/* <p className="text-md font-bold">Name: {payment?.user.name}</p>
                  <p className="text-md font-bold">Lastname: {payment?.user.lastname}</p>
                  <p className="text-md font-bold">Email: {payment?.user.email}</p>
                  <p className="text-md font-bold">Address: {payment?.user.address}</p>
                  <p className="text-md font-bold">City: {payment?.user.city}</p>
                  <p className="text-md font-bold">State: {payment?.user.state}</p>
                  <p className="text-md font-bold">Country: {payment?.user.country}</p> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default PaymentSuccess;

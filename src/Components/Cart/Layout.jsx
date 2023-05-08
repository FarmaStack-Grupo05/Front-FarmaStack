import { useSelector } from "react-redux";
import Navbar from '../NavBar/NavBar';
import CheckOut from "./CheckOut";

const Layout = ({ children }) => {
  const { isOpen } = useSelector((state) => state.checkout);
  return (
    <div>
      <Navbar />
      {isOpen && <CheckOut />}
      {children}
    </div>
  );
};

export default Layout;

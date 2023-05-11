import { Link } from "react-router-dom";
import { Home } from "../../views";

const NotFound = () => {
  return (
    <div>
      <h1>NotFoud</h1>
      <Link to="/Home">error 404</Link>
    </div>
  );
};

export default NotFound;

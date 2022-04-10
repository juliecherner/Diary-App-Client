import { Link } from "react-router-dom";
import "./error.scss";

const Error = () => {
  return (
    <div className="error">
      <div>Sorry the page you search for doesn't exists</div>
      <div className="error-link">
        <Link to="/"> Home page </Link>
      </div>
    </div>
  );
};

export default Error;

import { useNavigate } from "react-router-dom";
import classes from "./notFoundPage.module.scss";

const NotFoundPage = () => {
  let navigate = useNavigate();

  const toHomePage = () => {
    navigate("/");
  };

  return (
    <div className={classes.notFoundPage}>
      <h1>Page Not Found</h1>
      <button onClick={toHomePage}>Home Page</button>
    </div>
  );
};

export default NotFoundPage;

import { useNavigate } from "react-router-dom";

const NotFoundPage = () => {
  let navigate = useNavigate();

  const toHomePage = () => {
    navigate("/");
  };
  // in future: create button "Go to Home"!
  return (
    <div className="notFoundPage">
      <h1>Page Not Found</h1>
      <button onClick={toHomePage}>Home Page</button>
    </div>
  );
};

export default NotFoundPage;

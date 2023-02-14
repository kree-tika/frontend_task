import { Navigate } from "react-router-dom";

const NotFound = () => {
  return (
    <div>
      Not Found
      <Navigate to="/" />
    </div>
  );
};

export default NotFound;

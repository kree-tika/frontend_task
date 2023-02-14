import { useContext } from "react";
import { useLocation, useNavigate } from "react-router";
import { UserContext } from "./App";

const LogInButtons = () => {
  const { user, setUser } = useContext(UserContext);
  const navigate = useNavigate();
  const location = useLocation();
  return (
    <>
      <button
        className="btn"
        onClick={() => {
          if (user.loggedIn) return;
          setUser({ loggedIn: true });

          if (location.state?.from) {
            navigate(location.state.from);
          }
        }}
      >
        Log In
      </button>
      <button
        className="btn"
        onClick={() => {
          if (!user.loggedIn) return;
          setUser({ loggedIn: false });
        }}
      >
        Log Out
      </button>
    </>
  );
};

export default LogInButtons;

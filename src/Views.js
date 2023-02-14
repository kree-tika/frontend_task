import { Home } from "./Home";
import { Link, Route, Routes } from "react-router-dom";
import NotFound from "./Error";
import Signin from "./Signin";
import Account from "./Account";
import ProtectedRoutes from "./ProtectedRoutes";

const Views = () => {
  return (
    <>
      <nav>
        <ul>
          <li>
            <Link to="/">Signin</Link>
          </li>
          <li>
            <Link to="/home">Home</Link>
          </li>
          <li>
            <Link to="/account">My Account</Link>
          </li>
        </ul>
      </nav>
      <Routes>
        <Route exact path="/" element={<Signin />}></Route>
        {/* <Route exact path="/app" element={<AppLayout />}></Route> */}
        <Route path="*" element={<NotFound />}></Route>
        <Route element={<ProtectedRoutes />}>
          <Route exact path="/home" element={<Home />}></Route>
          <Route exact path="/account" element={<Account />}></Route>
        </Route>
      </Routes>
    </>
  );
};

export default Views;

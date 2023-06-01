import React from "react";
import { useState } from "react";
import ContactList from "./Q.1/ContactList";
import ParentComponent from "./Q.2/ParentComponent";
import Dashboard from "./Q.3/Dashboard";
import Header from "./Q.4/Header";
import About from "./Q.4/About";
import Contact from "./Q.4/Contact";
import Projects from "./Q.4/Projects";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
  Switch,
} from "react-router-dom";
import LoginPage from "./Q.5/LoginPage";
import PrivateRoute from "./Q.5/PrivateRoute";
// import Func1 from "./Q.6/Func1";
// import Func2 from "./Q.6/Func2";
import SalesChart from "./Q.8/SalesChart";
import UserList from "./Q.10/UserList";

const App = () => {
  const contacts = [
    { name: "John Doe", email: "john.doe@example.com", phone: "123-456-7890" },
    {
      name: "Jane Smith",
      email: "jane.smith@example.com",
      phone: "987-654-3210",
    },
    // Add more contact objects as needed
  ];
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  return (
    <>
      <h1>My Contacts</h1>
      {/* <ContactList contacts={contacts} />
      <ParentComponent />
      <Dashboard /> */}
      <h1>Portfolio</h1>
      <Router>
        <div className="app">
          <Header />
          <main>
            <Routes>
              <Route path="/about" element={<About />} />
              <Route path="/projects" element={<Projects />} />
              <Route path="/contact" element={<Contact />} />
              <Route
                path="/"
                element={
                  <>
                    <h2>Welcome to My Portfolio Website</h2>
                    <p>Update this section with your homepage content.</p>
                  </>
                }
              />
            </Routes>
          </main>
        </div>
      </Router>
      {/* <Func1 />
      <Func2 /> */}
      <h1>My Website</h1>
      {/* <Router>
        <Routes>
          <Route
            path="/private"
            element={
              isAuthenticated ? (
                <PrivateRoute />
              ) : (
                <Navigate to="/login" replace />
              )
            }
          />
          <Route
            path="/login"
            element={<LoginPage setIsAuthenticated={setIsAuthenticated} />}
          />
        </Routes>
      </Router> */}
      <h1>Sales Chart</h1>
      {/* <SalesChart /> */}
      {/* <UserList /> */}
    </>
  );
};

export default App;

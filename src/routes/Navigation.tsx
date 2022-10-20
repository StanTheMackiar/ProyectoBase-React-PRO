import {
  BrowserRouter as Router,
  Navigate,
  NavLink,
  Route,
  Routes,
} from "react-router-dom";
import logo from "../logo.svg";

export const Navigation = () => {
  return (
    <Router>
      <div className="main-layout">
        <nav>
          <img
            src={logo}
            alt="React Logo"
          />
          <ul>
            <li>
              <NavLink
                className={({ isActive }) => (isActive ? "nav-active" : "")}
                to="/home">
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/about"
                className={({ isActive }) => (isActive ? "nav-active" : "")}>
                About
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/users"
                className={({ isActive }) => (isActive ? "nav-active" : "")}>
                Users
              </NavLink>
            </li>
          </ul>
        </nav>

        <Routes>
          <Route
            path="/about"
            element={<h1>About</h1>}
          />
          <Route
            path="/users"
            element={<h1>Users</h1>}
          />
          <Route
            path="/home"
            element={<h1>Home</h1>}
          />
          <Route
            path="/*"
            element={
              <Navigate
                to="/home"
                replace
              />
            }
          />
        </Routes>
      </div>
    </Router>
  );
};

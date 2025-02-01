import { Outlet, Link } from "react-router-dom";
import "./Layout.css";
function Layout() {
  return (
    <>
      <nav className="navbar">
        <h2 className="logo">Brendan Keesling</h2>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about-me">About Me</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
          <li>
            <Link to="/projects">Projects</Link>
          </li>
        </ul>
      </nav>
      <Outlet />
    </>
  );
}

export default Layout;

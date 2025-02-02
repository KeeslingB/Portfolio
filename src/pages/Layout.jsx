import { Outlet, Link } from "react-router-dom";
import "./Layout.css";
function Layout() {
  return (
    <>
      <nav className="navbar">
        <h2 className="logo">Brendan Keesling</h2>
        <Link to="/">Home</Link>
        <Link to="/about-me">About Me</Link>
        <Link to="/contact">Contact</Link>
        <Link to="/projects">Projects</Link>
        <Link to="/resume">Resume</Link>
      </nav>
      <Outlet />
    </>
  );
}

export default Layout;

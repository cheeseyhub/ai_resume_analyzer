import { Link } from "react-router";
const NavBar = () => {
  return (
    <nav className="navbar">
      <Link to="/">
        <p className="text-gradient text-2xl font-bold">Resume</p>
      </Link>
      <Link to="/upload" className="primary-button w-fit">
        Upload
      </Link>
    </nav>
  );
};

export default NavBar;

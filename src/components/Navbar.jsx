import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar">
      <img src="./logo.png" />
      <h1>JobSite</h1>
      <div className="links">
        <Link to="/">Home</Link>
        <Link to="/details">FindJob</Link>
        <Link className="signin" to="/signin">
          SignIn
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;

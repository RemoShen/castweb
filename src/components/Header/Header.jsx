import "./Header.css";
import { Link, NavLink } from "react-router-dom";
import logo from "./castlogo.png";
export default function Header() {
  const handleRouteClick = (e) => {
    e.preventDefault();
    window.location.href = "./System/index.html";
  };

  return (
    <header>
      <img className="logo" src={logo} alt="" />

      {/* <h1 className="title">
        CAST2
      </h1> */}
      <div className="menuContainer">
        <ul className="menu">
          <li>
            <NavLink to="/">HOME</NavLink>
          </li>
          <li>
            <NavLink to="/gallery">GALLERY</NavLink>
          </li>
          <li>
            <NavLink to="/tutorial">TUTORIAL</NavLink>
          </li>
          <li>
            <NavLink to="/about">ABOUT</NavLink>
          </li>
          <li>
            <Link onClick={handleRouteClick}>Launch</Link>
          </li>
        </ul>
      </div>
    </header>
  );
}

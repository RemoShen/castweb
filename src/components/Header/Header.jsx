//create a component called Header
//this component will be used in the App.js file
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
      <h1 className="title">
        Canis Studio <sup>2</sup>
      </h1>
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
            <NavLink to="/user-study">STUDY</NavLink>
          </li>
          <li>
            <Link onClick={handleRouteClick}>START</Link>
          </li>
        </ul>
      </div>
    </header>
  );
}

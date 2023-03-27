//create a component called Header
//this component will be used in the App.js file
import "./Header.css";
import logo from "./castlogo.png";
export default function Header() {
  return (
    <header>
      <img className="logo" src={logo} />
      <h1 className="title">
        Canis Studio <sup>2</sup>
      </h1>
      <div className="menuContainer">
        <ul className="menu">
          <li className="active-item">
            <a href="">HOME</a>
          </li>
          <li className="active-item">
            <a href="">GALLERY</a>
          </li>
          <li className="active-item">
            <a href="">TUTORIAL</a>
          </li>
          {/* <li className="active-item">
            <a href="">ABOUT</a>
          </li> */}
        </ul>
        <button className="startBtn">START</button>
      </div>
    </header>
  );
}

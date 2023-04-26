import React from "react";
import "./Home.css";
import Video from "./Video/Video";
import { Link } from "react-router-dom";
export default function Home() {
  return (
    <div className="teaser-container">
      <div className="teaser-left">
        <div className="teaser-text">
          <h1 className="teaser-pre">Welcome To</h1>
          <h1 className="teaser-pre">The New Canis Studio</h1>
          <p className="teaser-title">
            &mdash; CAST<sup>2</sup>
          </p>
        </div>
        <div className="teaser-Btn">
          <button className="teaserStartBtn" onClick={() => {window.location.href = './System/index.html'}}>START</button>
          <Link to="/gallery">
            <button className="teaserTutorialBtn">GALLERY</button>
          </Link>
        </div>
      </div>
      <div className="teaser-right">
        <Video />
      </div>
    </div>
  );
}

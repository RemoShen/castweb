import React from "react";
import "./Training4.css";
import image from "./purchases.png";
import video from "./rep_train_4.mp4";
export default function Training4({ onNext }) {
  const handleClick1 = () => {
    window.open(
      "https://tgeconf.github.io/publicUserStudy/system/?chartName=purchases"
    );
  };
  const handleClick2 = () => {
    window.open();
  };
  return (
    <form onSubmit={onNext}>
      <div className="chart4">
        <h1 className="chart4-title">Visualization Chart:</h1>
        <img className="chart4-image" src={image} alt="chart"></img>
      </div>
      <div className="chart4">
        <h1 className="chart4-title">Target Animation:</h1>
        <video className="chart4-video" controls>
          <source className="chart4-video" src={video}></source>
        </video>
      </div>
      <div className="chart4-des">
        <div className="train-description">
          Animation Description: axis, legend, and title first, then animate the
          dot, corresponding label and link start from this dot at the same
          time.
        </div>
        <ul className="chart4-list">
          <li>duration: 600ms (dot and label), 1200ms (link)</li>
          <li>
            effect type: fade (axis, title, legend, dot), wipe left (label),
            grow (link)
          </li>
        </ul>
      </div>
      <div className="button">
        <button className="cast-btn" onClick={handleClick1} type="button">
          Load this chart in cast
        </button>
        <button className="cast-btn" onClick={handleClick2} type="button">
          Load this chart in cast<sup>2</sup>
        </button>
        <button className="next-re" type="submit">
          Next
        </button>
      </div>
    </form>
  );
}

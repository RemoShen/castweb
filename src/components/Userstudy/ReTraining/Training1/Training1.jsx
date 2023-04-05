import React from "react";
import "./Training1.css";
import image from "./nightingale.png";
import video from "./rep_train_1.mp4";
export default function Training1({ onNext }) {
  const handleClick1 = () => {
    window.open(
      "https://tgeconf.github.io/publicUserStudy/system/?chartName=nightingale"
    );
  };
  const handleClick2 = () => {
    window.open(
    );
  };
  return (
    <form onSubmit={onNext}>
      <div className="chart">
        <h1 className="chart-title">Visualization Chart:</h1>
        <img className="chart-image" src={image} alt="chart"></img>
      </div>
      <div className="chart">
        <h1 className="chart-title">Target Animation:</h1>
        <video className="chart-video" controls>
          <source className="chart-video" src={video}></source>
        </video>
      </div>
      <div className="chart-des">
        <div className="train-description">
          Animation Description: axis, legend, and title first, then animate
          each cause one after another, within each cause, animate month after
          month.
        </div>
        <ul className="chart-list">
          <li>duration for each wedge: 600ms</li>
          <li>effect type: fade (axis, title, legend), wheel (wedges)</li>
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

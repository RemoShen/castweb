import React from "react";
import "./Test2.css";
import image from "./population.png";
import video from "./rep_test_2.mp4";
export default function Test2({ onNext }) {
  const handleClick1 = () => {
    window.open(
      "https://tgeconf.github.io/publicUserStudy/system/?chartName=worldPopulation"
    );
  };
  const handleClick2 = () => {
    window.open();
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
          bars of both sex by age range.
        </div>
        <ul className="chart-list">
          <li>duration: 300ms</li>
          <li>effect type: wipe left (blue bar), wipe right (pink bar)</li>
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

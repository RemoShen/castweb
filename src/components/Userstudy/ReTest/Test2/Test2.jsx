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
      <div className="chart6">
        <h1 className="chart6-title">Visualization Chart:</h1>
        <img className="chart6-image" src={image} alt="chart"></img>
      </div>
      <div className="chart6">
        <h1 className="chart6-title">Target Animation:</h1>
        <video className="chart6-video" controls>
          <source className="chart6-video" src={video}></source>
        </video>
      </div>
      <div className="chart6-des">
        <div className="train-description">
          Animation Description: axis, legend, and title first, then animate
          bars of both sex by age range.
        </div>
        <ul className="chart6-list">
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

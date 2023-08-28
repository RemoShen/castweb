import React from "react";
import "./Test1.css";
import image from "./co2.png";
import video from "./rep_test_1.mp4";
export default function Test1({ onNext }) {
  const handleClick1 = () => {
    window.open(
      "https://tgeconf.github.io/publicUserStudy/system/?chartName=co2"
    );
  };
  const handleClick2 = () => {
    window.open();
  };
  return (
    <form onSubmit={onNext}>
      <div className="chart5">
        <h1 className="chart5-title">Visualization Chart:</h1>
        <img className="chart5-image" src={image} alt="chart"></img>
      </div>
      <div className="chart5">
        <h1 className="chart5-title">Target Animation:</h1>
        <video className="chart5-video" controls>
          <source className="chart5-video" src={video}></source>
        </video>
      </div>
      <div className="chart5-des">
        <div className="train-description">
          Animation Description: axis, legend, and title first, then line of
          each country start at the same time. For each line, dot and the link
          starts at this dot animate at the same time, then next dot and link.
        </div>
        <ul className="chart5-list">
          <li>duration: 300ms (dots & link)</li>
          <li>effect type: fade (axis, title, legend, dots), grow (link)</li>
        </ul>
      </div>
      <div className="button">
        <button className="cast-btn" onClick={handleClick1} type="button">
          Load this chart in cast
        </button>
        <button className="cast-btn" onClick={handleClick2} type="button">
          Load this chart in CAST
        </button>
        <button className="next-re" type="submit">
          Next
        </button>
      </div>
    </form>
  );
}

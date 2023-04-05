import React from "react";
import "./Test3.css";
import image from "./barnode.png";
import video from "./rep_test_3.mp4";
export default function Test3({ onNext }) {
  const handleClick1 = () => {
    window.open(
      "https://tgeconf.github.io/publicUserStudy/system/?chartName=layering"
    );
  };
  const handleClick2 = () => {
    window.open();
  };
  return (
    <form onSubmit={onNext}>
      <div className="chart7">
        <h1 className="chart7-title">Visualization Chart:</h1>
        <img className="chart7-image" src={image} alt="chart"></img>
      </div>
      <div className="chart7">
        <h1 className="chart7-title">Target Animation:</h1>
        <video className="chart7-video" controls>
          <source className="chart7-video" src={video}></source>
        </video>
      </div>
      <div className="chart7-des">
        <div className="train-description">
          Animation Description: fade in x axis first, then y axis on the left,
          then animate all bars at the same time, then y axis on the right, then
          dot and label at the same time, finally the links one by one.
        </div>
        <ul className="chart7-list">
          <li>
            duration: 300ms (axis), 1000ms (dots, labels, bars, and links)
          </li>
          <li>
            effect type: fade (axis, dots, labels), wipe bottom (bars), wipe
            left (links)
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
          have a rest then next
        </button>
      </div>
    </form>
  );
}

import React from "react";
import "./AuthorRe1.css";
import image from "./co2.png";
export default function AuthorRe1({ onNext }) {
  const handleClick1 = () => {
    window.open(
      "https://tgeconf.github.io/publicUserStudy/system/?chartName=co2"
    );
  };
  const handleClick2 = () => {
    window.open();
  };
  const [reoption1, setOption1] = React.useState("");
  const handleOptionChange = (event) => {
    setOption1(event.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (reoption1 === "") {
      alert("Please choose one option!");
      return;
    }
    onNext({ reoption1 });
  };
  return (
    <form onSubmit={handleSubmit}>
      <div className="chart">
        <h1 className="chart-title">Visualization Chart:</h1>
        <img className="chart-img" src={image} alt="chart"></img>
      </div>
      <div>
        <button className="cast-btn" onClick={handleClick1} type="button">
          open cast
        </button>
        <button className="cast-btn" onClick={handleClick2} type="button">
          open CAST
        </button>
      </div>
      <div className="option-test">
        <input
          className="readingTrainingtest"
          type="radio"
          name="reading1"
          value={0}
          onChange={handleOptionChange}
        ></input>
        I can author the goal animation with both CAST and CAST.
      </div>
      <div className="option-test">
        <input
          className="readingTrainingtest"
          type="radio"
          name="reading1"
          value={1}
          onChange={handleOptionChange}
        ></input>
        I can only author animation by CAST
      </div>
      <div className="option-test">
        <input
          className="readingTrainingtest"
          type="radio"
          name="reading1"
          value={1}
          onChange={handleOptionChange}
        ></input>
        I can only author animation by CAST <sup>2</sup>
      </div>

      <div className="button">
        <button className="next-rec" type="submit">
          Next
        </button>
      </div>
    </form>
  );
}

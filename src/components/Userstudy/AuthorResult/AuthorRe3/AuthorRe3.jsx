import React from "react";
import "./AuthorRe3.css";
import image from "./population.png";
export default function AuthorRe3({ onNext }) {
  const handleClick1 = () => {
    window.open(
      "https://tgeconf.github.io/publicUserStudy/system/?chartName=worldPopulation"
    );
  };
  const handleClick2 = () => {
    window.open();
  };
  const [reoption3, setOption1] = React.useState("");
  const handleOptionChange = (event) => {
    setOption1(event.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (reoption3 === "") {
      alert("Please choose one option!");
      return;
    }
    onNext({ reoption3 });
  };
  return (
    <form onSubmit={handleSubmit}>
      <div className="chart">
        <h1 className="chart-title">Visualization Chart:</h1>
        <img className="chart-img-pop" src={image} alt="chart"></img>
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
          name="reading3"
          value={0}
          onChange={handleOptionChange}
        ></input>
        I can author the goal animation with both CAST and CAST.
      </div>
      <div className="option-test">
        <input
          className="readingTrainingtest"
          type="radio"
          name="reading3"
          value={1}
          onChange={handleOptionChange}
        ></input>
        I can only author animation by CAST
      </div>
      <div className="option-test">
        <input
          className="readingTrainingtest"
          type="radio"
          name="reading3"
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

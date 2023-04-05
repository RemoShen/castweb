import React from "react";
import "./AuthorRe2.css";
import image from "./nightingale.png";
export default function AuthorRe2({ onNext }) {
  const handleClick1 = () => {
    window.open(
      "https://tgeconf.github.io/publicUserStudy/system/?chartName=nightingale"
    );
  };
  const handleClick2 = () => {
    window.open();
  };
  const [reoption2, setOption1] = React.useState("");
  const handleOptionChange = (event) => {
    setOption1(event.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (reoption2 === "") {
      alert("Please choose one option!");
      return;
    }
    onNext({ reoption2 });
  };
  return (
    <form onSubmit={handleSubmit}>
      <div className="chart">
        <h1 className="chart-title">Visualization Chart:</h1>
        <img className="chart-img-ni" src={image} alt="chart"></img>
      </div>
      <div>
        <button className="cast-btn" onClick={handleClick1} type="button">
          open cast
        </button>
        <button className="cast-btn" onClick={handleClick2} type="button">
          open cast<sup>2</sup>
        </button>
      </div>
      <div className="option-test">
        <input
          className="readingTrainingtest"
          type="radio"
          name="reading2"
          value={0}
          onChange={handleOptionChange}
        ></input>
        I can author the goal animation with both CAST and CAST<sup>2</sup>.
      </div>
      <div className="option-test">
        <input
          className="readingTrainingtest"
          type="radio"
          name="reading2"
          value={1}
          onChange={handleOptionChange}
        ></input>
        I can only author animation by CAST
      </div>
      <div className="option-test">
        <input
          className="readingTrainingtest"
          type="radio"
          name="reading2"
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

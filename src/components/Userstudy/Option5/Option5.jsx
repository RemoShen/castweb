import React from "react";
import "./Option5.css";
import test from "./test5.png";
import video1 from "./reading_test_3_1.mp4"
import video2 from "./reading_test_3_2.mp4"
import video3 from "./reading_test_3_3.mp4"
import video4 from "./reading_test_3_4.mp4"
export default function Option5({ onNext }) {
  const [option5, setOption5] = React.useState("");
  const handleOptionChange = (event) => {
    setOption5(event.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (option5 === "") {
      alert("Please choose one option!");
      return;
    }
    onNext({ option5 });
  };
  return (
    <form onSubmit={handleSubmit}>
      <div className="option-title">
        Chart Animation Represented with Visual Language:
      </div>
      <div className="option-image">
        <img className="option-image" src={test} alt="option"></img>
      </div>
      <div className="option-title">
        Please Choose the Corresponding Animation (click the radio button on the
        bottom to choose):
      </div>
      <div className="option-item-container">
        <video className="option-video" controls>
          <source src={video1}></source>
        </video>
        <input
          className="readingTraining5"
          type="radio"
          name="reading5"
          value={0}
          onChange={handleOptionChange}
        ></input>
      </div>
      <div className="option-item-container">
        <video className="option-video" controls>
          <source src={video2}></source>
        </video>
        <input
          className="readingTraining5"
          type="radio"
          name="reading5"
          value={1}
          onChange={handleOptionChange}
        ></input>
      </div>
      <div className="option-item-container">
        <video className="option-video" controls>
          <source src={video3}></source>
        </video>
        <input
          className="readingTraining5"
          type="radio"
          name="reading5"
          value={2}
          onChange={handleOptionChange}
        ></input>
      </div>
      <div className="option-item-container">
        <video className="option-video" controls>
          <source src={video4}></source>
        </video>
        <input
          className="readingTraining5"
          type="radio"
          name="reading5"
          value={3}
          onChange={handleOptionChange}
        ></input>
      </div>

      <button className="next-button" type="submit">
        Next
      </button>
    </form>
  );
}

import React from "react";
import "./Option4.css";
import option from "./option.png";
import video1 from "./reading_test_2_1.mp4";
import video2 from "./reading_test_2_2.mp4";
import video3 from "./reading_test_2_3.mp4";
import video4 from "./reading_test_2_4.mp4";
export default function Option4({ onNext }) {
  const [option4, setOption4] = React.useState("");
  const handleOptionChange = (event) => {
    setOption4(event.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (option4 === "") {
      alert("Please choose one option!");
      return;
    }
    onNext({ option4 });
  };
  return (
    <form onSubmit={handleSubmit}>
      <div className="option-title">
        Chart Animation Represented with Visual Language:
      </div>
      <div className="option-image">
        <img className="option-image" src={option} alt="option"></img>
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
          className="readingTraining4"
          type="radio"
          name="reading4"
          value={0}
          onChange={handleOptionChange}
        ></input>
      </div>
      <div className="option-item-container">
        <video className="option-video" controls>
          <source src={video2}></source>
        </video>
        <input
          className="readingTraining4"
          type="radio"
          name="reading4"
          value={1}
          onChange={handleOptionChange}
        ></input>
      </div>
      <div className="option-item-container">
        <video className="option-video" controls>
          <source src={video3}></source>
        </video>
        <input
          className="readingTraining4"
          type="radio"
          name="reading4"
          value={2}
          onChange={handleOptionChange}
        ></input>
      </div>
      <div className="option-item-container">
        <video className="option-video" controls>
          <source src={video4}></source>
        </video>
        <input
          className="readingTraining4"
          type="radio"
          name="reading4"
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

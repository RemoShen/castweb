import React from "react";
import "./Option1.css";
import train1 from "./train1.png";
import video1 from "./reading_train_0_1.mp4";
import video2 from "./reading_train_0_2.mp4";
import video3 from "./reading_train_0_3.mp4";
import video4 from "./reading_train_0_4.mp4";

export default function Option1({ onNext }) {
  const [option1, setOption1] = React.useState("");
  const handleOptionChange = (event) => {
    setOption1(event.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if(option1 === ""){
      alert("Please choose one option!");
      return;
    }
    onNext({ option1 });
  };
  return (
    <form onSubmit={handleSubmit}>
      <div className="option-title">
        Chart Animation Represented with Visual Language:
      </div>
      <div>
        <img className="option-image" src={train1} alt="option"></img>
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
          className="readingTraining1"
          type="radio"
          name="reading1"
          value={0}
          onChange={handleOptionChange}
        ></input>
      </div>
      <div className="option-item-container">
        <video className="option-video" controls>
          <source src={video2}></source>
        </video>
        <input
          className="readingTraining1"
          type="radio"
          name="reading1"
          value={1}
          onChange={handleOptionChange}
        ></input>
      </div>
      <div className="option-item-container">
        <video className="option-video" controls>
          <source src={video3}></source>
        </video>
        <input
          className="readingTraining1"
          type="radio"
          name="reading1"
          value={2}
          onChange={handleOptionChange}
        ></input>
      </div>
      <div className="option-item-container">
        <video className="option-video" controls>
          <source src={video4}></source>
        </video>
        <input
          className="readingTraining1"
          type="radio"
          name="reading1"
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

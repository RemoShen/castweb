import React from "react";
import "./Option2.css";
import train2 from "./train2.png";
import video1 from "./reading_train_1_1.mp4";
import video2 from "./reading_train_1_2.mp4";
import video3 from "./reading_train_1_3.mp4";
import video4 from "./reading_train_1_4.mp4";
export default function Option2({ onNext }) {
  const [option2, setOption2] = React.useState("");
  const handleOptionChange = (event) => {
    setOption2(event.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if(option2 === ""){
      alert("Please choose one option!");
      return;
    }
    onNext({ option2 });
  };
  return (
    <form onSubmit={handleSubmit}>
      <div className="option-title">
        Chart Animation Represented with Visual Language:
      </div>
      <div className="0">
        <img className="option-image" src={train2} alt="option"></img>
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
          className="readingTraining2"
          type="radio"
          name="reading0"
          value={0}
          onChange={handleOptionChange}
        ></input>
      </div>
      <div className="option-item-container">
        <video className="option-video" controls>
          <source src={video2}></source>
        </video>
        <input
          className="readingTraining2"
          type="radio"
          name="reading0"
          value={1}
          onChange={handleOptionChange}
        ></input>
      </div>
      <div className="option-item-container">
        <video className="option-video" controls>
          <source src={video3}></source>
        </video>
        <input
          className="readingTraining2"
          type="radio"
          name="reading0"
          value={2}
          onChange={handleOptionChange}
        ></input>
      </div>
      <div className="option-item-container">
        <video className="option-video" controls>
          <source src={video4}></source>
        </video>
        <input
          className="readingTraining2"
          type="radio"
          name="reading0"
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

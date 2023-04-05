import React from "react";
import "./Option6.css";
import test6 from "./test6.png";
import video1 from "./option6_1.mp4";
import video2 from "./option6_2.mp4";
import video3 from "./option6_3.mp4";
import video4 from "./option6_4.mp4";
export default function Option6({ onNext }) {
  const [option6, setOption6] = React.useState("");
  const handleOptionChange = (event) => {
    setOption6(event.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (option6 === "") {
      alert("Please choose one option!");
      return;
    }
    onNext({ option6 });
  };
  return (
    <form onSubmit={handleSubmit}>
      <div className="option-title">
        Chart Animation Represented with Visual Language:
      </div>
      <div className="option-image">
        <img className="option-image" src={test6} alt="option"></img>
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
          className="readingTraining6"
          type="radio"
          name="reading6"
          value={0}
          onChange={handleOptionChange}
        ></input>
      </div>
      <div className="option-item-container">
        <video className="option-video" controls>
          <source src={video2}></source>
        </video>
        <input
          className="readingTraining6"
          type="radio"
          name="reading6"
          value={1}
          onChange={handleOptionChange}
        ></input>
      </div>
      <div className="option-item-container">
        <video className="option-video" controls>
          <source src={video3}></source>
        </video>
        <input
          className="readingTraining6"
          type="radio"
          name="reading6"
          value={2}
          onChange={handleOptionChange}
        ></input>
      </div>
      <div className="option-item-container">
        <video className="option-video" controls>
          <source src={video4}></source>
        </video>
        <input
          className="readingTraining6"
          type="radio"
          name="reading6"
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

import React from "react";
import "./Option3.css";
import train3 from "./track.png"
import video1 from "./option3_1.mp4";
import video2 from "./option3_2.mov";
import video3 from "./option3_3.mp4";
import video4 from "./option3_4.mp4";
export default function Option3({ onNext }) {
  const [option3, setOption3] = React.useState("");
  const handleOptionChange = (event) => {
    setOption3(event.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (option3 === "") {
      alert("Please choose one option!");
      return;
    }
    onNext({ option3 });
  };
  return (
    <form onSubmit={handleSubmit}>
      <div className="option-title">
        Chart Animation Represented with Visual Language:
      </div>
      <div className="option-image">
        <img className="option-image" src={train3} alt="option"></img>
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
          className="readingTraining3"
          type="radio"
          name="reading3"
          value={0}
          onChange={handleOptionChange}
        ></input>
      </div>
      <div className="option-item-container">
        <video className="option-video" controls>
          <source src={video2}></source>
        </video>
        <input
          className="readingTraining3"
          type="radio"
          name="reading3"
          value={1}
          onChange={handleOptionChange}
        ></input>
      </div>
      <div className="option-item-container">
        <video className="option-video" controls>
          <source src={video3}></source>
        </video>
        <input
          className="readingTraining3"
          type="radio"
          name="reading3"
          value={2}
          onChange={handleOptionChange}
        ></input>
      </div>
      <div className="option-item-container">
        <video className="option-video" controls>
          <source src={video4}></source>
        </video>
        <input
          className="readingTraining3"
          type="radio"
          name="reading3"
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

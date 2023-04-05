import React from "react";
import "./ChooseInteraction.css";
import choose from "./selection.png";
import complete from "./complete.png";
export default function ChooseInteraction({ onNext }) {
  return (
    <form onSubmit={onNext}>
      <div className="choose-interaction-title">Select Interaction</div>
      <div>
        <img className="choose-img" src={choose} alt="choose" />
      </div>
      <div>
        <img className="complete-img" src={complete} alt="complete-img" />
      </div>

      <button className="next-button" type="submit">
        Next
      </button>
    </form>
  );
}

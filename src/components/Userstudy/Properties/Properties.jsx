import React from "react";
import "./Properties.css";
import image from "./properties.png";
export default function Properties({ onNext }) {
  return (
    <form onSubmit={onNext}>
      <div>
        <div id="other-properties">
          <p id="properties-title">Some Other Animation Properties:</p>
          <ul id="properties-list">
            <li>Duration of each keyframe</li>
            <li>Delay of each keyframe(group)</li>
            <li>Animation effect type</li>
          </ul>

        </div>
        <img
          id="properties-image"
          src={image}
          alt="properties_image"
        />
        <button className="next-button" type="submit">
          Next
        </button>
      </div>
    </form>
  );
}

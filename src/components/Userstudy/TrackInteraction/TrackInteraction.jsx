import React from "react";
import "./TrackInteraction.css";
import effect from "./effect.png";
import spec from "./spec.png";
export default function TrackInteraction({ onNext }) {
  return (
    <form onSubmit={onNext}>
      <div className="track-interaction-title">Track Interaction</div>
      <div>
        <img className="spec-img" src={spec} alt="spec" />
      </div>
      <div>
        <img className="effect-img" src={effect} alt="effect" />
      </div>
      <button className="next-button" type="submit">
        Next
      </button>
    </form>
  );
}

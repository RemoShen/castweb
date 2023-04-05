import React from "react";
import "./PanelInteraction.css";
import panel from "./panel.png";
export default function PanelInteraction({ onNext }) {
  return (
    <form onSubmit={onNext}>
      <div className="panel-interaction-title">Panel Interaction</div>
      <div>
        <img className="panel" src={panel} alt="panel" />
      </div>
      <button className="next-button" type="submit">
        Next
      </button>
    </form>
  );
}

import React from "react";
import "./ReproduceTutorial.css";
export default function ReproduceTutorial({ onNext }) {
  return (
    <form onSubmit={onNext}>
      <div className="reproduce-tutorial-page">
        <div className="reproduce-tutorial-title">
          Animation Reproduction with CAST & Canis Studio<sup>2</sup>
        </div>
        <ol className="intruduce-ol">
          <li className="first-li">Tutorial</li>
          <ul className="reproduce-tutorial-sub">
            <li className="first-sub-li">
              Introduce all interactions in Canis Studio<sup>2</sup>.
            </li>
          </ul>
          <li>Traning</li>
          <ul className="reproduce-tutorial-sub">
            <li>
              You will be asked to reproduce 3 example animations with CAST &
              Canis Studio<sup>2</sup>. And you can ask questions or check your
              reproduction result in this phase.
            </li>
          </ul>
          <li>Test</li>
          <ul className="reproduce-tutorial-sub">
            <li>Do 3 more reproduction result.</li>
          </ul>
        </ol>
        <button className="next-button" type="submit">
          Next
        </button>
      </div>
    </form>
  );
}

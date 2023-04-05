import React from "react";
import "./IntroduceTutorial.css";
export default function IntroduceTutorial({ onNext }) {
  return (
    <form onSubmit={onNext}>
      <div className="introduce-tutorial-page">
        <div className="introduce-tutorial-title">Visual Language</div>
        <ol className="intruduce-ol">
          <li className="first-li">Tutorial</li>
          <ul className="introduce-tutorial-sub">
            <li className="first-sub-li">
              Introduce the visual language used to represent animated
              visualization charts.
            </li>
          </ul>
          <li>Traning</li>
          <ul className="introduce-tutorial-sub">
            <li>
              You will see 3 examples, each example contains one chart animation
              represented with visual language and a series of animations. You
              need to choose which animation corresponds to the one represented
              with the visual language. The right answer will be shown to you
              after you made your choice.
            </li>
          </ul>
          <li>Test</li>
          <ul className="introduce-tutorial-sub">
            <li>Do 3 more Read&Choose test.</li>
          </ul>
        </ol>
        <button className="next-button" type="submit">
          Next
        </button>
      </div>
    </form>
  );
}

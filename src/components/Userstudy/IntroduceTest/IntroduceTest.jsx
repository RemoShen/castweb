import React from "react";
import "./IntroduceTest.css";
export default function IntroduceTest({ onNext }) {
  return (
    <form onSubmit={onNext}>
      <div className="introduce-test-page">
        <div className="introduce-test-title">Visual Language</div>
        <ol className="intruduce-ol">
          <li>Tutorial</li>
          <ul className="introduce-test-sub">
            <li>
              Introduce the visual language used to represent animated
              visualization charts.
            </li>
          </ul>
          <li>Traning</li>
          <ul className="introduce-test-sub">
            <li>
              You will see 3 examples, each example contains one chart animation
              represented with visual language and a series of animations. You
              need to choose which animation corresponds to the one represented
              with the visual language. The right answer will be shown to you
              after you made your choice.
            </li>
          </ul>
          <li className="first-li">Test</li>
          <ul className="introduce-test-sub">
            <li className="first-sub-li">Do 3 more Read&Choose test.</li>
          </ul>
        </ol>
        <button className="next-button" type="submit">
          Next
        </button>
      </div>
    </form>
  );
}

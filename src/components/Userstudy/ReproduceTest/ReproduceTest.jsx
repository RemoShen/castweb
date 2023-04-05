import React from "react";
import "./ReproduceTest.css";
export default function ReproduceTest({ onNext }) {
  return (
    <form onSubmit={onNext}>
      <div className="reproduce-test-page">
        <div className="reproduce-test-title">
          Animation Reproduction with CAST & Canis Studio<sup>2</sup>
        </div>
        <ol className="intruduce-ol">
          <li>Tutorial</li>
          <ul className="reproduce-test-sub">
            <li>
              Introduce all interactions in Canis Studio<sup>2</sup>.
            </li>
          </ul>
          <li>Traning</li>
          <ul className="reproduce-test-sub">
            <li>
              You will be asked to reproduce 3 example animations with CAST &
              Canis Studio<sup>2</sup>. And you can ask questions or check your
              reproduction result in this phase.
            </li>
          </ul>
          <li className="first-li">Test</li>
          <ul className="reproduce-test-sub">
            <li className="first-sub-li">Do 3 more reproduction result.</li>
          </ul>
        </ol>
        <button className="next-button" type="submit">
          Next
        </button>
      </div>
    </form>
  );
}

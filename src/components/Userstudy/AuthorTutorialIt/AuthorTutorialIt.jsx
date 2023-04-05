import React from "react";
import "./AuthorTutorialIt.css";
export default function AuthorTutorialIt({ onNext }) {
  return (
    <form onSubmit={onNext}>
      <div className="panel-interaction-title">Some pre-work</div>
      <ul className="at">
        <li className="atlist">
          <span className="bold">
            First, you need to thoroughly understand the input '.dsvg' chart
            with the help of a live guide
          </span>
        </li>
        <li  className="atlist">
          <span className="bold">
            Secondly, you need to portray a meaningful animation scene.
          </span>
        </li>
        <li  className="atlist">
          <span className="bold">
            Then, you need to figure out how to generate each step of the animation
          </span>
        </li>
        <li  className="atlist">
          <span className="bold">
            Finally, you need to use the CAST and Canis Studio<sup>2</sup> to create the animation
          </span>
        </li>
      </ul>
      <button className="next-button" type="submit">
        Next
      </button>
    </form>
  );
}

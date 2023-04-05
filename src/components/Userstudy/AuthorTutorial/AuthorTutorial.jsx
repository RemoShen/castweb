import React from "react";
import "./AuthorTutorial.css";
export default function AuthorTutorial({ onNext }) {
  return (
    <form onSubmit={onNext}>
      <div className="author-tutorial-page">
        <div className="author-tutorial-title">
          Author expressive && meaningful animations with Canis Studio
          <sup>2</sup>
        </div>
        <ol className="intruduce-ol">
          <li className="first-li">Tutorial</li>
          <ul className="author-tutorial-sub">
            <li className="first-sub-li">Introduce some preliminary work</li>
          </ul>
          <li>Author</li>
          <ul className="author-tutorial-sub">
            <li>
              You will be asked to create 3 animations of your own using CAST
              and Canis Studio
              <sup>2</sup>
            </li>
          </ul>
        </ol>
        <button className="next-button" type="submit">
          Next
        </button>
      </div>
    </form>
  );
}

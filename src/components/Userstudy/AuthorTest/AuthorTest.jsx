import React from "react";
import "./AuthorTest.css";
export default function AuthorTest({ onNext }) {
  return (
    <form onSubmit={onNext}>
      <div className="author-test-page">
        <div className="author-test-title">
          Author expressive && meaningful animations with Canis Studio
          <sup>2</sup>
        </div>
        <ol className="intruduce-ol">
          <li>Tutorial</li>
          <ul className="author-test-sub">
            <li>Introduce some preliminary work</li>
          </ul>
          <li  className="first-li">Author</li>
          <ul className="author-test-sub">
            <li  className="first-sub-li">
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

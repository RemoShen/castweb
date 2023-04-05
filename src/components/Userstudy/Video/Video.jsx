import React from "react";
import "./Video.css";
import video from "./video.mp4";

export default function Video({ onNext }) {
  return (
    <form onSubmit={onNext}>
      <div className="first-video-page">
        <h1 className="first-video-title">Please see the video</h1>
        <video className="first-video" controls>
          <source src={video} type="video/mp4" />
        </video>
        <button className="next-button" type="submit">
          Continue
        </button>
      </div>
    </form>
  );
}

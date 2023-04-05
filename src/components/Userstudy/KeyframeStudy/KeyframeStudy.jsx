import React from "react";
import "./KeyframeStudy.css";
import kf_video from "./kf_study.mp4";
import kf_image from "./kf_study.png";
export default function KeyframeStudy({ onNext }) {
  return (
    <form onSubmit={onNext}>
      <div>
        <video id="kf-study-video" controls>
          <source src={kf_video} type="video/mp4" />
        </video>
        <img id="kf-study-image" src={kf_image} alt="kf_image"/>
        <button className="next-button" type="submit">
          Next
        </button>
      </div>
    </form>
  );
}

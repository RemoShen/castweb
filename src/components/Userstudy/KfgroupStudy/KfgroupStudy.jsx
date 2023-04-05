import React from "react";
import "./KfgroupStudy.css";
import kf_video from "./group_study.mp4";
import kf_image from "./group_study.png";
export default function KeyframeStudy({ onNext }) {
  return (
    <form onSubmit={onNext}>
      <div>
        <video id="group-study-video" controls>
          <source src={kf_video} type="video/mp4" />
        </video>
        <img id="group-study-image" src={kf_image} alt="kf_image"/>
        <button className="next-button" type="submit">
          Next
        </button>
      </div>
    </form>
  );
}

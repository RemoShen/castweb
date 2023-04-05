import React from "react";
import "./Kftiming.css";
import onekf_i from "./onekf.png";
import onekf_video from "./onekf.mp4";
import onebyone_i from "./onebyone.png";
import onebyone_video from "./onebyone.mp4";
import delay1_i from "./delay1.png";
import delay1_video from "./delay1.mp4";
import delay2_i from "./delay2.png";
import delay2_video from "./delay2.mp4";
export default function Kftiming({ onNext }) {
  return (
    <form onSubmit={onNext}>
      <div id="kftiming">
        <div className="kf-timing-list">
          <span className="kf-timing-span">One Keyframe</span>
          <video className="kf-timing-video" controls>
            <source src={onekf_video} type="video/mp4" />
          </video>
          <img
            className="kf-timing-image"
            src={onekf_i}
            alt=""
          ></img>
        </div> <div className="kf-timing-list">
          <span className="kf-timing-span">One by one &nbsp;&nbsp;&nbsp;</span>
          <video className="kf-timing-video" controls>
            <source src={onebyone_video} type="video/mp4" />
          </video>
          <img
            className="kf-timing-image"
            src={onebyone_i}
            alt=""
          ></img>
        </div>
        <div className="kf-timing-list">
          <span className="kf-timing-span">Adjust delay &lt;0</span>
          <video className="kf-timing-video" controls>
            <source src={delay1_video} type="video/mp4" />
          </video>
          <img
            className="kf-timing-image"
            src={delay1_i}
            alt=""
          ></img>
        </div>
        <div className="kf-timing-list">
          <span className="kf-timing-span">Adjust delay &gt;0</span>
          <video className="kf-timing-video" controls>
            <source src={delay2_video} type="video/mp4" />
          </video>
          <img
            className="kf-timing-image"
            src={delay2_i}
            alt=""
          ></img>
        </div>

        <button className="next-button" type="submit">
          Next
        </button>
      </div>
    </form>
  );
}

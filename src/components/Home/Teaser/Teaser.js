import Video from "../Video/Video";
import "./Teaser.css";
export default function Teaser() {
  return (
    <div className="teaser-container">
      <div className="teaser-left">
        <div className="teaser-text">
          <h1>Welcome To</h1>
          <h1>The New Canis Studio</h1>
          <p>
            &mdash; CAST<sup>2</sup>
          </p>
        </div>
        <div className="teaser-Btn">
          <button className="teaserStartBtn">START</button>
          <button className="teaserTutorialBtn">TUTORIAL</button>
        </div>
      </div>
      <div className="teaser-right">
        <Video />
      </div>
    </div>
  );
}

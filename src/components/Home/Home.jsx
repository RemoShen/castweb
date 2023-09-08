import React from "react";
import "./Home.css";
import image1 from "./feature1.png";
import image2 from "./feature2.png";
import image3 from "./feature3.png";
import video1 from "./teaser1.mp4";
export default function Home() {
  // const LottieAnimation = ({ animationData }) => {
  //   const animationContainer = useRef(null);
  //   let animation = null;
  //   useEffect(() => {
  //     // eslint-disable-next-line
  //     animation = lottie.loadAnimation({
  //       container: animationContainer.current,
  //       renderer: "svg",
  //       loop: true,
  //       autoplay: true,
  //       animationData: animationData,
  //     });
  //   }, []);

  //   return (
  //     <div
  //       style={{
  //         position: "relative",
  //         width: "200px",
  //         height: "200px",
  //       }}
  //     >
  //       <div
  //         ref={animationContainer}
  //         style={{
  //           position: "absolute",
  //           width: "200px",
  //           height: "200px",
  //           transition: "opacity 0.3s ease",
  //         }}
  //       />
  //     </div>
  //   );
  // };
  // const galleryData = [
  //   {
  //     id: 1,
  //     animationData: gal1_ani,
  //     staticImage: gal1_img,
  //     title: "Salary and employment percentages",
  //   },
  //   {
  //     id: 2,
  //     animationData: gal2_ani,
  //     staticImage: gal2_img,
  //     title: "Most Requested Diner Dessert",
  //   },
  //   {
  //     id: 3,
  //     animationData: gal3_ani,
  //     staticImage: gal3_img,
  //     title: "The Price of the Oil",
  //   },
  //   {
  //     id: 4,
  //     animationData: gal4_ani,
  //     staticImage: gal4_img,
  //     title: "Event Plan Gantt Chart",
  //   },
  //   {
  //     id: 5,
  //     animationData: gal5_ani,
  //     staticImage: gal5_img,
  //     title: "Fruit Sales in 2001 and 2002",
  //   },
  //   {
  //     id: 6,
  //     animationData: gal6_ani,
  //     staticImage: gal6_img,
  //     title: "Doughnut Purchase(1996-2014)",
  //   },
  //   {
  //     id: 7,
  //     animationData: gal7_ani,
  //     staticImage: gal7_img,
  //     title: "Casuses of Mortality over Time",
  //   },
  //   {
  //     id: 8,
  //     animationData: gal8_ani,
  //     staticImage: gal8_img,
  //     title: "September Weather in New York",
  //   },
  //   {
  //     id: 9,
  //     animationData: gal9_ani,
  //     staticImage: gal9_img,
  //     title: "Mobile Operating System Market Share",
  //   },
  //   {
  //     id: 10,
  //     animationData: gal10_ani,
  //     staticImage: gal10_img,
  //     title: "World Population Pyramid of 2017",
  //   },
  //   // {
  //   //   id: 11,
  //   //   animationData: gal11_ani,
  //   //   staticImage: gal11_img,
  //   //   title: "Ranking of Carbon Dioxide Emissions",
  //   // },
  //   // {
  //   //   id: 12,
  //   //   animationData: gal12_ani,
  //   //   staticImage: gal12_img,
  //   //   title: "Doughnut Purchase(1996-2014)",
  //   // },
  // ];
  return (
    <div className="teaser-container">
      <div className="teaser-top">
        <div className="teaser-text">
          <h1 className="teaser-pre">CAST&mdash;Canis Studio</h1>
          <p className="teaser-par">
            CAST provides an easy access to authoring expressive chart
            animations especially for people who lacks programming skills. It
            represents the animation with the means of an intuitive visual
            language. And by interactively editing the visual elements, the
            designer can alter the animation properties. Under the
            keyframe-based authoring paradigm, CAST enables the designer to
            create animations in three steps: keyframe construction, keyframe
            sequencing and keyframe properties specification. Meanwhile, in
            order to improve the efficiency and rationality of the result
            animations, CAST also proposed suggestion strategies in keyframe
            construction and sequencing.
          </p>
          <button
            className="teaserBtn"
            onClick={() => {
              window.location.href = "./System/index.html";
            }}
          >
            VISIT CAST (Version 2)
          </button>
          <button
            className="teaserBtn"
            onClick={() => {
              window.location.href = "https://ideas-laboratory.github.io/cast/system";
            }}
          >
            VISIT CAST (Version 1)
          </button>
        </div>
      </div>
      <div className="feature-container">
        <div className="feature-inner-container-row">
          <div className="sub-feature-inner-container">
            <div className="split"></div>
            <div
              className="img-div"
              style={{ backgroundImage: `url(${image1})` }}
            ></div>
            <h5>Explicit Visual language</h5>
            <p>
              CAST uses a visual language which can explicitly describe the
              chart animation process.
            </p>
          </div>
          <div className="sub-feature-inner-container">
            <div className="split"></div>
            <div
              className="img-div"
              style={{ backgroundImage: `url(${image2})` }}
            ></div>
            <h5>No Textual Programming</h5>
            <p>
              CAST avoids textual coding by providing intuitive interactions
              over the visual language to specify chart animations.
            </p>
          </div>
          <div className="sub-feature-inner-container">
            <div className="split"></div>
            <div
              className="img-div"
              style={{ backgroundImage: `url(${image3})` }}
            ></div>
            <h5>Efficient Construction</h5>
            <p>
              CAST provides recommandation on keyframe construction and
              sequencing in order to improve the efficiency and rationality.
            </p>
          </div>
        </div>
      </div>
      <div className="feature-container">
        <div className="split"></div>
        <br />
        <h4>How It Works</h4>
        <div className="feature-inner-container-col">
          <div className="feature-text">
            <p>
              This video shows how CAST works in action with 1 examples
              scenarios.
            </p>
          </div>
          <div className="feature-illus">
            <div style={{ width: "100%", height: "auto" }}>
              <video
                src={video1}
                // preload="auto"
                controls={true}
                style={{width: "100%", height: "auto"}}
              ></video>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

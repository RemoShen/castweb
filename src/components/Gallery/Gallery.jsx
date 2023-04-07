import React, { useState, useRef, useEffect } from "react";
import {Link} from "react-router-dom";
import "./Gallery.css";
import lottie from "lottie-web";
import gal1_ani from "./gal1/hiring.json";
import gal1_img from "./gal1/hiring.png";
import gal2_ani from "./gal2/co2.json";
import gal2_img from "./gal2/co2.png";
import gal3_ani from "./gal3/driving.json";
import gal3_img from "./gal3/driving.png";
import gal4_ani from "./gal4/nightingale.json";
import gal4_img from "./gal4/nightingale.png";
import gal5_ani from "./gal5/population.json";
import gal5_img from "./gal5/population.png";
import gal6_ani from "./gal6/purchase.json";
import gal6_img from "./gal6/purchase.png";
import gal7_ani from "./gal7/os.json";
import gal7_img from "./gal7/os.png";
import gal8_ani from "./gal8/flare.json";
import gal8_img from "./gal8/flare.png";
import gal9_ani from "./gal9/chinapm.json";
import gal9_img from "./gal9/chinapm.png";

export default function Gallery() {
  const LottieAnimation = ({ animationData, staticImage }) => {
    const [isHovering, setIsHovering] = useState(false);
    const animationContainer = useRef(null);
    let animation = null;

    useEffect(() => {
      animation = lottie.loadAnimation({
        container: animationContainer.current,
        renderer: "svg",
        loop: true,
        autoplay: false,
        animationData: animationData,
      });
    }, []);

    const handleMouseEnter = () => {
      if (animation) {
        animation.play();
      }
      setIsHovering(true);
    };

    const handleMouseLeave = () => {
      if (animation) {
        animation.stop();
      }
      setIsHovering(false);
    };

    return (
      <div
        style={{
          position: "relative",
          width: "300px",
          height: "300px",
        }}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <img
          src={staticImage}
          alt="Static Image"
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            display: isHovering ? "none" : "block",
            transition: "opacity 0.3s ease",
          }}
        />
        <div
          ref={animationContainer}
          style={{
            position: "relative",
            top: -300,
            left: 0,
            width: "100%",
            height: "100%",
            display: isHovering ? "block" : "none",
            transition: "opacity 0.3s ease",
          }}
        />
      </div>
    );
  };
  const galleryData = [
    {
      id: 1,
      animationData: gal1_ani,
      staticImage: gal1_img,
      title: "Salary and employment percentages",
    },
    {
      id: 2,
      animationData: gal2_ani,
      staticImage: gal2_img,
      title: "Ranking of Carbon Dioxide Emissions",
    },
    {
      id: 3,
      animationData: gal3_ani,
      staticImage: gal3_img,
      title: "The Price of the Oil",
    },
    {
      id: 4,
      animationData: gal4_ani,
      staticImage: gal4_img,
      title: "Casuses of Mortality over Time",
    },
    {
      id: 5,
      animationData: gal5_ani,
      staticImage: gal5_img,
      title: "World Population Pyramid of 2017",
    },
    {
      id: 6,
      animationData: gal6_ani,
      staticImage: gal6_img,
      title: "Doughnut Purchase(1996-2014)",
    },
    {
      id: 7,
      animationData: gal7_ani,
      staticImage: gal7_img,
      title: "Mobile Operating System Market Share",
    },
    {
      id: 8,
      animationData: gal8_ani,
      staticImage: gal8_img,
      title: "Flare",
    },
    {
      id: 9,
      animationData: gal9_ani,
      staticImage: gal9_img,
      title: "PM2.5 Air Quality Index in China",
    },
  ];

  return (
    <div id="gallery-box">
      <h1>Gallery &ndash; Animation & Video</h1>
      <div className="gallery">
        {/* <div className="row"> */}
        {galleryData.map((item, index) => {
          return (
            <Link className="gallery-link" to={`/gallery/${index}`} key={index}>
              <div className="item">
                <LottieAnimation
                  animationData={item.animationData}
                  staticImage={item.staticImage}
                ></LottieAnimation>
                <h3>{item.title}</h3>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
}

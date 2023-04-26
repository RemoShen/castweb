import React, { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Gallery.css";
import lottie from "lottie-web";
import gal1_ani from "./gal1/hiring.json";
import gal1_img from "./gal1/hiring.png";
import gal2_ani from "./gal2/dessert.json";
import gal2_img from "./gal2/dessert.png";
import gal3_ani from "./gal3/driving.json";
import gal3_img from "./gal3/driving.png";
import gal4_ani from "./gal4/gantt.json";
import gal4_img from "./gal4/gantt.png";
import gal5_ani from "./gal5/fruitsale.json";
import gal5_img from "./gal5/fruitsale.png";
import gal6_ani from "./gal6/education.json";
import gal6_img from "./gal6/education.png";
import gal7_ani from "./gal7/nightingale.json";
import gal7_img from "./gal7/nightingale.png";
import gal8_ani from "./gal8/weather.json";
import gal8_img from "./gal8/weather.png";
import gal9_ani from "./gal9/os.json";
import gal9_img from "./gal9/os.png";
import gal10_ani from "./gal10/worldPopulation.json";
import gal10_img from "./gal10/worldPopulation.png";
import gal11_img from "./gal11/co2.png";
import gal11_ani from "./gal11/co2.json";
import gal12_img from "./gal12/purchase.png";
import gal12_ani from "./gal12/purchase.json";

export default function Gallery() {
  const LottieAnimation = ({ animationData, staticImage }) => {
    const [isHovering, setIsHovering] = useState(false);
    const animationContainer = useRef(null);
    let animation = null;

    useEffect(() => {
      // eslint-disable-next-line
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
        <div
          ref={animationContainer}
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "300px",
            height: "300px",
            // display: isHovering ? "block" : "none",
            opacity: isHovering ? 1 : 0,
            transition: "opacity 0.3s ease",
          }}
        />
        <img
          src={staticImage}
          alt=""
          style={{
            position: "relative",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            // display: isHovering ? "none" : "block",
            opacity: isHovering ? 0 : 1,
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
      title: "Most Requested Diner Dessert",
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
      title: "Event Plan Gantt Chart",
    },
    {
      id: 5,
      animationData: gal5_ani,
      staticImage: gal5_img,
      title: "Fruit Sales in 2001 and 2002",
    },
    {
      id: 6,
      animationData: gal6_ani,
      staticImage: gal6_img,
      title: "Higher Education v.s. Obesity",
    },
    {
      id: 7,
      animationData: gal7_ani,
      staticImage: gal7_img,
      title: "Casuses of Mortality over Time",
    },
    {
      id: 8,
      animationData: gal8_ani,
      staticImage: gal8_img,
      title: "September Weather in New York",
    },
    {
      id: 9,
      animationData: gal9_ani,
      staticImage: gal9_img,
      title: "Mobile Operating System Market Share",
    },
    {
      id: 10,
      animationData: gal10_ani,
      staticImage: gal10_img,
      title: "World Population Pyramid of 2017",
    },
    {
      id: 11,
      animationData: gal11_ani,
      staticImage: gal11_img,
      title: "Ranking of Carbon Dioxide Emissions",
    },
    {
      id: 12,
      animationData: gal12_ani,
      staticImage: gal12_img,
      title: "Doughnut Purchase(1996-2014)",
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

import React, { useRef, useEffect } from "react";
import "./Home.css";
import Teaser from "./teaser.png";
import { Link } from "react-router-dom";
import lottie from "lottie-web";
import gal1_ani from "../Gallery/gal1/hiring.json";
import gal1_img from "../Gallery/gal1/hiring.png";
import gal2_ani from "../Gallery/gal2/dessert.json";
import gal2_img from "../Gallery/gal2/dessert.png";
import gal3_ani from "../Gallery/gal3/driving.json";
import gal3_img from "../Gallery/gal3/driving.png";
import gal4_ani from "../Gallery/gal4/gantt.json";
import gal4_img from "../Gallery/gal4/gantt.png";
import gal5_ani from "../Gallery/gal5/fruitsale.json";
import gal5_img from "../Gallery/gal5/fruitsale.png";
import gal6_ani from "../Gallery/gal6/gdp.json";
import gal6_img from "../Gallery/gal6/gdp.png";
import gal7_ani from "../Gallery/gal7/nightingale.json";
import gal7_img from "../Gallery/gal7/nightingale.png";
import gal8_ani from "../Gallery/gal8/weather.json";
import gal8_img from "../Gallery/gal8/weather.png";
import gal9_ani from "../Gallery/gal9/os.json";
import gal9_img from "../Gallery/gal9/os.png";
import gal10_ani from "../Gallery/gal10/worldPopulation.json";
import gal10_img from "../Gallery/gal10/worldPopulation.png";
import gal11_img from "../Gallery/gal11/co2.png";
import gal11_ani from "../Gallery/gal11/co2.json";
import gal12_img from "../Gallery/gal12/purchase.png";
import gal12_ani from "../Gallery/gal12/purchase.json";
export default function Home() {
  const LottieAnimation = ({ animationData }) => {
    const animationContainer = useRef(null);
    let animation = null;
    useEffect(() => {
      // eslint-disable-next-line
      animation = lottie.loadAnimation({
        container: animationContainer.current,
        renderer: "svg",
        loop: true,
        autoplay: true,
        animationData: animationData,
      });
    }, []);

    return (
      <div
        style={{
          position: "relative",
          width: "200px",
          height: "200px",
        }}
      >
        <div
          ref={animationContainer}
          style={{
            position: "absolute",
            width: "200px",
            height: "200px",
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
      title: "Doughnut Purchase(1996-2014)",
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
    // {
    //   id: 11,
    //   animationData: gal11_ani,
    //   staticImage: gal11_img,
    //   title: "Ranking of Carbon Dioxide Emissions",
    // },
    // {
    //   id: 12,
    //   animationData: gal12_ani,
    //   staticImage: gal12_img,
    //   title: "Doughnut Purchase(1996-2014)",
    // },
  ];
  return (
    <div className="teaser-container">
      <div className="teaser-top">
        <div className="teaser-text">
          <h1 className="teaser-pre">
            Welcome To The New Canis Studio &mdash; CAST<sup>2</sup>
          </h1>
        </div>
      </div>
      {/* <div className="teaser- bottom">
        <img src={Teaser} className="teaser-img" />
      </div> */}
      <div id="show-box">
        <div className="show">
          {galleryData.map((item, index) => {
            return (
              <div className="show-item">
                <LottieAnimation
                  animationData={item.animationData}
                ></LottieAnimation>
              </div>
            );
          })}
        </div>
      </div>
      <div className="teaser-Btn">
        <button
          className="teaserStartBtn"
          onClick={() => {
            window.location.href = "./System/index.html";
          }}
        >
          START
        </button>
        <Link to="/gallery">
          <button className="teaserTutorialBtn">GALLERY</button>
        </Link>
      </div>
    </div>
  );
}

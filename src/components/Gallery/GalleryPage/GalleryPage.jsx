import React from "react";
import { useParams } from "react-router-dom";
import "./GalleryPage.css";
import gal1_ani from "../gal1/hiring.mp4";
import gal1_img from "../gal1/hiring.png";
import gal2_ani from "../gal2/dessert.json";
import gal2_img from "../gal2/dessert.png";
import gal3_ani from "../gal3/driving.json";
import gal3_img from "../gal3/driving.png";
import gal4_ani from "../gal4/gantt.json";
import gal4_img from "../gal4/gantt.png";
import gal5_ani from "../gal5/fruitsale.json";
import gal5_img from "../gal5/fruitsale.png";
import gal6_ani from "../gal6/education.json";
import gal6_img from "../gal6/education.png";
import gal7_ani from "../gal7/nightingale.json";
import gal7_img from "../gal7/nightingale.png";
import gal8_ani from "../gal8/weather.json";
import gal8_img from "../gal8/weather.png";
import gal9_ani from "../gal9/os.json";
import gal9_img from "../gal9/os.png";
import gal10_img from "../gal10/worldPopulation.png";
import gal10_ani from "../gal10/worldPopulation.json";
import gal11_img from "../gal11/co2.png";
import gal11_ani from "../gal11/co2.json";
import gal12_img from "../gal12/purchase.png";
import gal12_ani from "../gal12/purchase.json";
export default function GalleryPage() {
  const { itemId } = useParams();

  const galleryData = [
    {
      animationData: gal1_ani,
      staticImage: gal1_img,
      title: "Salary and employment percentages",
      chart:
        "Chart: A line chart describing the trend of doughnut purchases from 1996 to 2014.",
      animation:
        " Animation: Axis and title first fade out. Then the line starts to grow, meanwhile the dot fades out when the line reaches it, and the corresponding label wipes in at the same time.",
    },
    {
      animationData: gal2_ani,
      staticImage: gal2_img,
      title: "Most Requested Diner Dessert",
      chart: "",
    },
    {
      animationData: gal3_ani,
      staticImage: gal3_img,
      title: "The Price of the Oil",
      chart: "",
    },
    {
      animationData: gal4_ani,
      staticImage: gal4_img,
      title: "Event Plan Gantt Chart",
      chart: "",
    },
    {
      animationData: gal5_ani,
      staticImage: gal5_img,
      title: "Fruit Sales in 2001 and 2002",
      chart: "",
    },
    {
      animationData: gal6_ani,
      staticImage: gal6_img,
      title: "Higher Education v.s. Obesity",
      chart: "",
    },
    {
      animationData: gal7_ani,
      staticImage: gal7_img,
      title: "Casuses of Mortality over Time",
      chart: "",
    },
    {
      animationData: gal8_ani,
      staticImage: gal8_img,
      title: "September Weather in New York",
      chart: "",
    },
    {
      animationData: gal9_ani,
      staticImage: gal9_img,
      title: "Mobile Operating System Market Share",
      chart: "",
    },
    {
      animationData: gal10_ani,
      staticImage: gal10_img,
      title: "World Population Pyramid of 2017",
      chart: "",
    },
    {
      animationData: gal11_ani,
      staticImage: gal11_img,
      title: "Ranking of Carbon Dioxide Emissions",
      chart: "",
    },
    {
      animationData: gal12_ani,
      staticImage: gal12_img,
      title: "Doughnut Purchase(1996-2014)",
      chart: "",
    },
    
  ];
  return (
    <div className="detail">
      <h1 className="detail-title">{galleryData[itemId].title}</h1>
      <div className="detail-item">
        <img className="detail-img" src={galleryData[itemId].staticImage} />
        <video
          className="detail-pre"
          src={galleryData[itemId].animationData}
          controls
        ></video>
      </div>
      <p className="detail-chart">{galleryData[itemId].chart}</p>
      <p className="detail-chart">{galleryData[itemId].animation}</p>
      <video
        className="detail-video"
        src={galleryData[itemId].animationData}
        controls
      ></video>
    </div>
  );
}

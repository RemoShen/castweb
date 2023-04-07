import React from "react";
import { useParams } from "react-router-dom";
import "./GalleryPage.css";
import gal1_ani from "../gal1/hiring.mp4";
import gal1_img from "../gal1/hiring.png";
import gal2_ani from "../gal2/co2.json";
import gal2_img from "../gal2/co2.png";
import gal3_ani from "../gal3/driving.json";
import gal3_img from "../gal3/driving.png";
import gal4_ani from "../gal4/nightingale.json";
import gal4_img from "../gal4/nightingale.png";
import gal5_ani from "../gal5/population.json";
import gal5_img from "../gal5/population.png";
import gal6_ani from "../gal6/purchase.json";
import gal6_img from "../gal6/purchase.png";
import gal7_ani from "../gal7/os.json";
import gal7_img from "../gal7/os.png";
import gal8_ani from "../gal8/flare.json";
import gal8_img from "../gal8/flare.png";
import gal9_ani from "../gal9/chinapm.json";
import gal9_img from "../gal9/chinapm.png";
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
      title: "Ranking of Carbon Dioxide Emissions",
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
      title: "Casuses of Mortality over Time",
      chart: "",
    },
    {
      animationData: gal5_ani,
      staticImage: gal5_img,
      title: "World Population Pyramid of 2017",
      chart: "",
    },
    {
      animationData: gal6_ani,
      staticImage: gal6_img,
      title: "Doughnut Purchase(1996-2014)",
      chart: "",
    },
    {
      animationData: gal7_ani,
      staticImage: gal7_img,
      title: "Mobile Operating System Market Share",
      chart: "",
    },
    {
      animationData: gal8_ani,
      staticImage: gal8_img,
      title: "Flare",
      chart: "",
    },
    {
      animationData: gal9_ani,
      staticImage: gal9_img,
      title: "PM2.5 Air Quality Index in China",
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

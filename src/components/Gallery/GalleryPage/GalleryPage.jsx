import React from "react";
import { useParams } from "react-router-dom";
import "./GalleryPage.css";
import gal1_ani from "../gal1/hiring_s.mp4";
import gal1_img from "../gal1/hiring.png";
import gal1_ani_s from "../gal1/hiring.mp4";
import gal2_ani from "../gal2/dessert_s.mp4";
import gal2_img from "../gal2/dessert.png";
import gal2_ani_s from "../gal2/dessert.mp4";
import gal3_ani from "../gal3/driving_s.mp4";
import gal3_img from "../gal3/driving.png";
import gal3_ani_s from "../gal3/driving.mp4";
import gal4_ani from "../gal4/gantt_s.mp4";
import gal4_img from "../gal4/gantt.png";
import gal4_ani_s from "../gal4/gantt.mp4";
import gal5_ani from "../gal5/fruitsale_s.mp4";
import gal5_img from "../gal5/fruitsale.png";
import gal5_ani_s from "../gal5/fruitsale.mp4";
import gal6_ani from "../gal6/education_s.mp4";
import gal6_img from "../gal6/education.png";
import gal6_ani_s from "../gal6/education.mp4";
import gal7_ani from "../gal7/nightingale_s.mp4";
import gal7_img from "../gal7/nightingale.png";
import gal7_ani_s from "../gal7/nightingale.mp4";
import gal8_ani from "../gal8/weather_s.mp4";
import gal8_img from "../gal8/weather.png";
import gal8_ani_s from "../gal8/weather.mp4";
import gal9_ani from "../gal9/os_s.mp4";
import gal9_img from "../gal9/os.png";
import gal9_ani_s from "../gal9/os.mp4";
import gal10_img from "../gal10/worldPopulation.png";
import gal10_ani from "../gal10/worldPopulation_s.mp4";
import gal10_ani_s from "../gal10/worldPopulation.mp4";
import gal11_img from "../gal11/co2.png";
import gal11_ani from "../gal11/co2_s.mp4";
import gal11_ani_s from "../gal11/co2.mp4";
import gal12_img from "../gal12/purchase.png";
import gal12_ani from "../gal12/purchase_s.mp4";
import gal12_ani_s from "../gal12/purchase.mp4";
import gal13_img from "../gal13/gdp.png";
import gal13_ani from "../gal13/gdp_s.mp4";
import gal13_ani_s from "../gal13/gdp.mp4";
export default function GalleryPage() {
  const { itemId } = useParams();

  const galleryData = [
    {
      animationData: gal1_ani,
      manipulateData: gal1_ani_s,
      staticImage: gal1_img,
      title: "Salary and employment percentages",
      chart:
        "Chart: A bar and line chart describing the salary and employment percentages from 2010 to 2014.",
      animation:
        " Animation: Left axis first fade. Secondarly, the bar and year label starts fade, and the right axis fade. Then the percentage label and symbol grow. Finally, the line grow.",
    },
    {
      animationData: gal2_ani,
      staticImage: gal2_img,
      manipulateData: gal2_ani_s,
      title: "Most Requested Diner Dessert",
      chart: "Chart: A pie chart describing the most requested diner dessert based on customer receipts.",
      animation: "Animation: The animation starts with the title first. Then the label fade in. Finally, the pie chart wheel in with the same rate."
    },
    {
      animationData: gal3_ani,
      manipulateData: gal3_ani_s,
      staticImage: gal3_img,
      title: "The Price of the Oil",
      chart:
        "Chart: A line chart describing the price of the oil from 1970 to 2010.",
      animation:
        "Animation: Grid lines fade in first. Then the x-axis-label and y-axis-label fade in one by one. Then the symbol fade in. Finally, the line and year label grow one by one.",
    },
    {
      animationData: gal4_ani,
      staticImage: gal4_img,
      manipulateData: gal4_ani_s,
      title: "Event Plan Gantt Chart",
      chart: "Chart: A bar chart describing the event plan gantt chart.",
      animation:
        "Animation: The animation starts with the title first. Then the axis fade in. Finally, the bar fade in one by one with the same rate corresponding with the title.",
    },
    {
      animationData: gal5_ani,
      manipulateData: gal5_ani_s,
      staticImage: gal5_img,
      title: "Fruit Sales in 2001 and 2002",
      chart: "Chart: A bar chart describing the fruit sales in 2001 and 2002.",
      animation:
        "Animation: Grid lines and axis labels wipe from left first. Then the bar and legend fade in one by one.",
    },
    {
      animationData: gal6_ani,
      staticImage: gal6_img,
      manipulateData: gal6_ani_s,
      title: "Higher Education v.s. Obesity",
      chart: "Chart: A line chart describing Higher Education v.s. Obesity.",
      animation:
        "Animation: Title grow first. Then the bar and legend fade in one by one.",
    },
    {
      animationData: gal7_ani,
      staticImage: gal7_img,
      manipulateData: gal7_ani_s,
      title: "Casuses of Mortality over Time",
      chart:
        "Chart: Florence Nightingale’s rose chart depicting the causes of mortality in the army in the east.",
      animation:
        "Animation: The animation starts with animating legends and title first, then one group of axis label and tick wipe left together and the widgets wheel wheel together sorting by month.",
    },
    {
      animationData: gal8_ani,
      staticImage: gal8_img,
      manipulateData: gal8_ani_s,
      title: "September Weather in New York",
      chart:
        "Chart: An icon chart describing the weather in New York in September.",
      animation:
        "Animation: The animation starts with the title first, then axis label wipe from left. Finally, the icon wipe from left colunm by colunm.",
    },
    {
      animationData: gal9_ani,
      staticImage: gal9_img,
      manipulateData: gal9_ani_s,
      title: "Mobile Operating System Market Share",
      chart:
        "This ribbon chart shows the market share of mobile operating systems from 2009 to 2016.",
      animation:
        "Animation: The animation starts with the title first, then axis label wipe from left. Finally, each series of bars linked with bands wipes in one after another.",
    },
    {
      animationData: gal10_ani,
      staticImage: gal10_img,
      manipulateData: gal10_ani_s,
      title: "World Population Pyramid of 2017",
      chart:
        "Chart: This is the population pyramid of the world in 2017, grouped by age and gender.",
      animation:
        "Animation: The animation starts with the title first, then axis label wipe from left. Finally, each series of bars linked with bands wipes in one after another.",
    },
    {
      animationData: gal11_ani,
      manipulateData: gal11_ani_s,
      staticImage: gal11_img,
      title: "Ranking of Carbon Dioxide Emissions",
      chart:
        "Chart: This multiline chart shows the ranking of CO2 emissions of selected countries from 1992 to 2011.",
      animation:
        "Animation: The lines from all series start to grow from left to right together with the year label, the corresponding dot fades out when the line reaches its position.",
    },
    {
      animationData: gal12_ani,
      staticImage: gal12_img,
      manipulateData: gal12_ani_s,
      title: "Doughnut Purchase(1996-2014)",
      chart:
        "Chart: A line chart describing the trend of doughnut purchases from 1996 to 2014.",
      animation:
        "Animation: The title and left y-axis and the x-axis-domain fade in first. Then the symbol fade in from left to right corresponding to the year label. Finally, the line grow from left to right with the text label.",
    },
    {
      animationData: gal13_ani,
      staticImage: gal13_img,
      manipulateData: gal13_ani_s,
      title: "Gdp of Regions from 1900 to 2020",
      chart:
        "Chart: A line chart describing the trend of gdp of regions from 1900 to 2020.",
      animation:
        "Animation: The title and left y-axis and the x-axis-domain fade in first. Then the symbol fade in from left to right corresponding to the year label. Finally, the line grow from left to right.",
    },
  ];
  return (
    <div className="detail">
      <h1 className="detail-title">{galleryData[itemId].title}</h1>
      <p className="detail-chart">{galleryData[itemId].chart}</p>
      <p className="detail-chart">{galleryData[itemId].animation}</p>
      <div className="detail-item">
        <img
          className="detail-img"
          alt=""
          src={galleryData[itemId].staticImage}
        />
        <video
          className="detail-pre"
          src={galleryData[itemId].animationData}
          controls
        ></video>
      </div>

      <p className="author">How to another the animation:</p>
      <video
        className="detail-video"
        src={galleryData[itemId].manipulateData}
        controls
      ></video>
    </div>
  );
}

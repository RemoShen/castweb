import React from "react";
import "./About.css";
export default function About() {
  return (
    <div>
      <div className="people-wrapper">
        <h2>People</h2>
        <div className="card-item">
          <div className="card-img yc"></div>
          <h4>Yuancheng Shen</h4>
          <p>Shandong University</p>
        </div>
        <div className="card-item">
          <div className="card-img zy"></div>
          <h4>Yue Zhao</h4>
          <p>Shandong University</p>
        </div>
        <div className="card-item">
          <div className="card-img yhw"></div>
          <h4>Yunhai Wang</h4>
          <p>Renmin University</p>
        </div>
        <div className="card-item">
          <div className="card-img gt"></div>
          <h4>Tong Ge</h4>
          <p>Shandong University</p>
        </div>
        <div className="card-item">
          <div className="card-img shy"></div>
          <h4>Haoyan Shi</h4>
          <p>Shandong University</p>
        </div>
        <div className="card-item">
          <div className="card-img bl"></div>
          <h4>Bongshin Lee</h4>
          <p>Yonei University</p>
        </div>
      </div>
      <div className="pub-wrapper">
        <h2>Publication</h2>
        <div className="pub-item">
          <div className="pub-info">
            <h4>
              Authoring Data-Driven Chart Animations through Direct
              Manipulation[
              <a href="./CASTPlus.pdf" target="_blank">
                pdf
              </a>
              ]
            </h4>
            <p>
              Yuancheng Shen, Yue Zhao, Yunhai Wang, Tong Ge, Haoyan Shi,
              Bongshin Lee
            </p>
            <p>
              <i></i>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

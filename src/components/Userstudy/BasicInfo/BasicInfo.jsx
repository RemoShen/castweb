import React, { useState } from "react";
import "./BasicInfo.css";
export default function BasicInfo({ onNext }) {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [area, setArea] = useState("");
  const [experience, setExperience] = useState("");
  const handleNameChange = (event) => {
    setName(event.target.value);
  };
  const handleAgeChange = (event) => {
    setAge(event.target.value);
  };
  const handleAreaChange = (event) => {
    setArea(event.target.value);
  };
  const handleExperienceChange = (event) => {
    setExperience(event.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if(name === "" || age === "" || area === "" || experience === ""){
      alert("Please fill in all the information");
      return;
    }
    onNext({ name, age, area, experience });
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="basic-info-page">
        <h1 className="infotitle">User Basic Information</h1>
        <div className="Info">
          <label className="form-title">Name:</label>
          <input type="text" value={name} onChange={handleNameChange} />
          <label className="form-title">Age:</label>
          <input type="text" value={age} onChange={handleAgeChange} />
          <label className="form-title">Reserach Area:</label>
          <input type="text" value={area} onChange={handleAreaChange} />
          <label className="form-title">
            Video Editing Experience:(Ae, Adobe Premiere,... )
          </label>
          <input
            type="text"
            value={experience}
            onChange={handleExperienceChange}
          />
        </div>
        <button className="start-button" type="submit">
          Getting Started
        </button>
      </div>
    </form>
  );
}

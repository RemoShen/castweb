import React from "react";
import "./Submit.css";
import { Link } from "react-router-dom";
function downloadJSON(data, filename) {
  const blob = new Blob([JSON.stringify(data)], { type: "application/json" });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = filename;
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);
}
export default function Submit({ formData }) {
  function handleClick() {
    const jsonData = JSON.stringify(formData);
    downloadJSON(jsonData, "studyResult.json");
  }
  return (
    <div>
      <h1 id="end">Thank you for your participation!</h1>
      <Link to="/">
        <button id="endBtn" onClick={handleClick}>
          END
        </button>
      </Link>
    </div>
  );
}

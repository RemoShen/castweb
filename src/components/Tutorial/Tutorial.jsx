import React from "react";
import "./Tutorial.css";
import chart from "./chart.gif";
import kfgroup from "./kfgroup.png";
import group from "./group.png";
import properties from "./properties.png";
import loading from "./loading.png";
import selection from "./selection.png";
import spec from "./spec.png";
import effect from "./effect.png";
import complete from "./complete.png";
import panel from "./panel.png"
const scrollToAnchor = (anchorName) => {
  if (anchorName) {
    let anchorElement = document.getElementById(anchorName);
    if (anchorElement) {
      window.scrollTo(0, anchorElement.offsetTop - 95);
    }
  }
};
export default function Tutorial() {
  return (
    <div className="tutorial-container">
      <aside>
        <ul className="aside-nav">
          <li
            className="nav-item"
            onClick={() => scrollToAnchor("Overview Link")}
          >
            Overview
          </li>
          <li
            className="nav-item"
            onClick={() => scrollToAnchor("UI Components Link")}
          >
            UI Components
          </li>
          <li
            className="nav-item"
            onClick={() => scrollToAnchor("Visual Specification Link")}
          >
            Visual Specification
          </li>
          <li className="nav-item1">
            <ul className="nav-sub">
              <li
                className="sub-nav-item"
                onClick={() => scrollToAnchor("Keyframe Link")}
              >
                Keyframe
              </li>
              <li
                className="sub-nav-item"
                onClick={() => scrollToAnchor("Keyframe group Link")}
              >
                Keyframe group
              </li>
              <li
                className="sub-nav-item"
                onClick={() => scrollToAnchor("Representation Link")}
              >
                Representation
              </li>
            </ul>
          </li>
          <li
            className="nav-item"
            onClick={() => scrollToAnchor("Author Chart Animations Link")}
          >
            Author Animations
          </li>
          <li className="nav-item1">
            <ul className="nav-sub">
              <li
                className="sub-nav-item"
                onClick={() => scrollToAnchor("Importing Charts Link")}
              >
                Importing Charts
              </li>
              <li
                className="sub-nav-item"
                onClick={() => scrollToAnchor("Selecting Marks Link")}
              >
                Selecting Marks
              </li>
              <li
                className="sub-nav-item"
                onClick={() => scrollToAnchor("Animating Link")}
              >
                Mark Completion
              </li>
              <li
                className="sub-nav-item"
                onClick={() => scrollToAnchor("Animating Link")}
              >
                Animating
              </li>
            </ul>
          </li>
        </ul>
      </aside>
      <div className="tutorial-content">
        <h1 id="Overview Link" className="tutorialh">
          Overview
        </h1>
        <p className="tutorial-text">
          Cains Studio<sup>2</sup> uses a series of visual representations to
          describe and generate expressive chart animations.
        </p>
        <h1 id="UI Components Link" className="tutorialh">
          UI Components
        </h1>
        <div className="ui-text">
          <p className="tutorial-text">
            The user interface of Multimodal-CAST consists of the following
            components:
          </p>
          <ul className="tutorial-text-list">
            <li>
              <strong>Chart Panel:</strong> The input chart, which is also for
              mark selection.
            </li>
            <li>
              <strong>View Panel:</strong> You can preview the data animation
              you author.
            </li>
            <li>
              <strong>Data Panel:</strong> The data table discribe your input
              svg.
            </li>
            <li>
              <strong>Tool Menu:</strong> Title menu and some common functions.
            </li>
            <li>
              <strong> Animation Specification Panel:</strong>Illustrating and
              authoring how the chart is animated using static visual
              representations.
            </li>
            {/* <p style={{ color: "red" }}>IMAGE!!!!!!</p> */}
            <div className="single-img">
              <img src={panel} className="kfgroup-img"></img>
            </div>
          </ul>
        </div>
        <h1 id="Visual Specification Link" className="tutorialh">
          Visual Specification
        </h1>
        <h2 id="Keyframe Link" className="subh">
          Keyframe
        </h2>
        <p className="tutorial-text">
          Chart animations can be represented with a keyframe sequence. For each
          mark unit, Canis Studio<sup>2</sup> selects the last frame of its
          animation as the keyframe. As shown in the following example, the
          animation of the facet dot plots can be represented with a series of
          frames, and one keyframe for each cell is extracted by Canis Studio
          <sup>2</sup> to describe this animation.
        </p>
        <div className="fig-cap">
          <div className="figure">
            <img className="chartgif" src={chart} alt=""></img>
          </div>
          <div className="cap-text">
            <p className="tutorial-text">
              <strong>Chart:</strong> Each mark represents one sample. All marks
              are grouped by Odor along the X axis. Meanwhile different shapes
              encode different types of value.
            </p>
            <p className="tutorial-text">
              <strong>Animation:</strong> For all dots, animate row by row, and
              within each row, animate by cell.
            </p>
          </div>
        </div>
        <div className="single-img">
          <img src={kfgroup} className="kfgroup-img" alt=""></img>
        </div>
        <h2 id="Keyframe group Link" className="subh">
          Keyframe group
        </h2>
        <p className="tutorial-text">
          The animation is used to convey data patterns. Thus the mark unit is
          created by gradually grouping all visual marks with data variables.
          And a hierarchical structure will be generated from this grouping
          procedure. Canis Studio<sup>2</sup> uses title bars to represent this
          grouping hierarchy, and the gray scale of the bar indicates the depth
          level of this group.
        </p>
        <div className="single-img">
          <img src={group} className="kfgroup-img" alt=""></img>
        </div>
        <h2 id="Representation Link" className="subh">
          Representation
        </h2>
        <p className="tutorial-text">
          Canis Studio<sup>2</sup> uses the following properties to describe the
          animation of each mark unit:
        </p>
        <ul className="tutorial-text-list">
          <li>
            <strong>Duration:</strong> The duration of the animation is
            represented by the length of the keyframe item. Users can drag the
            right border of the keyframe item to adjust the duration of each
            keyframe, and the system will automatically adjust the duration of
            the other keyframes in the keyframe group where the keyword is
            located.
          </li>
          <li>
            <strong>Delay:</strong> The delay is used to adjust the timing
            between each keyframe. Users can add delay to a keyframe by dragging
            the left border of the keyframe. delay represents the time interval
            between every two keyframes, note that delay can also be a negative
            number, which means that the next keyframe starts some time before
            the end of the previous keyframe. The system will automatically set
            the same delay for the other keyframes in the keyframe group where
            the keyframe is located.
          </li>
          <li>
            <strong>Effect:</strong> By which kind of effect this mark unit is
            animated. Each kind of effect has its corresponding icon.
          </li>
        </ul>
        <p className="tutorial-text">
          Note: keyframes within the same group have the same animation
          properties, thus the effect and easing are shown on group level.
        </p>
        <div className="single-img">
          <img src={properties} className="kfgroup-img" alt=""></img>
        </div>
        <h1 id="Author Chart Animations Link" className="tutorialh">
          Author Chart Animations
        </h1>
        <p className="tutorial-text">
          Canis Studio<sup>2</sup> uses the following four steps to author chart
          animations:
        </p>
        <ul className="tutorial-text-list">
          <li>
            <strong>Step 1 (Importing):</strong> Create a chart with
            Charticulator, Vega, or D3, then using our online or your own
            customized toolkit to generate the DSVG input.
          </li>
          <li>
            <strong>Step 2 (Selecting && Generating):</strong> Select the
            smallest marks unit (marks in 1st keyframe) in animation with mouse,
            the system will help recommend meaningful next keyframes after your
            one time selection until the whole chart is animated.
          </li>
          <li>
            <strong>Step 3 (Animating):</strong> Specify timing (duration &&
            delay) and the other animation properties(effect) to each mark unit.
          </li>
        </ul>
        <h2 id="Importing Charts Link" className="subh">
          Importing Charts
        </h2>
        <h3 className="sub3title">Chart Preparation</h3>
        <p className="tutorial-text">
          Our online dSVG generator which can generate dSVG with charts authored
          from the following tools:
        </p>
        <ul className="tutorial-text-list">
          <li>
            <strong>Charticulator (.chart/.tmplt):</strong> data file in csv
            format is also needed when using the template file as input.
          </li>
          <li>
            <strong>Vega (.json)</strong>
          </li>
          <li>
            <strong>D3 (.svg)</strong>
          </li>
        </ul>
        <p className="tutorial-text">
          After importing charts, you can edit the class names in the editor
          panel, or just hit the download button to download the dSVG file.
        </p>
        <h3 className="sub3title">Loading</h3>
        <div className="single-img">
          <img src={loading} className="loading-img" alt=""></img>
        </div>
        <h2 id="Selecting Marks Link" className="subh">
          Selecting Marks
        </h2>
        <p className="tutorial-text">
          Mark selection is to decide which marks to animate first (which also
          decides the scale of the mark unit in one aniunit, for example to
          animate by row). The system will recommend the next keyframe after
          your one time selection until the whole chart is animated. The system
          uses mouse clicks to select the marks the user wants, and the system
          prompts the user whether the marks can be selected by setting opacity
          for the marks, transparent marks are unselectable, and opaque marks
          are optional.
        </p>
        <h3 className="sub3title">Selection Tools</h3>
        <p className="tutorial-text">
          As shown in the figure. There are three ways to select marks in Canis
          Studio<sup>2</sup>:
        </p>
        <div className="single-img">
          <img src={selection} className="selection-img" alt=""></img>
        </div>
        <ul className="tutorial-text-list">
          <li>
            <strong>Section Tool:</strong> <br></br> Click on a mark to select
            it, at which point the transparency of the mark is reduced, and
            continue clicking to select the next mark at the same time. Note
            that each time the user clicks to select, the Mark Completion
            algorithm will automatically run, recommending other marks that
            should be selected and adding them to the current selection
            sequence. At this point, if the confirmation button is clicked, the
            user can generate all selected marks as one keyframe, or the user
            can click on the blank space to cancel all current selections.
          </li>
          <li>
            <strong>Data Table:</strong> <br></br> On the Dataset Panel, click
            the column title to sort the column by this data attribute. If
            clicking on a non- sorted column, all data records will be sorted in
            asscending order according to this data attribute; if the column is
            already sorted, then it will switch to the opposite order(asscending
            to descending, descending to asscending). <br></br> Click on the row
            to select one data record. To select a range, select a row, then
            with the left mouse button pressed, drag over to other rows.Or use
            "Shift + click" to select non- adjacent rows.Meanwhile the
            corresponding marks in the chart will be selected. <br></br>To
            deselect marks, click or "click + drag over" on the selected rows.
          </li>
        </ul>
        <h2 id="Mark Completion Link" className="subh">
          Mark Completion
        </h2>
        <p className="tutorial-text">
          In order to generate meaningful keys, the system maps the marks
          selected by the user step by step according to different visual
          channels. If the user selects the same element on the same visual
          channel, the completion algorithm will automatically complete the
          elements of this channel.
        </p>
        <div className="single-img">
          <img src={complete} className="spec-img" alt=""></img>
        </div>
        <h2 id="Animating Link" className="subh">
          Animating
        </h2>
        <p className="tutorial-text">
          This step is to bind animation properties to each keyframe group and
          keyframe. Including timing properties(duration and delay) and effect
          properties(effect type and easing).
        </p>
        <h3 className="sub3title">Specifying Timing To Keyframes</h3>
        <div className="single-img">
          <img src={spec} className="spec-img" alt=""></img>
        </div>
        <h3 className="sub3title">Change Effect & Easing To Keyframes</h3>
        <ul className="tutorial-text-list">
          <li>Touch one keyframe in the group</li>
          <li>Draw some tracks to change the effect of a mark group</li>
        </ul>
        <div className="single-img">
          <img src={effect} className="selection-img" alt=""></img>
        </div>
      </div>
    </div>
  );
}

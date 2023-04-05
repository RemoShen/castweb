import React from "react";
import "./Option7.css";
export default function Option7({ onNext }) {
  const [understand, setUnderstand] = React.useState("");
  const [expresses, setExpresses] = React.useState("");
  const handleUnderstandChange = (event) => {
    setUnderstand(event.target.value);
  };
  const handleExpressesChange = (event) => {
    setExpresses(event.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (understand === "" || expresses === "") {
      alert("Please fill in all the information");
      return;
    }
    onNext({ understand, expresses });
  };
  return (
    <form onSubmit={handleSubmit}>
      <div className="option-title">Feedbacks</div>
      <div className="feedback-container">
        <table>
          <tbody>
            <tr>
              <td>Feedbacks</td>
              <td>strongly agree</td>
              <td>agree</td>
              <td>neutral</td>
              <td>disagree</td>
              <td>strongly disagree</td>
            </tr>
            <tr>
              <td>This visual language is easy to unerstand.</td>
              <td>
                <input
                  className="feedbackOption"
                  type="radio"
                  name="understandOption"
                  value={0}
                  onChange={handleUnderstandChange}
                ></input>
              </td>
              <td>
                <input
                  className="feedbackOption"
                  type="radio"
                  name="understandOption"
                  value={1}
                  onChange={handleUnderstandChange}
                ></input>
              </td>
              <td>
                <input
                  className="feedbackOption"
                  type="radio"
                  name="understandOption"
                  value={2}
                  onChange={handleUnderstandChange}
                ></input>
              </td>
              <td>
                <input
                  className="feedbackOption"
                  type="radio"
                  name="understandOption"
                  value={3}
                  onChange={handleUnderstandChange}
                ></input>
              </td>
              <td>
                <input
                  className="feedbackOption"
                  type="radio"
                  name="understandOption"
                  value={4}
                  onChange={handleUnderstandChange}
                ></input>
              </td>
            </tr>
            <tr>
              <td>
                This visual language intuitively expresses the chart animations.
              </td>
              <td>
                <input
                  className="feedbackOption"
                  type="radio"
                  name="expressesOption"
                  value={0}
                  onChange={handleExpressesChange}
                ></input>
              </td>
              <td>
                <input
                  className="feedbackOption"
                  type="radio"
                  name="expressesOption"
                  value={1}
                  onChange={handleExpressesChange}
                ></input>
              </td>
              <td>
                <input
                  className="feedbackOption"
                  type="radio"
                  name="expressesOption"
                  value={2}
                  onChange={handleExpressesChange}
                ></input>
              </td>
              <td>
                <input
                  className="feedbackOption"
                  type="radio"
                  name="expressesOption"
                  value={3}
                  onChange={handleExpressesChange}
                ></input>
              </td>
              <td>
                <input
                  className="feedbackOption"
                  type="radio"
                  name="expressesOption"
                  value={4}
                  onChange={handleExpressesChange}
                ></input>
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <button className="next-button" type="submit">
        Have some rest then next!
      </button>
    </form>
  );
}

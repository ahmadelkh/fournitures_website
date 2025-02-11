import React from "react";

const YesNoOptions = (props) => {
  return (
    <div className="yes-no-buttons">
      <button className="option-button" onClick={() => props.actionProvider.handleYesNoResponse("yes")}>✅ Yes</button>
      <button className="option-button" onClick={() => props.actionProvider.handleYesNoResponse("no")}>❌ No</button>
    </div>
  );
};

export default YesNoOptions;

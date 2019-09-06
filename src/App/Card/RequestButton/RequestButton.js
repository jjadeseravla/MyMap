import React from "react";
import "./RequestButton.css";

const RequestButton = () => {
  return (
    <div id="buttonBar">
      <a
        href="https://docs.google.com/document/d/1P0NL7BeiWxLfIFNWd_-WqnockL4gMcXS_e_VLQFZeuo/edit"
        target="_blank"
        rel="noopener noreferrer"
        data-testid="guidelinesLink"
      >
        <button id="guidelinesButton">Guidelines</button>
      </a>
      <a
        href="https://docs.google.com/forms/d/1oTNJ7gmNNa6JHPyNjmsjyNiwYq99y4rUGrb7iq7EiYU/viewform?edit_requested=true"
        target="_blank"
        rel="noopener noreferrer"
        data-testid="newRequestLink"
      >
        <button id="requestButton">New Request</button>
      </a>

    </div>
  );
};

export default RequestButton;

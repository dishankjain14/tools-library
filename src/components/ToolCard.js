import React from "react";
import "./../styles/toolCard.css";

const Card = ({ tool }) => {
  return (
    <div className="tool-card">
      <div className="tool-card-content">
        <div className="tool-logo-section">
          <img src={tool.logo} alt={`${tool.name} logo`} className="tool-logo" />
        </div>
        <div className="tool-name-section">
          <h3 className="tool-name">{tool.name}</h3>
        </div>
        <div className="tool-info-section">
          <p className="tool-description">{tool.description}</p>
          <p className="tool-subscription">{tool.subscription}</p>
        </div>
        <div className="tool-link-section">
          <a
            href={tool.link}
            target="_blank"
            rel="noopener noreferrer"
            className="tool-button"
          >
            View Tool
          </a>
        </div>
      </div>
    </div>
  );
};

export default Card;

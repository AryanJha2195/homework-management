import React from "react";
// import { FiAlignJustify } from "react-icons/fi";

const Content = () => {
  const containerStyle = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    textAlign: "center",
    padding: "20px",
    backgroundColor: "#003087e6",
    color: "#fff"
  };

  const buttonStyle = {
    backgroundColor: "#dc3545",
    color: "#fff",
    padding: "10px 20px",
    border: "none",
    borderRadius: "4px",
    cursor: "pointer",
  };

  const imgstyle = {
    backgroundColor: "#cdf2fa",
    textAlign: "center",
    color: "#003087e6",
  }

  const mediaQuery = `@media (max-width: 768px) {
    /* Media query styles for screen widths up to 768px */
    background-color: #f0f0f0;
    color: #333;
  }`;

  return (
    <>
    <div style={containerStyle}>
      <h2>Homework to Acquire SchoolMessenger</h2>
      <p>
        Homework has signed a definitive agreement to acquire SchoolMessenger, a leading provider of K-12 communication in India.
      </p>
      <button style={buttonStyle}>Read the press release</button>
    </div>
    <div style={imgstyle}>
    <style>{mediaQuery}</style>
        <h2>Meet the Homework Manager Clouds</h2>
        <img src="https://www.powerschool.com/wp-content/uploads/2023/05/central-cloud-hero-1.png" alt="cloud"></img>
    </div>
    <div style={containerStyle}>
    <h2>Find the cloud for you and your team</h2>
      <button style={buttonStyle}>Learn More</button>
    </div>
    </>
  );
};

export default Content;

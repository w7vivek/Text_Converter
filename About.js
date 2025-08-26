import React from "react";
import "./About.css"; // Import the CSS file

function About() {
  return (
    <div className="about-container">
      <h1 className="about-title">About TextConver</h1>
      <p className="about-text">
        <strong>TextConver</strong> is a simple React-based application designed
        to help you easily transform, analyze, and manipulate text. Whether you
        want to convert text to uppercase/lowercase, count words and characters,
        or perform quick formatting, TextConver makes it fast and user-friendly.
      </p>
      <p className="about-text">
        Built using <code>React</code> and <code>react-router-dom</code>, it is a
        beginner-friendly project that demonstrates routing, component-based
        design, and state management in React.
      </p>
      <p className="about-text">
        🚀 The goal of TextConver is to provide a hands-on learning experience
        while building something practical and useful.
      </p>
    </div>
  );
}

export default About;

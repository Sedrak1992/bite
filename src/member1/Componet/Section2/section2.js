import React from "react";
import "./section2.css";
import SectonLogo from "../image/section2.png";
import Container from "@material-ui/core/Container";

export default function Section_2() {
  return (
    <div className="Section2">
      <Container>
        <img src={SectonLogo} />
        <h2>One billion toothpaste tubes are thrown out each year </h2>
        <div className="Section-2-info">
          <p>
            We want to end this plastic waste, give you a healthier smile, and
            build the world's most sustainable oral care company.
          </p>
        </div>
      </Container>
    </div>
  );
}

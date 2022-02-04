import React from "react";

// Styles
import { Wrapper, Bubble } from "./Bubbles.styles";

// Hooks
import useWindowDimensions from "../../hooks/useWindowDimensions";

const Bubbles = () => {
  const bubbles = [
    { key: 0, left: "5%", radius: "180px", duration: "14s", delay: "1s" },
    { key: 1, left: "20%", radius: "260px", duration: "10s", delay: "1s" },
    { key: 2, left: "50%", radius: "260px", duration: "6s", delay: "0s" },
    { key: 3, left: "70%", radius: "170px", duration: "12s", delay: "0s" },
    { key: 4, left: "30%", radius: "230px", duration: "7s", delay: "0s" },
    { key: 5, left: "60%", radius: "190px", duration: "6s", delay: "0s" },
    { key: 6, left: "90%", radius: "90px", duration: "4s", delay: "0s" },
  ];

  return (
    <Wrapper>
      {bubbles.map((bubble) => (
        <Bubble {...bubble} />
      ))}
    </Wrapper>
  );
};

export default Bubbles;

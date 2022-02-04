import React from "react";

// Styles
import { Wrapper, Bubble } from "./Bubbles.styles";

// Hooks
import useWindowDimensions from "../../hooks/useWindowDimensions";

const Bubbles = () => {
  const bubbles = [
    {
      key: 0,
      left: "5%",
      radius: "180px",
      radiusMobile: "160px",
      duration: "14s",
      delay: "1s",
    },
    {
      key: 1,
      left: "20%",
      radius: "260px",
      radiusMobile: "185px",
      duration: "10s",
      delay: "1s",
    },
    {
      key: 2,
      left: "45%",
      radius: "260px",
      radiusMobile: "188px",
      duration: "9s",
      delay: "0s",
    },
    {
      key: 3,
      left: "70%",
      radius: "170px",
      radiusMobile: "87px",
      duration: "12s",
      delay: "0s",
    },
    {
      key: 4,
      left: "34%",
      radius: "230px",
      radiusMobile: "116px",
      duration: "7s",
      delay: "0s",
    },
    {
      key: 5,
      left: "65%",
      radius: "190px",
      radiusMobile: "93px",
      duration: "6s",
      delay: "0s",
    },
    {
      key: 6,
      left: "90%",
      radius: "120px",
      radiusMobile: "30px",
      duration: "4s",
      delay: "0s",
    },
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

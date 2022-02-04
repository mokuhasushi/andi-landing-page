import styled from "styled-components";

export const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  top: -150px;
  white-space: nowrap;
  /* overflow: hidden; */
`;

export const Bubble = styled.div`
  z-index: 1;
  overflow: hidden;
  background-color: var(--pink);
  border-radius: 50%;
  top: 810px;
  /* top: ${(props) =>
    props.radius ? (960 - props.radius).toString() + "px" : "960px"}; */
  width: ${(props) => (props.radius ? props.radius : "50px")};
  height: ${(props) => (props.radius ? props.radius : "50px")};
  position: absolute;
  left: ${(props) => (props.left ? props.left : "10%")};
  animation: animate ${(props) => (props.duration ? props.duration : "5s")}
      linear infinite,
    fadeIn ${(props) => (props.duration ? props.duration : "5s")} linear
      infinite;

  @keyframes animate {
    from {
    }
    to {
      top: -100px;
    }
  }

  @keyframes fadeIn {
    0% {
      opacity: 0;
    }
    20% {
      opacity: 1;
    }
    90% {
      opacity: 1;
    }
    100% {
      opacity: 0;
    }
  }
`;

import React, { useEffect, useState } from "react";
import { Media } from "react-bootstrap";
import Lottie from "react-lottie";
import animationBubble from "../animations/Illustration_Animation (Move lips to center).json";

const HomeAnimation = (props) => {
  const [width, setwidth] = useState("100%");

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationBubble,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  useEffect(() => {
    if (window.innerWidth > 1900) {
      setwidth("70%");
    } else {
      setwidth("100%");
    }
  });

  return <Lottie options={defaultOptions} height="100%" width={width} />;
};

export default HomeAnimation;

import { clear } from "@testing-library/user-event/dist/clear";
import Lottie from "lottie-react";
import { useRef, useEffect } from "react";

const Animation = ({ text }) => {
  const animationProgress = useRef(0);
  useEffect(() => {
    const interval = setInterval(() => {
      animationProgress.current += 0.01;
      if (animationProgress.current > 1) {
        clearInterval(interval);
      }
    }, 40);
    return () => clearInterval();
  }, []);
  const options = {
    loop: true,
    autoPaly: true,
    animationData: require("../Animation/lottie/border.json"),
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  return (
    <div>
      <Lottie
        options={options}
        height={150}
        width={150}
        isStopped={false}
        isPaused={false}
      />
    </div>
  );
};
export default Animation;

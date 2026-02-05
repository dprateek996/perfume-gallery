import { forwardRef, useImperativeHandle, useCallback } from "react";
import { motion, useAnimate } from "motion/react";

const TruckElectricIcon = forwardRef((
  { size = 24, color = "currentColor", strokeWidth = 2, className = "" },
  ref,
) => {
  const [scope, animate] = useAnimate();

  const start = useCallback(async () => {
    await animate(".truck", {
      x: [0, 30],
      opacity: [1, 0],
    }, {
      duration: 0.5,
      ease: "easeIn",
    });

    animate(".truck", {
      x: -30,
    }, {
      duration: 0,
    });

    await animate(".truck", {
      x: [-30, 0],
      opacity: [0, 1],
    }, {
      duration: 0.5,
      ease: "easeOut",
      delay: 0.1,
    });
  }, [animate]);

  const stop = useCallback(() => {
    animate(".truck", { x: 0, opacity: 1 }, { duration: 0.2, ease: "easeOut" });
  }, [animate]);

  useImperativeHandle(ref, () => ({
    startAnimation: start,
    stopAnimation: stop,
  }));

  return (
    <motion.svg
      ref={scope}
      onHoverStart={start}
      onHoverEnd={stop}
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke={color}
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={`cursor-pointer ${className}`}
      style={{ overflow: "visible" }}>
      <motion.g className="truck">
        <path d="M1 3h15v13H1z" />
        <path d="M16 8h4l3 3v5h-7V8z" />
        <circle cx="5.5" cy="18.5" r="2.5" />
        <circle cx="18.5" cy="18.5" r="2.5" />
        <path d="M7 13l3-5 3 5" />
        <path d="M10 13V8" />
      </motion.g>
    </motion.svg>
  );
});

TruckElectricIcon.displayName = "TruckElectricIcon";
export default TruckElectricIcon;

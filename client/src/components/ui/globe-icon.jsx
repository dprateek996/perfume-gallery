import { forwardRef, useImperativeHandle, useRef } from "react";
import { motion, useAnimate } from "motion/react";

const GlobeIcon = forwardRef((
  { size = 24, color = "currentColor", strokeWidth = 2, className = "" },
  ref,
) => {
  const [scope, animate] = useAnimate();
  const animationControls = useRef([]);

  const start = async () => {
    animationControls.current.forEach((control) => control.stop());
    animationControls.current = [];

    animationControls.current.push(animate(
      ".globe-circle",
      { rotate: 360 },
      { duration: 2, ease: "linear", repeat: Infinity }
    ));
  };

  const stop = () => {
    animationControls.current.forEach((control) => control.stop());
    animationControls.current = [];

    animate(".globe-circle", { rotate: 0 }, { duration: 0.5 });
  };

  useImperativeHandle(ref, () => ({
    startAnimation: start,
    stopAnimation: stop,
  }));

  return (
    <motion.div
      ref={scope}
      className={`inline-flex cursor-pointer ${className}`}
      onHoverStart={start}
      onHoverEnd={stop}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={size}
        height={size}
        viewBox="0 0 24 24"
        fill="none"
        stroke={color}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round">
        <motion.g className="globe-circle" style={{ transformOrigin: "12px 12px" }}>
          <circle cx="12" cy="12" r="10" />
          <path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20" />
          <path d="M2 12h20" />
        </motion.g>
      </svg>
    </motion.div>
  );
});

GlobeIcon.displayName = "GlobeIcon";
export default GlobeIcon;

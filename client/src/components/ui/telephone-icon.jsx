import { forwardRef, useImperativeHandle, useCallback } from "react";
import { motion, useAnimate } from "motion/react";

const TelephoneIcon = forwardRef((
  { size = 24, color = "currentColor", strokeWidth = 2, className = "" },
  ref,
) => {
  const [scope, animate] = useAnimate();

  const start = useCallback(async () => {
    animate(".phone-icon", { rotate: [0, -10, 10, -10, 0] }, { duration: 0.5, ease: "easeInOut" });
    animate(
      ".phone-body",
      { scale: [1, 1.05, 1] },
      { duration: 0.3, ease: "easeInOut" }
    );
  }, [animate]);

  const stop = useCallback(async () => {
    animate(".phone-icon, .phone-body", { rotate: 0, scale: 1 }, { duration: 0.25, ease: "easeInOut" });
  }, [animate]);

  useImperativeHandle(ref, () => ({
    startAnimation: start,
    stopAnimation: stop,
  }));

  return (
    <motion.div
      ref={scope}
      onHoverStart={start}
      onHoverEnd={stop}
      className={`inline-flex cursor-pointer ${className}`}>
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
        <motion.path
          className="phone-body phone-icon"
          style={{ transformOrigin: "12px 12px" }}
          d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
      </svg>
    </motion.div>
  );
});

TelephoneIcon.displayName = "TelephoneIcon";
export default TelephoneIcon;

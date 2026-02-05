import { forwardRef, useImperativeHandle, useCallback } from "react";
import { motion, useAnimate } from "motion/react";

const SparklesIcon = forwardRef((
  { size = 24, color = "currentColor", strokeWidth = 2, className = "" },
  ref,
) => {
  const [scope, animate] = useAnimate();

  const start = useCallback(async () => {
    animate(
      ".sparkle-main",
      { rotate: 180, scale: [1, 1.2, 1] },
      { duration: 0.6, ease: "easeInOut" }
    );

    animate(".sparkle-top", {
      rotate: -90,
      scale: [1, 0.8, 1.1],
      opacity: [1, 0.6, 1],
    }, { duration: 0.5, ease: "easeInOut", delay: 0.1 });

    animate(".sparkle-bottom", {
      rotate: 90,
      scale: [1, 1.15, 0.9],
      opacity: [1, 0.7, 1],
    }, { duration: 0.5, ease: "easeInOut", delay: 0.05 });
  }, [animate]);

  const stop = useCallback(() => {
    animate(".sparkle-main", { rotate: 0, scale: 1 }, { duration: 0.25 });
    animate(".sparkle-top", { rotate: 0, scale: 1, opacity: 1 }, { duration: 0.25 });
    animate(".sparkle-bottom", { rotate: 0, scale: 1, opacity: 1 }, { duration: 0.25 });
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
      <motion.path
        className="sparkle-main"
        d="M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z"
        style={{ transformOrigin: "12px 12px" }} />
      <motion.path
        className="sparkle-top"
        d="M20 3v4"
        style={{ transformOrigin: "20px 5px" }} />
      <motion.path
        className="sparkle-top"
        d="M22 5h-4"
        style={{ transformOrigin: "20px 5px" }} />
      <motion.path
        className="sparkle-bottom"
        d="M4 17v2"
        style={{ transformOrigin: "4px 18px" }} />
      <motion.path
        className="sparkle-bottom"
        d="M5 18H3"
        style={{ transformOrigin: "4px 18px" }} />
    </motion.svg>
  );
});

SparklesIcon.displayName = "SparklesIcon";
export default SparklesIcon;

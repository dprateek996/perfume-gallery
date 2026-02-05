import { forwardRef, useImperativeHandle, useCallback } from "react";
import { motion, useAnimate } from "motion/react";

const ShoppingCartIcon = forwardRef((
  { size = 24, color = "currentColor", strokeWidth = 2, className = "" },
  ref,
) => {
  const [scope, animate] = useAnimate();

  const start = useCallback(async () => {
    animate(".cart-body", {
      x: [0, 5, 0],
    }, {
      duration: 0.4,
      ease: "easeInOut",
    });
    animate(".cart-wheel-left, .cart-wheel-right", {
      rotate: [0, 180, 0],
    }, {
      duration: 0.5,
      ease: "easeInOut",
    });
  }, [animate]);

  const stop = useCallback(() => {
    animate(
      ".cart-body, .cart-wheel-left, .cart-wheel-right",
      { x: 0, rotate: 0 },
      { duration: 0.2, ease: "easeInOut" }
    );
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
          className="cart-body"
          d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6" />
        <motion.circle
          className="cart-wheel-left"
          cx="9"
          cy="21"
          r="1"
          style={{ transformOrigin: "9px 21px" }} />
        <motion.circle
          className="cart-wheel-right"
          cx="20"
          cy="21"
          r="1"
          style={{ transformOrigin: "20px 21px" }} />
      </svg>
    </motion.div>
  );
});

ShoppingCartIcon.displayName = "ShoppingCartIcon";
export default ShoppingCartIcon;

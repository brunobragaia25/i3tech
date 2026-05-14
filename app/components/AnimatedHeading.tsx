"use client";

import { motion, useInView } from "framer-motion";
import { useRef, ReactNode, ElementType } from "react";
import React from "react";

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.06, delayChildren: 0 } },
};

const wordVariants = {
  hidden: { opacity: 0, y: 18 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] } },
};

// Splits children into animatable word tokens, preserving span wrappers
function tokenize(children: ReactNode): ReactNode[] {
  const tokens: ReactNode[] = [];

  React.Children.forEach(children, (child) => {
    if (typeof child === "string") {
      child.split(/(\s+)/).forEach((part) => {
        if (part.trim()) tokens.push(part);
        else if (part) tokens.push(part); // whitespace — not animated
      });
    } else if (React.isValidElement(child)) {
      const text = (child.props as { children?: unknown }).children;
      if (typeof text === "string") {
        text.split(/(\s+)/).forEach((part: string, i: number, arr: string[]) => {
          if (part.trim()) {
            tokens.push(React.cloneElement(child as React.ReactElement<{ children: string }>, { children: part }));
          } else if (part && i < arr.length - 1) {
            tokens.push(part);
          }
        });
      } else {
        tokens.push(child);
      }
    } else {
      tokens.push(child);
    }
  });

  return tokens;
}

interface AnimatedHeadingProps {
  as?: ElementType;
  children: ReactNode;
  className?: string;
  style?: React.CSSProperties;
  delay?: number;
  once?: boolean;
}

export default function AnimatedHeading({
  as: Tag = "h2",
  children,
  className,
  style,
  delay = 0,
  once = true,
}: AnimatedHeadingProps) {
  const ref = useRef(null);
  const inView = useInView(ref, { once, margin: "-60px" });

  const tokens = tokenize(children);

  const MotionTag = motion(Tag as ElementType);

  return (
    <MotionTag
      ref={ref}
      className={className}
      style={{ ...style, display: "block" }}
      variants={containerVariants}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      custom={delay}
    >
      {tokens.map((token, i) => {
        if (typeof token === "string" && /^\s+$/.test(token)) {
          return token; // plain whitespace — no animation wrapper
        }
        if (typeof token === "string") {
          return (
            <motion.span key={i} variants={wordVariants} style={{ display: "inline-block", whiteSpace: "pre" }}>
              {token}
            </motion.span>
          );
        }
        // React element (span with style, etc.)
        return (
          <motion.span key={i} variants={wordVariants} style={{ display: "inline-block", whiteSpace: "pre" }}>
            {token}
          </motion.span>
        );
      })}
    </MotionTag>
  );
}

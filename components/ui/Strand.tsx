"use client";

import { motion } from "framer-motion";

/**
 * Elemento assinatura do site: uma linha fluida que evoca uma madeixa de
 * cabelo em movimento. Usado com moderação como separador entre secções.
 */
export function Strand({
  className = "",
  flip = false,
}: {
  className?: string;
  flip?: boolean;
}) {
  return (
    <div
      aria-hidden="true"
      className={`pointer-events-none w-full overflow-hidden ${className} ${
        flip ? "-scale-y-100" : ""
      }`}
    >
      <svg
        viewBox="0 0 1200 80"
        preserveAspectRatio="none"
        className="h-10 w-full md:h-14"
      >
        <motion.path
          d="M0,40 C150,90 300,-10 450,40 C600,90 750,-10 900,40 C1000,73 1100,20 1200,40"
          fill="none"
          stroke="#A8825A"
          strokeWidth="1.5"
          strokeLinecap="round"
          initial={{ pathLength: 0, opacity: 0 }}
          whileInView={{ pathLength: 1, opacity: 0.6 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1.8, ease: "easeInOut" }}
        />
      </svg>
    </div>
  );
}

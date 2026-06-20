import { motion } from "framer-motion";
import type { PropsWithChildren } from "react";

type RevealProps = PropsWithChildren<{
  className?: string;
  delay?: number;
}>;

export function Reveal({ children, className = "", delay = 0 }: RevealProps) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 22 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.22 }}
      transition={{
        type: "spring",
        stiffness: 100, // rigidez da mola
        damping: 15, // amortecimento (evita que fique quicando muito)
        delay,
      }}
    >
      {children}
    </motion.div>
  );
}

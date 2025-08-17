"use client"

import { motion } from "framer-motion"
import type { HTMLMotionProps } from "framer-motion"

export function MotionSection({ children, ...props }: HTMLMotionProps<"section">) {
  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.8 }}
      {...props}
    >
      {children}
    </motion.section>
  )
}

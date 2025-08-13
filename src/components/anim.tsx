'use client';
import * as React from 'react';
import { motion, Variants } from 'motion/react';

const fadeIn: Variants = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { duration: 0.16, ease: 'easeOut' } },
};

const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 3 },
  show: { opacity: 1, y: 0, transition: { duration: 0.16, ease: 'easeOut' } },
};

export function FadeInDiv({
  children,
  className,
  delayMs = 0,
}: {
  children: React.ReactNode;
  className?: string;
  delayMs?: number;
}) {
  return (
    <motion.div
      initial={false}
      animate="show"
      variants={fadeIn}
      style={{ transitionDelay: `${delayMs}ms` }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export function FadeInUpDiv({
  children,
  className,
  delayMs = 0,
}: {
  children: React.ReactNode;
  className?: string;
  delayMs?: number;
}) {
  return (
    <motion.div
      initial={false}
      animate="show"
      variants={fadeInUp}
      style={{ transitionDelay: `${delayMs}ms` }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export function FadeInUpLi({
  children,
  className,
  delayMs = 0,
}: {
  children: React.ReactNode;
  className?: string;
  delayMs?: number;
}) {
  return (
    <motion.li
      initial={false}
      whileInView="show"
      viewport={{ once: true, amount: 0.2 }}
      variants={fadeIn}
      style={{ transitionDelay: `${delayMs}ms` }}
      className={className}
    >
      {children}
    </motion.li>
  );
}

'use client';
import * as React from 'react';
import { m, Variants } from 'motion/react';

const fadeIn: Variants = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { duration: 0.3, ease: 'easeOut' } },
};

const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 10 },
  show: { opacity: 1, y: 0, transition: { duration: 0.4, ease: [0.25, 0.25, 0, 1] } },
};

export function FadeInDiv({
  children,
  className,
  delayMs = 0,
  priority = false,
}: {
  children: React.ReactNode;
  className?: string;
  delayMs?: number;
  priority?: boolean;
}) {
  return (
    <m.div
      initial={priority ? "show" : "hidden"}
      animate="show"
      variants={fadeIn}
      transition={{ delay: delayMs / 1000 }}
      className={className}
    >
      {children}
    </m.div>
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
    <m.div
      initial="hidden"
      animate="show"
      variants={fadeInUp}
      transition={{ delay: delayMs / 1000 }}
      className={className}
    >
      {children}
    </m.div>
  );
}

export function FadeInUpLi({
  children,
  className,
  delayMs = 0,
  priority = false,
}: {
  children: React.ReactNode;
  className?: string;
  delayMs?: number;
  priority?: boolean;
}) {
  return (
    <m.li
      initial={priority ? "show" : "hidden"}
      whileInView="show"
      viewport={{ once: true, margin: "-50px" }}
      variants={fadeInUp}
      transition={{ delay: delayMs / 1000 }}
      className={className}
    >
      {children}
    </m.li>
  );
}

import { motion, type Variants } from 'framer-motion';
import type { ReactNode } from 'react';

interface Props {
  children: ReactNode;
  className?: string;
  delay?: number;
  direction?: 'up' | 'left' | 'right' | 'none';
}

const variants: Variants = {
  hidden: (direction: string) => ({
    opacity: 0,
    y: direction === 'up' ? 40 : 0,
    x: direction === 'left' ? -50 : direction === 'right' ? 50 : 0,
  }),
  visible: {
    opacity: 1,
    y: 0,
    x: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  },
};

const AnimatedSection = ({ children, className, delay = 0, direction = 'up' }: Props) => (
  <motion.div
    className={className}
    custom={direction}
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true, amount: 0.15 }}
    variants={variants}
    transition={{ delay }}
  >
    {children}
  </motion.div>
);

export default AnimatedSection;

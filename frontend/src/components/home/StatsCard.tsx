import { motion } from 'framer-motion';

interface StatsCardProps {
  number: string;
  label: string;
  delay?: number;
}

export function StatsCard({ number, label, delay = 0 }: StatsCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      viewport={{ once: true }}
      className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg text-center"
    >
      <div className="text-4xl font-bold text-primary mb-2">{number}</div>
      <div className="text-gray-600 dark:text-gray-400">{label}</div>
    </motion.div>
  );
}
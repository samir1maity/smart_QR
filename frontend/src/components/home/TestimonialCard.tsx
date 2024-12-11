import { motion } from 'framer-motion';

interface TestimonialCardProps {
  quote: string;
  author: string;
  role: string;
  image: string;
  delay?: number;
}

export function TestimonialCard({ quote, author, role, image, delay = 0 }: TestimonialCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5, delay }}
      viewport={{ once: true }}
      className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg"
    >
      <div className="flex items-center space-x-4 mb-4">
        <img
          src={image}
          alt={author}
          className="w-12 h-12 rounded-full object-cover"
        />
        <div>
          <div className="font-semibold text-gray-900 dark:text-white">{author}</div>
          <div className="text-sm text-gray-600 dark:text-gray-400">{role}</div>
        </div>
      </div>
      <p className="text-gray-600 dark:text-gray-400 italic">"{quote}"</p>
    </motion.div>
  );
}
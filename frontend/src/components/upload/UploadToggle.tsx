import { Button } from '../ui/Button';
import { Image, Link } from 'lucide-react';
import { motion } from 'framer-motion';

interface UploadToggleProps {
  mode: 'image' | 'url';
  onModeChange: (mode: 'image' | 'url') => void;
}

export function UploadToggle({ mode, onModeChange }: UploadToggleProps) {
  return (
    <div className="flex justify-center space-x-2 p-1 bg-gray-100 dark:bg-gray-700 rounded-lg">
      <Button
        variant={mode === 'image' ? 'primary' : 'ghost'}
        size="sm"
        onClick={() => onModeChange('image')}
        className="relative"
      >
        <Image className="w-4 h-4 mr-2" />
        Upload Image
        {mode === 'image' && (
          <motion.div
            layoutId="activeIndicator"
            className="absolute inset-0 bg-primary rounded-md -z-10"
            initial={false}
            transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
          />
        )}
      </Button>
      <Button
        variant={mode === 'url' ? 'primary' : 'ghost'}
        size="sm"
        onClick={() => onModeChange('url')}
        className="relative"
      >
        <Link className="w-4 h-4 mr-2" />
        Enter URL
        {mode === 'url' && (
          <motion.div
            layoutId="activeIndicator"
            className="absolute inset-0 bg-primary rounded-md -z-10"
            initial={false}
            transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
          />
        )}
      </Button>
    </div>
  );
}
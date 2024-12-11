import { useCallback } from 'react';
import { useDropzone } from 'react-dropzone';
import { Upload } from 'lucide-react';
import { motion } from 'framer-motion';

interface DropzoneProps {
  onFileSelect: (file: File) => void;
}

export function Dropzone({ onFileSelect }: DropzoneProps) {
  const onDrop = useCallback((acceptedFiles: File[]) => {
    if (acceptedFiles.length > 0) {
      onFileSelect(acceptedFiles[0]);
    }
  }, [onFileSelect]);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: {
      'image/*': ['.jpeg', '.jpg', '.png', '.gif', '.webp']
    },
    maxFiles: 1
  });

  return (
    <div
      {...getRootProps()}
      className={`border-2 border-dashed rounded-lg p-8 text-center cursor-pointer transition-colors ${
        isDragActive ? 'border-primary bg-primary/5' : 'border-gray-300 dark:border-gray-700'
      }`}
    >
      <input {...getInputProps()} />
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
        className="space-y-4"
      >
        <Upload className="mx-auto h-12 w-12 text-gray-400" />
        <div className="space-y-2">
          <p className="text-lg font-medium text-gray-700 dark:text-gray-300">
            {isDragActive ? 'Drop the file here' : 'Drag & drop your image here'}
          </p>
          <p className="text-sm text-gray-500 dark:text-gray-400">
            or click to select a file
          </p>
        </div>
        <p className="text-xs text-gray-500 dark:text-gray-400">
          Supports: JPG, PNG, GIF, WEBP (max 5MB)
        </p>
      </motion.div>
    </div>
  );
}
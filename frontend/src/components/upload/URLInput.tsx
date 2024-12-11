import { useState } from "react";
import { Input } from "../ui/Input";
import { Button } from "../ui/Button";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

interface UrlInputProps {
  onUrlSubmit: (url: string) => void;
}

export function UrlInput({ onUrlSubmit }: UrlInputProps) {
  const [url, setUrl] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!url) return alert("Please enter some data");

    if (url.trim()) {
      onUrlSubmit(url.trim());
    }
  };


  return (
    <motion.form
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
      className="space-y-4"
      onSubmit={handleSubmit}
    >
      <div className="space-y-2">
        <label
          htmlFor="url"
          className="block text-sm font-medium text-gray-700 dark:text-gray-300"
        >
          Image URL
        </label>
        <div className="flex gap-2">
          <Input
            id="url"
            type="url"
            value={url}
            onChange={(e) => setUrl(e.target.value)}
            placeholder="https://example.com/image.jpg"
            className="flex-1"
          />
          <Button type="submit" variant="secondary" disabled={!url.trim()}>
            Generate
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </div>
      <p className="text-xs text-gray-500 dark:text-gray-400">
        Enter a valid image URL (JPEG, PNG, GIF, WEBP)
      </p>
    </motion.form>
  );
}
